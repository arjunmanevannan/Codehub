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

module.exports.getPublicRepositories = getPublicRepositories;