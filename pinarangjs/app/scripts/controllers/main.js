'use strict';


function MainContentController() {
  var self = this;

  self.message = " Hello from main controller";

  console.log("pınara side menu");
}

angular.module('pinara').directive('pinaraMainContent', function() {
    return {
        restrict: 'E',
        replace: true,
        // link: function(scope, elem, attr) {},
        controller: MainContentController,
        controllerAs: 'mainContentCtrl',
        templateUrl: 'views/postlogin/main.html'
    };
});
