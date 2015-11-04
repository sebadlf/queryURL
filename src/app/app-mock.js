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
        //response.filters = setParentInNull(response.filters);
        //response.providers = setEMCProduct(response.providers);
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


  function setParentInNull(filters){
    _(filters).forEach(function(filter,filter_index){
        if (filter.parent !== null){
            filter.parent =null;
        }
        if (filter.parent_display !== null){
            filter.parent_display = null;
        }
    });
    return filters;
  }

  //var secondaryFilters = ['emc_product','service_type','geographical','public_sector','credit_card_swipe','datacenter_location'];
  var secondaryFilters = ['emc_product'];
  function setEMCProduct(providers){
    _(secondaryFilters).forEach(function(filter, filter_index) {
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
              if ( propertyName2 === filter){
                 console.log(attributes[propertyName2]); //value of emc_product
                 if (provider.filters[filter] === undefined){ //initial first
                 provider.filters[filter] = attributes[propertyName2];
                 }
                 else{ //more than one filter 
                   var obj2 = attributes[propertyName2];
                   if (! _.contains(provider.filters[filter], obj2[0]) ){
                        provider.filters[filter].push(obj2[0]);
                   }
                 }
                 break;
              }
           }
        }
      });
    });
    return providers;
  }

  return service;

});