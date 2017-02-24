'use strict';


function TopMenuController() {

  console.log("pınara top menu");
}

angular.module('pinara').directive('pinaraTopMenu', function() {
    return {
        restrict: 'E',
        replace: true,
        // link: function(scope, elem, attr) {},
        controller: TopMenuController,
        controllerAs: 'topMenuCtrl',
        templateUrl: 'views/postlogin/topmenu.html'
    };
});
