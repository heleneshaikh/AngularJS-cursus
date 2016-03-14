'use strict';

(function() {
    
    function OtherCtrl($scope) {
    	//inherits from parent appCtrl
    	$scope.generate = function() {
    		$scope.viewdata.random = Math.random();
    	};
    }

    angular.module('demoApp')
    .controller('otherCtrl', OtherCtrl);
    
    
})();