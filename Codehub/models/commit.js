class Commit {
    constructor(content, message, isApproved){
        if(typeof content === 'undefined'){
            this.content = "";
        }
        else{
            this.content = content;
        }

        if(typeof message === 'undefined'){
            this.message = "";
        }
        else{
            this.message = message;
        }

        if(typeof isApproved === 'undefined'){
            this.isApproved = false;
        }
        else{
            this.isApproved = isApproved;
        }
    }
}

module.exports = Commit;
