'use strict';

(function() {
    
    
    function AppCtrl($scope, appVersion) {
        $scope.ver = appVersion;
        $scope.viewdata = {
        	random : Math.random()
        };

       }

    angular.module('demoApp')
    .controller('appCtrl', AppCtrl);
    
    
})();