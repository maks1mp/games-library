gameCtrl.$injector = ['$scope', '$stateParams'];

tictactoe.controller('gameCtrl', gameCtrl);

function gameCtrl($scope, $stateParams){
  console.log($stateParams.roomId);
  socket.emit('room', $stateParams.roomId);
}