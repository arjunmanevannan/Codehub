const userClass = require('../models/user');
const userDB = require('../util/userDB')

exports.addUser = (req,res) => {
    const userObj = new userClass("Arjun", "M", "amanevan", "qwerty", "India", "Student", "CS", "2064924398");
    userDB.addUser(userObj, function(result){
        res.send(result);
    })
}


exports.editUser = (req, res) => {
    let userObj = {
        "firstName" : "New"
    }
    let id = req.params.id;
    userDB.editUser(userObj, id, function(result){
        res.send(result);
    })
}