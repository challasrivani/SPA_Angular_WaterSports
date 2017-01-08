"use strict";

angular.module("csMenu").controller("csMenuController", ['$scope','$rootScope', function ($scope,$rootScope) {

    this.getActiveElement = function(){
        return $scope.activeElement;
    };

    this.setActiveElement = function (el) {
        $scope.activeElement = el;
        
    };

    this.setRoute = function (route) {
        $rootScope.$broadcast('cs-menu-item-selected-event', { route: route }); 
    };
}]);