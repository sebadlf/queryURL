angular.module('getResource', ['ngResource']).factory('getResource', [
  '$resource',
  '$q',
  '$timeout',
  function ($resource, $q, $timeout) {
    return $resource('https://cspdb.emc.com/Services/ServiceProviders.asmx/:resource/', { callback: 'JSON_CALLBACK' }, {
      get: { method: 'JSONP' },
      params: { serviceProviderId: '@serviceProviderId' }
    });
  }
]);