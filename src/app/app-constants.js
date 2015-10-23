/**************************************************************************************************/
// Author: Globant
// Date: 08/10/2015
//Config File
/**************************************************************************************************/

angular.module('mConfiguration', [])
  .constant('configuration', {
    environment:[
      {
      'environment':'dev1',
        'url': 'http://emc.dev.bluelevel.co.uk/Services/ServiceProviders.asmx'
      },
      {
      'environment':'production',
        'url': 'https://cspdb.emc.com/Services/ServiceProviders.asmx'
      }
    ],
    active: 'dev1'
  });