angular.module('appFilters').service('CacheSrv', [
  '$rootScope',
  function ($rootScope) {
    var service = {}, selectFilterKeysOptions = [
        'service_offering',
        'tier',
        'market',
        'cloud_hq_location',
        'emc_product',
        'service_type',
        'geographical',
        'datacenter_location',
        'theater',
        'credit_card_swipe',
        'public_sector',
        'contract_type',
        'emc_certified_cloud'
      ];
    service.getKeysFilters = function () {
      return selectFilterKeysOptions;
    };
    function getGeographicalOptionsFilter(filterObject, value, parentId, optionsFilter) {
      var output = [];
      if (optionsFilter[1].hasOwnProperty(value)) {
        output = optionsFilter[0];
      } else if (optionsFilter[1].hasOwnProperty(parentId)) {
        output = optionsFilter[1][parentId];
      } else if (optionsFilter[2].hasOwnProperty(parentId)) {
        output = optionsFilter[2][parentId];
      }
      return output;
    }
    function getCloudHqLocationOptionsFilter(filterObject, value, parentId, optionsFilter) {
      if (value === 'ams' || value === 'apj' || value === 'emea') {
        return filterObject.filter.options[0];
      } else {
        if (parentId === 'apj') {
          return optionsFilter[1].apj;
        }
        if (parentId === 'ams') {
          return optionsFilter[1].ams;
        }
        if (parentId === 'emea') {
          return optionsFilter[1].emea;
        }
        if (parentId === 'aus') {
          return optionsFilter[2].aus;
        }
        if (parentId === 'bra') {
          return optionsFilter[2].bra;
        }
        if (parentId === 'can') {
          return optionsFilter[2].can;
        }
        if (parentId === 'mex') {
          return optionsFilter[2].mex;
        }
        if (parentId === 'usa') {
          return optionsFilter[2].usa;
        }
      }
    }
    function getDataCenterLocationOptionsFilter(filterObject, value, parentId, optionsFilter) {
      if (value === 'ams' || value === 'apj' || value === 'emea') {
        return filterObject.filter.options[0];
      } else {
        if (parentId === 'apj') {
          return optionsFilter[1].apj;
        }
        if (parentId === 'ams') {
          return optionsFilter[1].ams;
        }
        if (parentId === 'emea') {
          return optionsFilter[1].emea;
        }
        if (parentId === 'aus') {
          return optionsFilter[2].aus;
        }
        if (parentId === 'bra') {
          return optionsFilter[2].bra;
        }
        if (parentId === 'can') {
          return optionsFilter[2].can;
        }
        if (parentId === 'mex') {
          return optionsFilter[2].mex;
        }
        if (parentId === 'usa') {
          return optionsFilter[2].usa;
        }
      }
    }
    service.getFilter = function (key, value, filters) {
      var filterObject = {
          filter: '',
          option: []
        }, values = [];
      if (value.indexOf(',') < 0) {
        values.push(value);
      } else {
        values = value.split(',');
      }
      for (var i = 0, len = filters.length; i < len; i++) {
        if (filters[i].id === key) {
          filterObject.filter = filters[i];
          var parentId = null;
          for (var j = 0, len2 = values.length; j < len2; j++) {
            var optionsFilter = filterObject.filter.options;
            if (filterObject.filter.id === 'geographical') {
              optionsFilter = getGeographicalOptionsFilter(filterObject, values[j], parentId, optionsFilter);
              parentId = values[j];
            }
            console.log(parentId);
            if (filterObject.filter.id === 'cloud_hq_location') {
              optionsFilter = getCloudHqLocationOptionsFilter(filterObject, values[j], parentId, optionsFilter);
              parentId = values[j];
            }
            if (filterObject.filter.id === 'datacenter_location') {
              optionsFilter = getDataCenterLocationOptionsFilter(filterObject, values[j], parentId, optionsFilter);
              parentId = values[j];
            }
            var result = _.where(optionsFilter, { id: values[j] });
            if (result) {
              filterObject.option.push(result[0]);
            }
          }
        }
      }
      return filterObject;
    };
    return service;
  }
]);