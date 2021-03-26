class File {
    constructor(name, type, owner, value, last_edit_by){
      if(typeof name === 'undefined'){
        this.name = "";
      }
      else{
        this.name = name;
      }

      this.value = value;

      if(typeof type === 'undefined'){
        this.type = "";
      }
      else{
        this.type = type;
      }

      if(typeof owner === 'undefined'){
        this.owner = "";
      }
      else{
        this.owner = owner;
      }

      if(typeof last_edit_by === 'undefined'){
        this.last_edit_by = "";
      }
      else{
        this.last_edit_by = last_edit_by;
      }
    }
}

module.exports = File;
