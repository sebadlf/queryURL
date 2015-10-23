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

	factory.setEnvironment = function() {
		var url;

		(function getUrl() {
			url = configuration.environment.filter(function(e) {
				//this is now hardcoded with production, later it will be parameter from getUrl(env)
				return e.environment === 'production';
			});

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