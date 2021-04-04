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


const editFile = async (fileObj, id, callback) => {
  const options = {new : true}
  const file = await fileModel.findByIdAndUpdate(id, fileObj, options)
  if(!file){
    console.log("Error while updating the file: "+err);
    return;
  }
  callback(file);
}

module.exports.addFile = addFile;
module.exports.editFile = editFile;