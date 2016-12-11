let players = [];
let rooms = [];
class SOCKET {
  static updateList(data){
    let userId = players.find( player => player.id === data.id );
    if (!userId) players.push(data);
  }
  static getPlayers(){
    return players;
  }
  static createRoom(roomName){
    let roomId = rooms.find( room => room === roomName );
    if (!roomId) rooms.push(rooms);
  }
  static getRooms(){
    return rooms;
  }
  static tictactoe(){
    
  };
}

module.exports = SOCKET;