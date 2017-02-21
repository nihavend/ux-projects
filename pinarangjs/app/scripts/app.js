'use strict';

/**
 * @ngdoc overview
 * @name pinara
 * @description
 * # pinara
 *
 * Main module of the application.
 */
angular.module('pinara', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/pinara', {
      templateUrl: 'views/main.html',
      controller: 'mainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutCtrl',
      controllerAs: 'about'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'contactCtrl',
      controllerAs: 'contact'
    })
    .otherwise({
      redirectTo: '/pinara'
    });
});
