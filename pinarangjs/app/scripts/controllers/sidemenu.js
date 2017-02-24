'use strict';


function SideMenuController() {
  var self = this;


  console.log("pınara side menu");


}

angular.module('pinara').directive('pinaraSideMenu', function() {
  return {
    restrict: 'E',
    replace: true,
    // link: function(scope, elem, attr) {},
    controller: SideMenuController,
    controllerAs: 'sideMenuCtrl',
    templateUrl: 'views/postlogin/sidemenu.html'
  };
});
