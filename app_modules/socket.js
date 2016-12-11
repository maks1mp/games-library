let players = [];

class SOCKET {
  static updateList(data){
    let userId = players.find( player => player.id === data.id );
    if (!userId) players.push(data);
  }
  static getPlayers(){
    return players;
  }
}

module.exports = SOCKET;