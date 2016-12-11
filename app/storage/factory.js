tictactoe.factory('storage', function(){
  var set = function(name, id){
    localStorage.setItem('data', JSON.stringify({name: name, id: id}));
  };
  
  var check = function(){
    var storage = localStorage.getItem('data');
    return storage ? JSON.parse(storage) : false;
  }
  
  return {
    set: set,
    check: check,
  }
})