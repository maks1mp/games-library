const requiredFields = ['name', 'id'];

class USER {
  constructor(data){
    this.name = data.name;
    this.id = data.id;
  }
  static create(data){
    let obj = {};
    for (let i in data) {
      if (requiredFields.indexOf(i)>-1) {
        obj[i] = data[i];
      } else return;
    }
    return new USER(obj);
  }
}

module.exports = USER;