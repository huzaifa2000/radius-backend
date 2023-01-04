const mongoose = require("mongoose");
const { Schema } = mongoose;

const RatingsSchema = new Schema({
  //foreign keys
  u_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  //foreign keys
  ride_id: { type: mongoose.Schema.Types.ObjectId, ref: "Rides" },

  ratingValue: {
    type: Number,
    enum: ["1", "2", "3", "4", "5"],
  },

  ratingComment: {
    type: String,
  },
});

const Ratings = mongoose.model("Ratings", RatingsSchema);
module.exports = Ratings;
