'use strict';
/**
 * @ngdoc function
 * @name angulartestApp.diectives
 * @description
 * 
 * contains directives used in this poject
 */
angular.module('angulartestApp')
.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind('keydown keypress', function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});