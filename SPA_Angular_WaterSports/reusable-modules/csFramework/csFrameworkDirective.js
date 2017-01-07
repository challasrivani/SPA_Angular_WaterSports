
"use strict";

angular.module("csFramework").directive("csFramework", function () {
    return {
        transclude: false,
        scope: {
            title: '@',
            subtitle: '@',
            iconSource: '@'
        },
        controller: "csFrameworkController",
        templateUrl: "reusable-modules/csFramework/csFrameworkTemplate.html"
    };

});