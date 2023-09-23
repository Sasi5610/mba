const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
  name: { type: String, required: true },

  description: { type: String, required: true },

  // theatreId: { type: String, required: true, unquie: true },

  city: { type: String, required: true },

  pinCode: { type: Number, required: true },

  movies: {
    type: [mongoose.SchemaTypes.ObjectId],
    required: true,
    ref: "Movie", // _id from the Movie collection
  },

  ownerId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "User", // _id from the User collection
  },

  createdAt: { type: Date, immutable: true, default: () => Date.now() },

  updatedAt: { type: Date, immutable: true, default: () => Date.now() },
});

const Theatre = mongoose.model("Theatre", theatreSchema);

module.exports = Theatre;
