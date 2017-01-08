"use strict";

angular.module("csMenu").directive("csMenuItem", function () {
    return {
        require: '^csMenu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: "reusable-modules/csMenu/csMenuItemTemplate.html",
        link: function (scope, el, attr, ctrl) {

            el.on('click', function (evt) {
                
                scope.isActive = function () {
                    return (el === ctrl.getActiveElement());
                }
                
                evt.stopPropagation();
                evt.preventDefault();

                scope.$apply(function () {


                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });

        }
    };

});