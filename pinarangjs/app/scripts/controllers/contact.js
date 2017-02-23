'use strict';

/**
 * @ngdoc function
 * @name pinara.controller:ContactController
 * @description
 * # ContactController
 * Controller of the pinara
 */

function ContactController() {
this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
console.log("Contact Controller");
}


angular.module('pinara').controller('contactCtrl', ContactController);
