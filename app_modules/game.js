class Tictactoe {
  constructor(field){
    this.field = field;
  }
  static create(){
    let arr = [];
    for (let i=0;i<3; i++) {
      let interim = [];
      for (let j=0; j<3; j++) {
        interim.push(' ');
      }
      arr.push(interim);
    }
    return new Tictactoe(arr);
  }
}

module.exports = Tictactoe;