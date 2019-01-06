angular.module('app.directives', [])

.directive('slideToggle', function() {  
  return {
    restrict: 'A',      
    scope:{
      isOpen: "=slideToggle"
    },  
    link: function(scope, element, attr) {
      scope.$watch('isOpen', function(newIsOpenVal, oldIsOpenVal){
        if(newIsOpenVal !== oldIsOpenVal){ 
          element.stop().slideToggle(200);
        }
      });
      
    }
  };  
})
.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            console.log('Yess');
            if (scope.$last === true) {
                $timeout(function () {
                    //scope.$emit(attr.onFinishRender);
                    scope.$evalAsync(attr.onFinishRender);
                    //scope.$eval(attr.onFinishRender);
                });
            }
        }
    }
})