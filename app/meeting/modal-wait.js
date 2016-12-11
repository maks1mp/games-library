tictactoe.directive('modalWait', function(){
  return {
    restrict: 'E',
    scope: {
      call: '=data',
      callback: '&',
    },
    templateUrl: '/app/meeting/modal-wait.tpl.html',
    link: function($scope, $el, $attrs) {
      $scope.$watch('call', function(newValue, oldValue){
        if (!!newValue) $scope.isActive = true;
      });
      
      $scope.closeModal = function(){
        $scope.isActive = false;
      };
    }
  }
})