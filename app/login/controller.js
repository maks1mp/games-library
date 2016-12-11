tictactoe.controller('loginCtrl', loginCtrl);

loginCtrl.$injector = ['$scope','$stateParams', '$state', 'socket', '$http', 'storage'];

function loginCtrl($scope, $stateParams, $state, socket, $http, storage){
  var wm = this;
  wm.request = function(name){
    return $http({
      method: 'POST',
      url: '/login',
      data: {name : name, id: Math.round(Math.random() * 10000)},
    });
  };
  
  wm.login = function(){
    if (wm.name) wm.request(wm.name).then(function(res){
      let name = res.data.name, id = res.data.id;
      if (res.data.done) {
        storage.set(name, id);
        $state.go('/meeting', {name: name, id: id});
      }
    });
  };
};