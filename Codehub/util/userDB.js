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


module.exports.addUser = addUser;