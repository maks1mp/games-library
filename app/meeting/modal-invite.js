tictactoe.directive('modalInvite', function($interval){
  return {
    restrict: 'E',
    scope: {
      rival: '=data',
      callback: '&',
    },
    templateUrl: '/app/meeting/modal-invite.tpl.html',
    link: function($scope, $el, $attrs){      
      $scope.$watch('rival', function(newValue, oldValue){
         if (!!newValue) $scope.isActive = true;
      });
      
      $scope.closeModal = function(message){
        $scope.isActive = false;
      };
    }
  }
})