'use strict';

/**
 * @ngdoc function
 * @name pinara.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pinara
 */



 function AboutController () {
    //  this.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];

this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
     console.log("about controller");


   }




angular.module('pinara').controller('aboutCtrl', AboutController);
