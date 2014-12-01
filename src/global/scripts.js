angular.module('templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/src/components/home/home.tpl.html',
    "<h1 class=\"home\">\n" +
    "  Home\n" +
    "</h1>\n"
  );


  $templateCache.put('/src/states/home-partial.tpl.html',
    "<home></home>\n"
  );

}]);

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


angular.module('app')
  .directive('home',function(){
    return {
      templateUrl: '/src/components/home/home.tpl.html'
    }
  })
