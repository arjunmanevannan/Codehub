const mongoose = require('mongoose');

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
  }
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
  owner:userSchema,
  value:{
    type: String
  },
  last_edit_by:userSchema
},
{versionKey: true},
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
  members: [userSchema],
  files: [fileSchema] 
},{
  versionKey: true
});

let user = mongoose.model('user', userSchema);
let file = mongoose.model('file', fileSchema);
let repository = mongoose.model('repository', repositorySchema);

module.exports.userModel = user;
module.exports.fileModel = file;
module.exports.repositoryModel = repository;