'use strict';


function PinaraHeaderController() {
  console.log("pinara header");
}

angular.module('pinara').directive('pinaraHeader', function() {
    return {
        restrict: 'E',
        replace: true,
        // link: function(scope, elem, attr) {},
        controller: PinaraHeaderController,
        controllerAs: 'pinaraHeaderCtrl',
        templateUrl: 'views/header.html'
    };
});
