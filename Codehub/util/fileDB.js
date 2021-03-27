const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Codehub', {useNewUrlParser: true, useUnifiedTopology: true});

const database = require('./../models/database')
const fileModel = database.fileModel


const addFile = (fileObj, callback) => {
    const File = new fileModel(fileObj);
    File.save(function(err){
        if(err){
          console.log("Error while creating new user: "+err);
          return;
        }
        callback(File);
    });
}


module.exports.addFile = addFile;