const mongoose = require('mongoose');
const {Schema}=mongoose;

const UserSchema = new Schema({
    fullName:{
    type: String,
    required: true
   },

   gender:{
    type: String,
    required: true,
    enum: [ "Male", "Female" ],
    default:'Male'
   },

   email:{
    type: String,
    required:true,
    unique:true,
   },

   date:{
    type:Date,
    default:Date.now
   },

   password:{
    type: String,
    required:true
   },

   mobileNumber:{
    type:String,
    unique:true,
    required:true
   },

   organization:{
    type:String,
    required:true
   }
  });

  const User = mongoose.model('User' , UserSchema);
  module.exports = User