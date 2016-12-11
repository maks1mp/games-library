tictactoe.controller('meetingCtrl', meetingCtrl);

meetingCtrl.$injector = ['$scope', '$stateParams', '$state', 'socket', 'storage', '$timeout'];

function meetingCtrl($scope, $stateParams, $state, socket, storage, $timeout){
  var wm = this;
  wm.name = $stateParams.name;
  wm.id = $stateParams.id;
  
  wm.init = function(){
    console.log('init');
    socket.emit('meeting', {name: wm.name, id: wm.id});
    socket.on('get', function(data){
      let otherPlayers = data.filter(function(d){
        return d.id != wm.id;
      });
      wm.players = otherPlayers;
    })
  };
  
  wm.invite = function(name,id){
    wm.callRival = {
      name: name,
      id: id,
    };
    socket.emit('invite', { to: {name:name ,id: id}, from: {name: wm.name, id: wm.id}} );
  };
  
  wm.invited = function(data){
    if (data.to.id === wm.id) {
      wm.rival = {
        name: data.from.name,
        id: data.from.id
      }
    }
  };
  
  wm.play = function(data){
    if (data.to.id === wm.id)
      $timeout(function(){
        $state.go('/room', { roomId: data.room, name: wm.name, id: wm.id});
      }, 500);
  }
  
  socket.on('invited', wm.invited);
  socket.on('start', wm.play)
  
  wm.callback = function(){
    var roomId = wm.rival.id+wm.id;
    socket.emit('create', {
      you: {
        name: wm.name,
        id: wm.id
      },
      rival : wm.rival,
      room: roomId
    });
  };
  
  wm.alreadyLogin = function(){
    var userData = storage.check();
    wm.name = userData.name, wm.id = userData.id;
    wm.name ? wm.init() : $state.go('/login');
  };
  
  wm.name ? wm.init() : wm.alreadyLogin();
}