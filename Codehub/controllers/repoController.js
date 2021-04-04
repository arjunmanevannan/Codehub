const repositoryClass = require('../models/repository');
const repositoryDB = require('../util/repositoryDB')



exports.renderHomePage = (req,res) => {
    repositoryDB.getPublicRepositories(function(publicRepositores){
        res.render('index', {repositories: publicRepositores, user: null});
    })
}

exports.addRepository = (req, res) => {
    const userObj0 = new userClass("Arjun", "M", "amanevan", "qwerty", "India", "Student", "CS", "2064924398");
    const userObj1 = new userClass("Akshaya", "M", "akshaa", "qwerty", "India", "Student", "CS", "2064924398");
    const userObj2 = new userClass("Amudha", "M", "amudmane", "qwerty", "India", "Student", "CS", "2064924398");
    const fileObj0  = new fileClass("sample0.txt", "txt", userObj0, "Hello World", userObj0 );
    const fileObj1  = new fileClass("sample1.txt", "txt", userObj1, "Hello World", userObj1 );
    const repository0 = new repositoryClass("CodeRepo", "A vry good repo", false, userObj2, [userObj0, userObj1], [fileObj0, fileObj1]);
    repositoryDB.addRepository(repository0, function(result){
        res.send(result);
    })
}