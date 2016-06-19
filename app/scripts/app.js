'use strict';

/**
 * @ngdoc overview
 * @name auction-ui
 * @description
 * # auction-ui
 *
 * Main module of the application.
 */
angular
    .module('auction-ui', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'swaggerUi'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/auction/:auctionId', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/apis', {
                templateUrl: 'views/apis.html',
                controller: 'ApisCtrl',
                controllerAs: 'apis'
            })
            .when('/admin', {
                templateUrl: 'views/admin.html'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });

var app = angular.module('auction-ui');

app.run( function($rootScope, $location){
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            var loggedInUser = localStorage.getItem('user');
            console.log("loggedin user " , loggedInUser);
            if (!loggedInUser) {
                if (next.templateUrl != "views/login.html") {
                    $location.path("/login");
                }
            }
        });
    });

