const repositoryDB = require('./../util/repositoryDB')

exports.renderHomePage = (req,res) => {
    repositoryDB.getPublicRepositories(function(publicRepositores){
        res.render('index', {repositories: publicRepositores, user: null});
    })
}