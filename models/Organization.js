const mongoose = require('mongoose');
const {Schema}=mongoose;

const OrganizationSchema = new Schema({
    name:{
    type: String,
    required: true
   },

   location:{
    type: String,
    required:true,
    unique:true,
   },

   date:{
    type:Date,
    default:Date.now
   },

   //foreign keys
   u_id: {type: mongoose.Schema.Types.ObjectId, ref:'User'}

  });

  const Organization = mongoose.model('Organization' , OrganizationSchema);
  module.exports = Organization