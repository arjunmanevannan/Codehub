const repositoryDB = require('./../util/repositoryDB')
const userDB = require('./../util/userDB')
const userClass = require('./../models/user');

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
