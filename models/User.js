const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);

//i need contact and user model
//with mongoose,when dealing with database resourses you need to have a model for each resourse