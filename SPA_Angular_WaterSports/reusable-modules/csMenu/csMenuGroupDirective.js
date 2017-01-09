"use strict";

angular.module("csMenu").directive("csMenuGroup", function () {
    return {
        require: '^csMenu',
        transclude: true,
        controller: "csMenuController",
        templateUrl: "reusable-modules/csMenu/csMenuGroupTemplate.html",
        scope: {
            label: '@',
            icon: '@'

        },
        link: function (scope, el, attr, ctrl) {

            scope.isOpen = false;

            scope.closeMenu = function() {
                scope.isOpen = false;
            }

            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;
            }

        }

    };

});