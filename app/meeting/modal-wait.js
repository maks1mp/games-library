tictactoe.directive('modalWait', function(){
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: '/app/meeting/modal-invite.tpl.html',
    link: function($scope, $el, $attrs) {
      
    }
  }
})