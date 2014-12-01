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
