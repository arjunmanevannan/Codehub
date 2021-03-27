const repositoryDB = require('./../util/repositoryDB')
const userDB = require('./../util/userDB')
const fileDB = require('./../util/fileDB');
const userClass = require('./../models/user');
const fileClass = require('./../models/file');

exports.renderHomePage = (req,res) => {
    repositoryDB.getPublicRepositories(function(publicRepositores){
        res.render('index', {repositories: publicRepositores, user: null});
    })
}

exports.addUser = (req,res) => {
    const userObj = new userClass("Arjun", "M", "amanevan", "qwerty", "India", "Student", "CS", "2064924398");
    userDB.addUser(userObj, function(result){
        res.send(result);
    })
}

exports.addFile = (req, res) => {
    const userObj = new userClass("Arjun", "M", "amanevan", "qwerty", "India", "Student", "CS", "2064924398");
    const fileObj  = new fileClass("sample.txt", "txt", userObj, "Hello World", userObj );
    fileDB.addFile(fileObj, function(result){
        res.send(result);
    })
}
