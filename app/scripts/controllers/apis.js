'use strict';

/**
 * @ngdoc function
 * @name auction-ui.controller:apisCtrl
 * @description
 * # apisCtrl
 * Controller of the auction-ui
 */
angular.module('auction-ui')
    .controller('ApisCtrl', function (config) {
        var vm = this;
        vm.swaggerJsonUrl = config.restApisUrl + "/swagger.json";
    });
