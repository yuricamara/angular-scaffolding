'use strict';

angular.module(
  'app', [
    'ui.router',
    'ng',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'templates'
  ]
);

angular.module('app')
  .config(
    ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $ariaProvider) {

      //ui.router
      $urlRouterProvider.otherwise('/');

      $stateProvider.state(
        'Home', {
          url: '/',
          templateUrl: '/src/states/home-partial.tpl.html'
        }
      );
    }]
  );
