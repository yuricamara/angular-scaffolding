'use strict'

var myApp = angular.module('myApp', [
	'ui.router',
	'my-templates'
]);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home',{
		url:'/',
		templateUrl: '/'
	});
}]);
