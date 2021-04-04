const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Codehub', {useNewUrlParser: true, useUnifiedTopology: true});

const database = require('./../models/database')
const userModel = database.userModel


const addUser = (userObj, callback) => {
    const User = new userModel(userObj);
    User.save(function(err){
        if(err){
          console.log("Error while creating new user: "+err);
          return;
        }
        callback(User);
    });
}


const editUser = async (userObj, id, callback) => {
  const options = {new : true}  
  const user = await userModel.findByIdAndUpdate(id, userObj, options)

  if(!user){
    console.log("Error while creating new user: "+err);
    return;
  }
  callback(user);
  
}

module.exports.editUser = editUser;
module.exports.addUser = addUser;