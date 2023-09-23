const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  movieId: {
    type: [mongoose.SchemaTypes.ObjectId],
    required: true,
    ref: "Movie", // Movie_id from the Movie collection
  },
  theatreId: {
    type: [mongoose.SchemaTypes.ObjectId],
    required: true,
    ref: "Theatre", // Theatre_id from the Theatre collection
  },
  userId: {
    type: [mongoose.SchemaTypes.ObjectId],
    required: true,
    ref: "User", // User_id from the User collection
  },

  seats: { type: [String], required: true },

  totalCost: { type: Number, required: true },

  timing: { type: String, required: true },

  status: { type: String, required: true, default: "CONFIRMED" },

  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
