"use strict";

angular.module("csFramework").controller("csFrameworkController", ['$scope', '$window', '$timeout','$rootScope',
    function ($scope, $window, $timeout,$rootScope) {

        $scope.isMenuButtonVisible = true;
        $scope.isMenuVerticle = true;
       
        $scope.$on('cs-menu-orientation-toggle-event', function (evt, data) {
            $scope.isMenuVerticle = data.isMenuVerticle;
        });

        $scope.$on('cs-menu-item-selected-event', function (evt, data) {
            console.log(data.route);
            $scope.routeString = data.route;
            broadcastMenuState();
            checkWidth();
        });

        $($window).on('resize.csFramework', function () {
            $scope.$apply(function () {
                checkWidth();
                broadcastMenuState();
            });
        });

        $scope.$on('$destroy', function () {
            $($window).off("resize.csFramework"); //remove the handler added earlier
        });

        var checkWidth = function () {
            var width = Math.max($($window).width(), $window.innerWidth);
            $scope.isMenuVisible = (width >= 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        $scope.menuButtonClicked = function () {

            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            $scope.$apply();
        };

         var broadcastMenuState = function () {
            $rootScope.$broadcast('cs-menu-show',
                {
                    show: $scope.isMenuVisible
                });
        };
        
        $timeout(function() {
        checkWidth();
        }, 0);
    }
]);