const mongoose = require("mongoose");
const { Schema } = mongoose;

const DriversSchema = new Schema({
  //foreign keys
  u_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  //foreign keys
  ratings_id: { type: mongoose.Schema.Types.ObjectId, ref: "Ratings" },
  //foreign keys
  org_id: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },

  histroy: {
    type: String,
    required: true,
  },
});

const Drivers = mongoose.model("Drivers", DriversSchema);
module.exports = Drivers;
