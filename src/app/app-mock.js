angular.module('appFilters').service('MockSrvApi', function($http, $q) {

  var service = {};

  service.getBlueLevelBE = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'src/blue-level-response.json'
    })
    .success(
      function(response) {
        console.log(response);
        deferred.resolve(response);
      })
    .error(
      function(response) {
        console.log(response);
        deferred.reject(response);
      });

    return deferred.promise;
  };

  return service;

});