tictactoe.directive('modalInvite', function($interval){
  return {
    restrict: 'E',
    scope: {
      rival: '=data',
    },
    templateUrl: '/app/meeting/modal-invite.tpl.html',
    link: function($scope, $el, $attrs){
      $scope.$watch('rival', function(newValue, oldValu){
         if (!!newValue) {
           $scope.isActive = true;
         }
      });
      
      $scope.closeModal = function(){
        $scope.isActive = false;
      };
    }
  }
})