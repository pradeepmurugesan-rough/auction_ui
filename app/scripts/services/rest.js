'use strict';

/**
 * @ngdoc function
 * @name auction-ui.services:rest
 * @description
 * # Rest Services
 * Apis to access to the rest service
 */

angular.module('auction-ui').factory('rest', function ($rootScope, config, $http) {

    return {
        getAuction : _getAuction,
        placeBid : _placeBid,
        getUsers: _getUsers
    }

    function _getAuction(auctionId) {
        console.log("AuctionId " + auctionId)
        return $http.get(config.restApisUrl + "/auction/" + auctionId)
            .then(successCallback)
            .catch(function(message) {
                console.error("Error occured while fetching the auction details");
            });
        function successCallback(data, status, headers) {
            console.log(data);
            return data.data;
        }
    }

    function _placeBid(bid) {
        console.log("Bidding for")
        console.log(bid);
        return $http.post(config.restApisUrl + "/bid/", bid)
            .then(successCallback)
            .catch(function(message) {
                console.log("error occured while adding the bid");
                console.log(message);
            });
        function successCallback(data, status, headers) {
            console.log(data);
            return data.data;
        }
    }

    function _getUsers() {
        return $http.get(config.restApisUrl + "/user" )
            .then(successCallback)
            .catch(function(message) {
                console.error("Error occured while fetching the users");
            });
        function successCallback(data, status, headers) {
            console.log(data);
            return data.data;
        }
    }

});
