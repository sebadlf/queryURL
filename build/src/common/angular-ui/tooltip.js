angular.module('angular-ui.tooltip', [
  'angular-ui.position',
  'template/tooltip/tooltip-popup.html',
  'template/popover/popover.html'
]).provider('$tooltip', function () {
  var defaultOptions = {
      placement: 'top',
      animation: true,
      popupDelay: 0
    };
  var triggerMap = {
      'mouseenter': 'mouseleave',
      'click': 'click',
      'focus': 'blur'
    };
  var globalOptions = {};
  this.options = function (value) {
    angular.extend(globalOptions, value);
  };
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }
  this.$get = [
    '$window',
    '$compile',
    '$timeout',
    '$parse',
    '$document',
    '$position',
    '$interpolate',
    function ($window, $compile, $timeout, $parse, $document, $position, $interpolate) {
      return function $tooltip(type, prefix, defaultTriggerShow) {
        var options = angular.extend({}, defaultOptions, globalOptions);
        function getTriggers(trigger) {
          var show = trigger || options.trigger || defaultTriggerShow;
          var hide = triggerMap[show] || show;
          return {
            show: show,
            hide: hide
          };
        }
        var directiveName = snake_case(type);
        var startSym = $interpolate.startSymbol();
        var endSym = $interpolate.endSymbol();
        var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'tt_title' + endSym + '" ' + 'content="' + startSym + 'tt_content' + endSym + '" ' + 'placement="' + startSym + 'tt_placement' + endSym + '" ' + 'animation="tt_animation" ' + 'is-open="tt_isOpen"' + '>' + '</div>';
        return {
          restrict: 'EA',
          scope: true,
          compile: function (tElem, tAttrs) {
            var tooltipLinker = $compile(template);
            return function link(scope, element, attrs) {
              var tooltip;
              var transitionTimeout;
              var popupTimeout;
              var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
              var triggers = getTriggers(undefined);
              var hasRegisteredTriggers = false;
              var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
              var positionTooltip = function () {
                var position, ttWidth, ttHeight, ttPosition;
                position = appendToBody ? $position.offset(element) : $position.position(element);
                ttWidth = tooltip.prop('offsetWidth');
                ttHeight = tooltip.prop('offsetHeight');
                switch (scope.tt_placement) {
                case 'right':
                  ttPosition = {
                    top: position.top + position.height / 2 - ttHeight / 2,
                    left: position.left + position.width
                  };
                  break;
                case 'bottom':
                  ttPosition = {
                    top: position.top + position.height,
                    left: position.left + position.width / 2 - ttWidth / 2
                  };
                  break;
                case 'left':
                  ttPosition = {
                    top: position.top + position.height / 2 - ttHeight / 2,
                    left: position.left - ttWidth
                  };
                  break;
                default:
                  ttPosition = {
                    top: position.top - ttHeight,
                    left: position.left + position.width / 2 - ttWidth / 2
                  };
                  break;
                }
                ttPosition.top += 'px';
                ttPosition.left += 'px';
                tooltip.css(ttPosition);
              };
              scope.tt_isOpen = false;
              function toggleTooltipBind() {
                if (!scope.tt_isOpen) {
                  showTooltipBind();
                } else {
                  hideTooltipBind();
                }
              }
              function showTooltipBind() {
                if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                  return;
                }
                if (scope.tt_popupDelay) {
                  popupTimeout = $timeout(show, scope.tt_popupDelay, false);
                  popupTimeout.then(function (reposition) {
                    reposition();
                  });
                } else {
                  show()();
                }
              }
              function hideTooltipBind() {
                scope.$apply(function () {
                  hide();
                });
              }
              function show() {
                if (!scope.tt_content) {
                  return angular.noop;
                }
                createTooltip();
                if (transitionTimeout) {
                  $timeout.cancel(transitionTimeout);
                }
                tooltip.css({
                  top: 0,
                  left: 0,
                  display: 'block'
                });
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
                positionTooltip();
                scope.tt_isOpen = true;
                scope.$digest();
                return positionTooltip;
              }
              function hide() {
                scope.tt_isOpen = false;
                $timeout.cancel(popupTimeout);
                if (scope.tt_animation) {
                  transitionTimeout = $timeout(removeTooltip, 500);
                } else {
                  removeTooltip();
                }
              }
              function createTooltip() {
                if (tooltip) {
                  removeTooltip();
                }
                tooltip = tooltipLinker(scope, function () {
                });
                scope.$digest();
              }
              function removeTooltip() {
                if (tooltip) {
                  tooltip.remove();
                  tooltip = null;
                }
              }
              attrs.$observe(type, function (val) {
                scope.tt_content = val;
                if (!val && scope.tt_isOpen) {
                  hide();
                }
              });
              attrs.$observe(prefix + 'Title', function (val) {
                scope.tt_title = val;
              });
              attrs.$observe(prefix + 'Placement', function (val) {
                scope.tt_placement = angular.isDefined(val) ? val : options.placement;
              });
              attrs.$observe(prefix + 'PopupDelay', function (val) {
                var delay = parseInt(val, 10);
                scope.tt_popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              });
              var unregisterTriggers = function () {
                if (hasRegisteredTriggers) {
                  element.unbind(triggers.show, showTooltipBind);
                  element.unbind(triggers.hide, hideTooltipBind);
                }
              };
              attrs.$observe(prefix + 'Trigger', function (val) {
                unregisterTriggers();
                triggers = getTriggers(val);
                if (triggers.show === triggers.hide) {
                  element.bind(triggers.show, toggleTooltipBind);
                } else {
                  element.bind(triggers.show, showTooltipBind);
                  element.bind(triggers.hide, hideTooltipBind);
                }
                hasRegisteredTriggers = true;
              });
              var animation = scope.$eval(attrs[prefix + 'Animation']);
              scope.tt_animation = angular.isDefined(animation) ? !!animation : options.animation;
              attrs.$observe(prefix + 'AppendToBody', function (val) {
                appendToBody = angular.isDefined(val) ? $parse(val)(scope) : appendToBody;
              });
              if (appendToBody) {
                scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
                  if (scope.tt_isOpen) {
                    hide();
                  }
                });
              }
              scope.$on('$destroy', function onDestroyTooltip() {
                $timeout.cancel(transitionTimeout);
                $timeout.cancel(popupTimeout);
                unregisterTriggers();
                removeTooltip();
              });
            };
          }
        };
      };
    }
  ];
}).directive('tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltip', 'tooltip', 'mouseenter');
  }
]).directive('tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
  }
]).directive('bindHtmlUnsafe', function () {
  return function (scope, element, attr) {
    element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
    scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
      element.html(value || '');
    });
  };
});
angular.module('template/tooltip/tooltip-html-unsafe-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-html-unsafe-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/tooltip/tooltip-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" ng-bind="content"></div>\n' + '</div>\n' + '');
  }
]);