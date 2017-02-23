'use strict';


function PinaraFooterController() {
  console.log("pinara footer");
}

angular.module('pinara').directive('pinaraFooter', function() {
    return {
        restrict: 'E',
        replace: true,
        // link: function(scope, elem, attr) {},
        controller: PinaraFooterController,
        controllerAs: 'pinaraFooterCtrl',
        templateUrl: 'views/footer.html'
    };
});
