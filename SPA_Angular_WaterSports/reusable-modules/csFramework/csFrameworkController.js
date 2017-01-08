"use strict";

angular.module("csFramework").controller("csFrameworkController", ['$scope', function ($scope) {

    $scope.$on('cs-menu-item-selected-event', function (evt, data) {
        console.log(data.route);
        $scope.routeString = data.route;
    });

}]);