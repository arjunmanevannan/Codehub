const fileDB = require('../util/fileDB');
const userClass = require('../models/user')
const fileClass = require('../models/file');
const commitClass = require('../models/commit')



exports.addFile = (req, res) => {
    const userObj = new userClass("Arjun", "M", "amanevan", "qwerty", "India", "Student", "CS", "2064924398",[]);
    const commitObj = new commitClass("Hello World", "First Commit");
    const fileObj  = new fileClass("sample.txt", "txt", userObj, commitObj, userObj, [] );
    fileDB.addFile(fileObj, function(result){
        res.send(result);
    })
}

exports.approve = (req, res) => {
    const id = req.params.id;
    const commitObj = new commitClass("Hello hello world", "second commit");
    const fileObj = {value : commitObj};
    fileDB.editFile(fileObj, id, function(result){
        res.send(result);
    })
}

exports.commit = (req, res) => {
    const repo = find the repo.
    const user = find the manager of the repo. //ADd this information to the commit object. 
    get the commit he approves. Apply to the file.
}