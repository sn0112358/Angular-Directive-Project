angular.module('directivePractice')
    .directive('dirDisplay', function () {
        return {
            templateUrl: 'app/dirDisplay.html',
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    scope.otherInfo = false;
                    scope.$apply();
                });
                     // console.log(scope);
                    // console.log(element);
                    // console.log(attributes);
            }
        }
    });