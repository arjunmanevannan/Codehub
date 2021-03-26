class User {
    constructor(firstName, lastName, userName, password, location, designation, department, phone){
      if(typeof firstName === 'undefined'){
        this.firstName = "";
      }
      else{
        this.firstName = firstName;
      }
      this.lastName = lastName;
      if(typeof userName === 'undefined'){
        this.userName = "";
      }
      else{
        this.userName = userName;
      }
      if(typeof password === 'undefined'){
        this.password = "";
      }
      else{
        this.password = password;
      }
      this.location = location;
      this.designation = designation;
      this.department = department;
      if(typeof phone === 'undefined'){
        this.phone = "";
      }
      else{
        this.phone = phone;
      }
    }
}

module.exports = User;
