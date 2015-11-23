angular.module('getResource', ['ngResource']).factory('getResource', [
  '$resource',
  '$q',
  '$timeout',
  'configuration',
  function ($resource, $q, $timeout, configuration) {
    return $resource(configuration.getActiveURL() + '/:resource/', { callback: 'JSON_CALLBACK' }, {
      get: { method: 'JSONP' },
      params: {
        serviceProviderId: '@serviceProviderId',
        url: '@url'
      }
    });
  }
]);