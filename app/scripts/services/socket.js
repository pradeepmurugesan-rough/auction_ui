'use strict';

/**
 * @ngdoc function
 * @name auction-ui.services:socket
 * @description
 * # AboutCtrl
 * Controller of the auction-ui
 */

angular.module('auction-ui').factory('socket', function ($rootScope, config) {
    console.log("******");
    console.log(config);
    console.log("******");
    var socket = io.connect(config.webSocketUrl);
    console.log("Initializing the connection of socket it");
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function (data) {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});
