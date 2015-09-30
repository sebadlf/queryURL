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
        response.providers = setEMCProduct(response.providers);
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


  function setEMCProduct(providers){

    _(providers).forEach(function(provider, provider_index) {
      //console.log(provider);
      var emc_attributes = null;
      var service_offering = provider.filters.service_offering;
      for(var propertyName in service_offering) {
         //console.log(service_offering[propertyName]);
         var obj = service_offering[propertyName];
         //console.log(obj[0]);
         var attributes = obj[0];
         for(var propertyName2 in attributes) {
            if ( propertyName2 === 'emc_product'){
               console.log(attributes[propertyName2]); //value of emc_product
               provider.filters['emc_product'] = attributes[propertyName2];
               break;
            }
         }
      }
    });
    return providers;
  }

  return service;

});