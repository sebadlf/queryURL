/**
 * Web services factory
 */
angular.module('getResource', [
	'ngResource'
])

/**
 * Fetches application data from BlueLevel backend.
 *
 * @param  {function} $resource AngularJS RESTful service provider.
 * @param  {function} $q        AngularJS promise service.
 * @param  {function} $timeout  AngularJS wrapper for window.setTimeout.
 * @return {object}   $resource API call results.
 */
.factory('getResource', ['$resource', '$q', '$timeout', 'configuration', function($resource, $q, $timeout, configuration) {

	var factory = {};

	factory.setEnvironment = function(selectedEnv) {
		var url;

		(function getUrl() {
			//Check for a desired environment
			if (selectedEnv){
				url = configuration.environment.filter(function(e) {
					return e.environment === selectedEnv;
				});
			}

			//Fallback to production if the desired environment doesn't esxist
			if(!url || !url.length){
				url = configuration.environment.filter(function(e) {
					return e.environment === 'production';
				});
			}

			url = url[0].url;
			console.log(url);
		})();

		return $resource(
			// BlueLevel Service (DEV environment)
			//'http://emc.dev.bluelevel.co.uk/Services/ServiceProviders.asmx/:resource/',
			// EMC Service Production
			url,
			// EMC Service Development
			//'http://cspappdev01//Services/ServiceProviders.asmx/:resource/',
			{
				callback: 'JSON_CALLBACK'
			},
			{
				get:    {method: 'JSONP'},
				params: {serviceProviderId: '@serviceProviderId'}
			}
		);
	};


	return factory;
}]);
