'use strict';


function SideMenuController() {
  var self = this;


  console.log("pınara side menu");

  self.lists = [{
      "name": "Selected Charts",
      "type": "charts",
      "categories": [{
          "name": "222 docs",
          "type": "charts"
      }]
  }, {
      "name": "sdf",
      "type": "tables",
      "categories": [{
          "name": "2222 docs",
          "type": "tables"
      }]
  }];



}

angular.module('pinara').directive('pinaraSideMenu', function() {
  return {
    restrict: 'E',
    replace: true,
    // link: function(scope, elem, attr) {},
    controller: SideMenuController,
    controllerAs: 'sideMenuCtrl',
    templateUrl: 'views/sidemenu.html'
  };
});
