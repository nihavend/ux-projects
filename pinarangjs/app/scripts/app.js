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
  'ngTouch',
  'ui.router',
  'ui.tree'
]);

// .config(function($routeProvider) {
//   $routeProvider
//     .when('/pinara', {
//       templateUrl: 'views/main.html',
//       controller: 'mainCtrl',
//       controllerAs: 'main'
//     })
//     .when('/about', {
//       templateUrl: 'views/about.html',
//       controller: 'aboutCtrl',
//       controllerAs: 'about'
//     })
//     .when('/contact', {
//       templateUrl: 'views/contact.html',
//       controller: 'contactCtrl',
//       controllerAs: 'contact'
//     })
//     .otherwise({
//       redirectTo: '/pinara'
//     });
// });



function applicationConfig($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('prelogin', {
      title: 'Login Öncesi',
      url: '/',
      views: {
        layout: {
          templateUrl: 'views/prelogin/prelogin.html',
        },
      },
    })
    .state('home', {
      url: "/home",
      views: {
        layout: {
          templateUrl: "views/postlogin/postlogin.html",
        },
      },
    })


  // Gives page layouts to the index.html
  // $stateProvider
  //   .state('home', {
  //     title: 'Home Page',
  //     url: '/',
  //     views: {
  //       layout: {
  //         templateUrl: 'views/main.html',
  //       }
  //     }
  //   })
  //   .state('postlogin', {
  //     title: 'Login Sonrası',
  //     url: '/giris',
  //     redirectTo: 'home',
  //     views: {
  //       layout: {
  //         templateUrl: 'assets/tpl/postlogin/postlogin.layout.html'
  //       }
  //     },
  //   });

}

applicationConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('pinara').config(applicationConfig);
