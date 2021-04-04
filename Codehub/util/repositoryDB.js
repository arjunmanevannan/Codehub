const mongoose = require('mongoose');
const database = require('../models/database')
const repositoryModel = database.repositoryModel;
mongoose.connect('mongodb://localhost/Codehub', {useNewUrlParser: true, useUnifiedTopology: true});

const getPublicRepositories = (callback) => {
    repositoryModel.find({isPrivate: false}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            callback(data);
        }
    })
}

const addRepository = (repositoryObj, callback) => {
    const Repository = new repositoryModel(repositoryObj);
    Repository.save(function(err){
        if(err){
            console.log("Error while creating new repository: "+err);
            return;
        }
        callback(Repository);
    })
}

module.exports.getPublicRepositories = getPublicRepositories;
module.exports.addRepository = addRepository;