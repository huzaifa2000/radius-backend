const mongoose = require("mongoose");
const { Schema } = mongoose;

const RequestsSchema = new Schema({
  //foreign keys
  u_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  //foreign keys
  p_id: { type: mongoose.Schema.Types.ObjectId, ref: "Passenger" },

  reqDateTime: {
    type: Date,
    default: Date.now,
  },
});

const Requests = mongoose.model("Requests", RequestsSchema);
module.exports = Requests;
