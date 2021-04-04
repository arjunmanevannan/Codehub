const mongoose = require('mongoose');

const commitSchema = new mongoose.Schema({
  content:{
    type: String, 
    required: true
  },
  message:{
    type: String, 
    required: true
  },
  isApproved:{
    type: Boolean, 
    default: false
  }
},
{timestamps: true});


const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String
  },
  userName:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  }, 
  designation:{
      type: String
  }, 
  department:{
    type: String
  }, 
  phone: {
    type: String,
    required: true
  },
  approvals: [commitSchema]
},{
  versionKey: false
});


const fileSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  type:{
      type: String
  },
  owner: userSchema,
  value: commitSchema,
  last_edit_by:userSchema,
  comments:[String]
},
{timestamps: true}
);


const repositorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description:{
    type: String
  },
  isPrivate:{
    type: Boolean,
    default: false
  },
  owner: userSchema,
  members: [userSchema],
  files: [fileSchema]   
},
{timestamps: true});





const user = mongoose.model('user', userSchema);
const file = mongoose.model('file', fileSchema);
const repository = mongoose.model('repository', repositorySchema);
const commit = mongoose.model('commit', commitSchema);

module.exports.userModel = user;
module.exports.fileModel = file;
module.exports.repositoryModel = repository;
module.exports.commit = commit;