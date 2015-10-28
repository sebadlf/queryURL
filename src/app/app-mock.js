angular.module('appFilters').service('MockSrvApi', function($http, $q, configuration) {

  var service = {};

  service.getBlueLevelBE = function(selectedEnv) {
    var deferred = $q.defer();

    //Adapted from app-resource.js
    var url;

    (function getUrl() {
      //Check for a desired environment
      if (selectedEnv){
        url = configuration.mock.filter(function(e) {
          return e.environment === selectedEnv;
        });
      }

      //Fallback to production if the desired environment doesn't esxist
      if(!url || !url.length){
        url = configuration.mock.filter(function(e) {
          return e.environment === 'production';
        });
      }

      url = url[0].url;
      console.log(url);
    })();

    $http({
      method: 'GET',
      url: url
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