class Repository {
    constructor(name, description, isPrivate,  members, files){
      if(typeof name === 'undefined'){
        this.name = "";
      }
      else{
        this.name = name;
      }

      this.isPrivate = isPrivate;
      this.description = description;

      if(typeof type === 'undefined'){
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
