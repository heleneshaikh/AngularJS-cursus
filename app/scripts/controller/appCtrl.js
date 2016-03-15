'use strict';

(function() {

  function AppCtrl(appVersion, $rootScope, $location) {
    var _this = this;

      _this.ver = appVersion;
      _this.viewdata = {
        random : Math.random()
      };
      $rootScope.$on('newRandom', function(event, arg) { //listens to newRandom event listener
        _this.viewdata.random = arg.random;
      });

      _this.gotoForm = function() {
        $location.path('/form');
      };
     }


  angular.module('demoApp')
  .controller('appCtrl', AppCtrl);







/*
    function AppCtrl($scope, appVersion, $rootScope) { //listen to the event here
        $scope.ver = appVersion;
        $scope.viewdata = {
        	random : Math.random()
        };
        $rootScope.$on('newRandom', function(event, arg) {
          $scope.viewdata.random = arg.random; //arg is the math random
        });
       }

    angular.module('demoApp')
    .controller('appCtrl', AppCtrl);

    */


})();
