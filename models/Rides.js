const mongoose = require('mongoose');
const {Schema}=mongoose;

const RidesSchema = new Schema({
    //foreign key
    u_id: {type: mongoose.Schema.Types.ObjectId, ref:'User'},

    departDateTime:{
        type:Date,
        default:Date.now
    },

   departLocation:{
    type: String,
    required:true,
   },

   password:{
    type: String,
    required:true
   },

   no_Of_Seats:{
    type:Number,
    required:true
   },

   pricePerSeat:{
    type:Number,
    required:true
   },

   rideType:{
    type:String,
    required:true,
    enum: ["Instant", "Regular"],
   },

   rideStatus:{
    type:String,
    required:true,
    enum:["Completed" , "Pending" , "Cancelled"]
   },

   organization:{
    type:String,
    required:true
   }
  });

  const Rides = mongoose.model('Rides' , RidesSchema);
  module.exports = Rides