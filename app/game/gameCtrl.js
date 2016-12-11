gameCtrl.$injector = ['$scope', '$stateParams', 'socket', '$state'];

tictactoe.controller('gameCtrl', gameCtrl);

function gameCtrl($scope, $stateParams, socket, $state){
  var wm = this;
  wm.name = $stateParams.name;
  
  wm.init = function(){
    socket.emit('room', $stateParams.roomId);
  
    socket.on('message', function(mess){
      console.log('message');
    });  
  }
  
  wm.name ? init() :  $state.go('/meeting');
  
}