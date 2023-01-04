const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingsSchema = new Schema({
  //foreign keys
  u_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  //foreign keys
  ride_id: { type: mongoose.Schema.Types.ObjectId, ref: "Rides" },

  no_Of_Seats_booked: {
    type: Number,
    required: true,
    enum: ["1", "2", "3", "4"],
  },

  bookingStatus: {
    type: String,
    required: true,
    enum: ["Scheduled", "Completed"],
  },

  from: {
    type: String,
    required: true,
  },

  to: {
    type: String,
    required: true,
  },

  departTime: {
    type: Date,
    default: Date.now,
  },

  arriveTime: {
    type: Date,
    default: Date.now,
  },
});

const Bookings = mongoose.model("Bookings", BookingsSchema);
module.exports = Bookings;
