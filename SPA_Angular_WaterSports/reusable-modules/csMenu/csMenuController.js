﻿"use strict";

angular.module("csMenu").controller("csMenuController", ['$scope','$rootScope', function ($scope,$rootScope) {

    $scope.showMenu = true;
    $scope.isVerticle = true;

    this.getActiveElement = function(){
        return $scope.activeElement;
    };

    this.setActiveElement = function (el) {
        $scope.activeElement = el;
        
    };

    this.setRoute = function (route) {
        $rootScope.$broadcast('cs-menu-item-selected-event', { route: route }); 
    };

    $scope.$on('cs-menu-show', function (evt, data) {
        console.log(data.show);
        $scope.showMenu = data.show;
    });

    $scope.toggleMenuOrientation = function () {
        $scope.isVerticle = !$scope.isVerticle;
        console.log($scope.isVerticle);
        $rootScope.$broadcast('cs-menu-orientation-toggle-event', 
        {
            isMenuVerticle: $scope.isVerticle
        });
    };
}]);