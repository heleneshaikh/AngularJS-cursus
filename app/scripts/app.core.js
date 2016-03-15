'use strict';

(function() {
  angular.module('demoApp.core', ['ngRoute'])
         .config(function($routeProvider) {
           $routeProvider.when('/home', {
             templateUrl: 'views/home.html'
           });
           $routeProvider.when('/form', {
              templateUrl: 'views/form.html'
           });
           $routeProvider.otherwise( {
             redirectTo: '/home'
              //or templateUrl: ''
           });

         });

})();
