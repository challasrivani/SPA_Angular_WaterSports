
"use strict";

angular.module("csFramework").directive("csFramework", function () {
    return {
        transclude: false,
        scope: {

        },
        controller: "csFrameworkController",
        templateUrl: "reusable-modules/csFramework/csFrameworkTemplate.html"
    };

});