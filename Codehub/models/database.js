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

const user = mongoose.model('user', userSchema);
const file = mongoose.model('file', fileSchema);
const repository = mongoose.model('repository', repositorySchema);

module.exports.userModel = user;
module.exports.fileModel = file;
module.exports.repositoryModel = repository;