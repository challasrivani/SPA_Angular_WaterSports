"use strict";

angular.module("csMenu").directive("csMenu", function () {
    return {
        transclude: true,
        scope: {

        },
        controller: "csMenuController",
        templateUrl: "reusable-modules/csMenu/csMenuTemplate.html",
        link: function (scope, el, attr) {

        }
    };

});