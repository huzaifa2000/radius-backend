const mongoose = require("mongoose");
const { Schema } = mongoose;

const PassengerSchema = new Schema({
  //foreign key
  u_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  //foreign key
  ratings_id: { type: mongoose.Schema.Types.ObjectId, ref: "Ratings" },

  //foreign key
  org_id: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },

  history: {
    type: String,
    required: true,
  },
});

const Passenger = mongoose.model("Passenger", PassengerSchema);
module.exports = Passenger;
