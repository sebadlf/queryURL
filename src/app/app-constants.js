/**************************************************************************************************/
// Author: Globant
// Date: 08/10/2015
//Config File
/**************************************************************************************************/

angular.module('mConfiguration', [])
  .constant('configuration', {
    environment:[
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
    mock:[
      {
      'environment':'production',
        'url': 'src/blue-level-response.json'
      },
      {
      'environment':'dev1',
        'url': 'src/blue-level-response2.json'
      }
    ],
    active: 'dev1'
  });