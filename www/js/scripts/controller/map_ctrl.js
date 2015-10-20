define(['app', 'service/mapServices', 'directive/navMenu'], function (app) {
    app.controller('MapController', function ($scope, MapService) {
        $scope.title = "Where is Delhi?";
        $scope.latitude =28.6139;
        $scope.longitude = 77.2090;
        // Set the location to be Delhi
        MapService.initialize($scope, "map-canvas");
    })
}); 
