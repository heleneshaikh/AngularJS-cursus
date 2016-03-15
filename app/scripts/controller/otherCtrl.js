'use strict';

(function() {

    function OtherCtrl($rootScope, $http, apiUrl) {
    	//inherits from parent appCtrl
      var _this = this;
      _this.hide = false;

      _this.viewdata = {
        random: Math.random()
      };

    	 _this.generate = function() {  //every time we click on generate button
         var number = Math.random();
         _this.viewdata.random = number;
        $rootScope.$emit('newRandom', { random: number });
    	};

       _this.users = [ //fetch from JSOn placeholder
        /*{
          name: 'Helene',
          email: 'helene.shaikh@gmail.com'
        },
        {
          name: 'Pixie',
          email: 'pixie@gmail.com'
        }
        */
      ];

      $http.get(apiUrl + '/users').success(function(data) {
        _this.users = data;
      });

      _this.hideTable = function() {
        _this.hide = !_this.hide; //creates a toggle, sets it to true, then false, then true,...
      };

      _this.addUser = function(user) {
        var newUser = { //create new user
          name: user.name,
          email: user.email
        };
        $http.post(apiUrl + '/users', newUser).success(function(data) {
          _this.users.push(data);
          user.name=''; //reset values to add new users
          user.email='';
        });
      };
    }

    angular.module('demoApp')
    .controller('otherCtrl', OtherCtrl);


})();
