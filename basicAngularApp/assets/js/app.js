/**
 * 
 */
var app = angular.module('basicApp',['ngRoute']);

app.config(['$routeProvider','$locationProvider',
            function($routeProvider,$locationProvider) {
					$locationProvider.hashPrefix('');
					
					$routeProvider.
					when('/home', {
						templateUrl: 'assets/templates/home.php',
						controller: 'indexController'
					}).
					when('/about', {
						templateUrl: 'assets/templates/about.php',
						controller: 'indexController'
					}).
					otherwise({
						redirectTo:'/home'
					});
}]);



