angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nosotros', {
			templateUrl: 'views/us.html',
			controller: 'MainController'
		})

		.when('/historia', {
			templateUrl: 'views/history.html',
			controller: 'MainController'
		})

		.when('/contacto', {
			templateUrl: 'views/info.html',
			controller: 'MainController'	
		})

		.when('/cancionero', {
			templateUrl: 'views/songs.html',
			controller: 'MainController'	
		})

		.when('/descargas', {
			templateUrl: 'views/downloads.html',
			controller: 'MainController'	
		});

	


}]);