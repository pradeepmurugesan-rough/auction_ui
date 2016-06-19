'use strict';

/**
 * @ngdoc function
 * @name auction-ui.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the auction-ui
 */
angular.module('auction-ui')
    .controller('LoginCtrl', function (rest, $location) {
        var vm = this;
        vm.invalidLogin = false;
        rest.getUsers().then(function(data){
             vm.users = data;
        });

        vm.validate = function() {
            vm.invalidLogin = false;
            var loggedInUser = undefined;
            console.log(vm.user);
            for (var i = 0, l = vm.users.length; i < l; i++) {
                var user = vm.users[i];
                if(user.name.toUpperCase() === vm.user.name.toUpperCase()) {
                    loggedInUser = user;
                    break;
                }
            }
            console.log("loggined in user" , loggedInUser)
            if(loggedInUser === undefined) {
                vm.invalidLogin = true;
            } else {
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                $location.path("/home")
            }

        }
    });
