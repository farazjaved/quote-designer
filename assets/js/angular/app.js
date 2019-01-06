angular.module('quoteApp', [
	'common.fabric',
	'common.fabric.utilities',
	'common.fabric.constants',
	'ngRoute',
	'app.services',
	'app.directives',
	'app.controllers',
	'minicolors',
	'ui.bootstrap',
	'ngCookies'
])

/*.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html"
    })
    .when("/editor", {
        templateUrl : "templates/editor.html"
    })
    .when("/share", {
        templateUrl : "templates/ImageShare.html"
    });
})*/


.controller('ShareImageCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance){
	$scope.shareImage = $modalInstance.shareImage;
	$scope.quoteText = $modalInstance.quoteTitle;

	$scope.cancel = function(){
    	$modalInstance.dismiss('cancel');
	}
}])

.directive('onSizeChanged', ['$window', '$timeout', function ($window, $timeout) {
    return {
        restrict: 'A',
        scope: {
            onSizeChanged: '&'
        },
        link: function (scope, $element, attr) {
            var element = $element[0];

            cacheElementSize(scope, element);
            $window.addEventListener('resize', onWindowResize);

            function cacheElementSize(scope, element) {
                scope.cachedElementWidth = element.offsetWidth;
                scope.cachedElementHeight = element.offsetHeight;
            }

            function onWindowResize() {
                var isSizeChanged = scope.cachedElementWidth != element.offsetWidth || scope.cachedElementHeight != element.offsetHeight;
                if (isSizeChanged) {
                    var expression = scope.onSizeChanged();
                    $timeout(function () {
                        expression(element.offsetWidth, element.offsetHeight);
                    }, 500);

                }
            }
            
            $element.ready(function(){
              scope.$apply(function(){
                 onWindowResize();
              })
            })
        }
    }
}])
.filter('percentageText', function() {
    return function(x) {
        return (x * 100) + ' %'; 
    };
});;