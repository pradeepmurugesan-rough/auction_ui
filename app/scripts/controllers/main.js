'use strict';

/**
 * @ngdoc function
 * @name auction-ui.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the auction-ui
 */
angular.module('auction-ui')
    .controller('MainCtrl', function (socket, config, $routeParams, rest) {
        console.log("******");
        console.log(config);
        console.log($routeParams);
        console.log("******");
        var vm = this;
        vm.auctionId = $routeParams.auctionId;
        vm.user = JSON.parse(localStorage.getItem('user'));
        rest.getAuction(vm.auctionId).then(function(data){
            console.log("data from controller");
            console.log(data);
            vm.auction = data;
            if(!vm.auction.highestBid) {
                vm.auction.highestBid = vm.auction.item.startingPrice;
            }
            vm.highestBid = {
                price : vm.auction.highestBid
            };
            vm.nextBidPrice = vm.highestBid.price + 20;
        });

        socket.on('bidUpdated', function (data) {
            console.log("================");
            console.log(data);
            console.log(typeof data);
            console.log("================");
            vm.highestBid = JSON.parse(data);
            vm.nextBidPrice = vm.highestBid.price + 20;
        });

        vm.placeBid = function() {
            var bid = {};
            bid.userId = vm.user.id;
            bid.auctionId = vm.auctionId;
            bid.price = vm.nextBidPrice;
            console.log(bid);
            rest.placeBid(bid).then(function(data){
                console.log("successfully placed the bid");
            }).catch(function(error){
                console.log(error);
            });
        }

    });
