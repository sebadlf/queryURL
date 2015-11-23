function matchCriteria(filterFlatElement, criteria) {
  var result = true;
  if (!filterFlatElement[criteria.key]) {
    result = false;
  } else if (criteria.key === 'contract_type') {
    if (criteria.value && criteria.value.length && criteria.value[0] !== 'both') {
      result = _.intersection(filterFlatElement[criteria.key], [
        criteria.value[0],
        'both'
      ]).length > 0;
    } else {
      result = _.contains(filterFlatElement[criteria.key], criteria.value[0]);
    }
  } else {
    if (criteria.type === 'select') {
      result = _.contains(filterFlatElement[criteria.key], criteria.value[0]);
    } else if (criteria.type === 'checkbox') {
      result = _.intersection(filterFlatElement[criteria.key], criteria.value).length === criteria.value.length;
    } else if (criteria.type === 'select_cascade') {
      _.forEach(criteria.value, function (criteriaValue, index) {
        result = result && _.contains(filterFlatElement[criteria.key][index], criteriaValue);
      });
    } else {
      result = false;
    }
  }
  return result;
}
function generateCriteria($scope) {
  var criterias = [];
  _.forEach($scope.data.selected.filters, function (filterValue, filterKey) {
    criterias.push({
      key: filterKey,
      value: filterValue,
      type: _.find($scope.data.filters, { 'id': filterKey }).form_type
    });
  });
  return criterias;
}
function applySelectedFilters(filters_flat, criterias) {
  return _.filter(filters_flat, function (filterFlatElement) {
    return _.every(criterias, function (criteria) {
      return matchCriteria(filterFlatElement, criteria);
    });
  });
}
angular.module('appFilters', ['ngSanitize']).filter('toggleOptions', [function () {
    return function ($scope, action, filter_id) {
      var filters = $scope.data.filters;
      var selected = $scope.data.selected;
      var providers = $scope.data.filtered.main;
      var this_filter = {};
      var selected_siblings = {};
      var siblings = [];
      if (_.isUndefined(action)) {
        return filters;
      }
      var doToggleOptions = function (filter, filter_option, cascade_index) {
        var prvdr_fltr;
        var option_disabled = true;
        var criterias = generateCriteria($scope);
        criterias = _.reject(criterias, function (criteria) {
          return criteria.key === filter.id;
        });
        _(providers).forEach(function (provider, provider_index) {
          prvdr_fltr = applySelectedFilters(provider.filters_flat, criterias);
          prvdr_fltr = prvdr_fltr.map(function (filterItem) {
            return filterItem[filter.id];
          });
          if (filter.form_type !== 'select_cascade') {
            prvdr_fltr = _.flatten(prvdr_fltr);
          }
          if (_.contains([
              'select',
              'checkbox'
            ], filter.form_type)) {
            if (prvdr_fltr && _.contains(prvdr_fltr, filter_option[filter.id][0])) {
              option_disabled = false;
              return false;
            } else if (filter.id === 'contract_type' && _.contains(prvdr_fltr, 'both')) {
              option_disabled = false;
              return false;
            } else {
              option_disabled = true;
            }
          } else if (_.contains(['select_cascade'], filter.form_type)) {
            if (prvdr_fltr && _.find(prvdr_fltr, function (prvdr_fltr_element) {
                return prvdr_fltr_element && _.contains(prvdr_fltr_element[cascade_index], filter_option[filter.id][cascade_index][0]);
              })) {
              option_disabled = false;
              return false;
            } else {
              option_disabled = true;
            }
          }
        });
        return option_disabled;
      };
      var cascadeFilterOption = function (option_index, cascade) {
        console.log('entro cascade filter option');
        var set_filter_option = _.zipObject([this_filter.id], []);
        set_filter_option[this_filter.id] = [];
        for (var i = 0; i < this_filter.options.length; i++) {
          set_filter_option[this_filter.id].push(option_index === i ? [cascade.id] : []);
        }
        if (!_.isNull(this_filter.parent) && !_.isEmpty(selected_siblings)) {
          set_filter_option = _.assign(set_filter_option, selected_siblings);
        }
        return set_filter_option;
      };
      this_filter = _.find(filters, { 'id': filter_id });
      if (!_.isNull(this_filter.parent)) {
        siblings = _.without(_.pluck(_.where(filters, { parent: this_filter.parent }), 'id'), this_filter.id);
        if (!_.isEmpty(siblings)) {
          _(selected.filters_flat).forOwn(function (value, key) {
            var this_sibling = _.find(filters, { 'id': key });
            if (_.contains(siblings, key)) {
              if (this_sibling.form_type === 'select_cascade') {
                selected_siblings[key] = [];
                _(value).forOwn(function (value, index) {
                  selected_siblings[key][index] = [value];
                });
              } else {
                selected_siblings[key] = value;
              }
            }
          });
        }
      }
      _(this_filter.options).forEach(function (option, option_index) {
        if (_.isEmpty(option)) {
          return;
        }
        var filter_option = {};
        if (_.contains([
            'select',
            'checkbox'
          ], this_filter.form_type)) {
          filter_option = _.zipObject([this_filter.id], [[option.id]]);
          if (!_.isNull(this_filter.parent) && !_.isEmpty(selected_siblings)) {
            filter_option = _.assign(filter_option, selected_siblings);
          }
          option.disabled = doToggleOptions(this_filter, filter_option);
        } else if (_.contains(['select_cascade'], this_filter.form_type)) {
          if (option_index === 0) {
            _(option).forEach(function (cascade) {
              cascade.disabled = doToggleOptions(this_filter, cascadeFilterOption(option_index, cascade), option_index);
            });
          } else {
            _.flatten(_.values(option)).forEach(function (cascade) {
              if (!_.isPlainObject(cascade)) {
                return;
              }
              cascade.disabled = doToggleOptions(this_filter, cascadeFilterOption(option_index, cascade), option_index);
            });
          }
        } else {
          return;
        }
      });
      return filters;
    };
  }]).filter('applyFilters', [
  '$q',
  function ($q) {
    return function ($scope, action, filter_id) {
      var providers = $scope.data.providers;
      var selected = $scope.data.selected;
      var counts = $scope.data.filtered.counts;
      var filtered_count = {
          'main': 0,
          'groups': _.map($scope.data.labels.main.groups.headers, function () {
            return 0;
          })
        };
      if (_.isUndefined(action)) {
        $scope.toggleOptions();
        counts.groups[0] = filtered_count.groups;
        _(providers).forEach(function (provider) {
          counts.groups[0][provider[$scope.data.labels.main.groups.group_key]]++;
        });
        if (_.isEmpty(counts.groups[1])) {
          counts.groups[1] = _.clone(counts.groups[0]);
        }
        return providers;
      }
      if (action === 'update' && !_.isEmpty(selected.filters)) {
        $scope.data.filtered.search = null;
      }
      $q.when().then(function () {
        var criterias = generateCriteria($scope);
        _(providers).forEach(function (provider) {
          if (action === 'reset') {
            provider.hide = false;
            provider.use_filters = false;
            return;
          } else if (action === 'single') {
            if (provider.id === selected.search.id) {
              provider.hide = false;
              provider.use_filters = false;
              $scope.toggleDetail(provider.id);
            } else {
              provider.hide = true;
            }
            return;
          }
          provider.use_filters = false;
          var matchedFilters = applySelectedFilters(provider.filters_flat, criterias);
          if (matchedFilters && matchedFilters.length) {
            provider.hide = false;
          } else {
            provider.hide = true;
          }
        });
      }).then(function () {
        counts.main = _.filter(providers, function (provider) {
          return !provider.hide;
        }).length;
        _(counts.groups[0]).forEach(function (item, index) {
          counts.groups[0][index] = counts.groups[1][index] - filtered_count.groups[index];
        });
        if ((action === 'update' || action === 'reset') && !_.isNull(selected.filter_active)) {
          $scope.toggleOptions('update', $scope.data.filters[selected.filter_active.index].id);
        } else if (action === 'single') {
          $scope.resetFilters('single');
        }
      });
      return providers;
    };
  }
]).filter('trustHTML', [
  '$sce',
  function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }
]);