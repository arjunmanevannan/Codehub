class File {
  constructor(name, type, owner, value, last_edit_by){
    if(typeof name === 'undefined'){
      this.name = "";
    }
    else{
      this.name = name;
    }

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

    if(typeof value === 'undefined'){
      this.value = "";  
    }
    else{
      this.value = value;
    }
      
    if(typeof last_edit_by === 'undefined'){
      this.last_edit_by = "";
    }
    else{
      this.last_edit_by = last_edit_by;
    }

    if(typeof comments === 'undefined'){
      this.comments = [];
    }
    else{
      this.comments = comments;
    }
  }
}


module.exports = File;
