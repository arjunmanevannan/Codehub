class User {
    constructor(firstName, lastName, userName, password, location, designation, department, phone){
      this.designation = designation;
      this.lastName = lastName;
      this.department = department;
      this.location = location;
      if(typeof password === 'undefined'){
        this.password = "";
      }
      else{
        this.password = password;
      }

      if(typeof firstName === 'undefined'){
        this.firstName = "";
      }
      else{
        this.firstName = firstName;
      }

      if(typeof userName === 'undefined'){
        this.userName = "";
      }
      else{
        this.userName = userName;
      }

      if(typeof phone === 'undefined'){
        this.phone = "";
      }
      else{
        this.phone = phone;
      }
    }
}

module.exports = User;
