(function() {
    var auctionUiApp = angular.module("auction-ui");

    fetchData().then(bootstrapApplication);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get("resources/uiconfig").then(function(response) {
            auctionUiApp.constant("config", response.data);
        }, function(errorResponse) {
            // Handle error case
        });
    }

    function bootstrapApplication() {
        angular.bootstrap(document, ["auction-ui"]);
    }
}());
