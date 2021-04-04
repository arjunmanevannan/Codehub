class Repository {
  constructor(name, description, isPrivate, owner, members, files){
    if(typeof name === 'undefined'){
      this.name = "";
    }
    else{
      this.name = name;
    }
    this.description = description;

    if(typeof isPrivate === 'undefined'){
      this.isPrivate = false;
    }
    else{
      this.isPrivate = isPrivate;
    }
    this.owner = owner;
    if(typeof members === 'undefined'){
      this.members = [];
    }
    else{
      this.members = members;
    }

    if(typeof files === 'undefined'){
      this.files = [];
    }
    else{
      this.files = files;
    }
  }
}

module.exports = Repository;
