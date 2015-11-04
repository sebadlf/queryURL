/**************************************************************************************************/
// Author: Globant
// Date: 08/10/2015
//Config File
/**************************************************************************************************/

angular.module('mConfiguration', [])
  .factory('configuration', function($location, $q){
    var serviceInstance={},
        activeURL = '',
        environment=[
          {
          'environment':'dev',
            'url': 'http://cspappdev01/Services/ServiceProviders.asmx'
          },
          {
          'environment':'test',
            'url': 'https://cspdbtst.emc.com/Services/ServiceProviders.asmx'
          },
          {
          'environment':'production',
            'url': 'https://cspdb.emc.com/Services/ServiceProviders.asmx'
          }
        ],
        mock=[
          {
          'environment':'production',
            'url': 'src/blue-level-response.json'
          },
          {
          'environment':'dev1',
            'url': 'src/blue-level-response2.json'
          }
        ],
        active= 'test';




/**************************************************************************************************/
// Author: Globant
// Date: 04/11/2015
// Set environment
/**************************************************************************************************/
function setEnvironment(selectedEnv) {
    var url,
    deferred = $q.defer();
      //Check for a desired environment
      if (selectedEnv){
        url = environment.filter(function(e) {
          return e.environment === selectedEnv;
        });
      }

      //Fallback to production if the desired environment doesn't esxist
      if(!url || !url.length){
        url = environment.filter(function(e) {
          return e.environment === 'test';
        });
      }

      url = url[0].url;
      console.log(url);
      deferred.resolve(url);
      activeURL=url;
      return deferred.promise;
}

  serviceInstance.getActiveURL = function(){
    return activeURL.toString();
  };


  setEnvironment($location.search().env);
  return serviceInstance;
  });