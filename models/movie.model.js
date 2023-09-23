// cast, lang, name, de,taurl, rstatus, re Date,

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  languages: {
    type: [String],
    require: true,
  },
  cast: {
    type: [String],
    require: true,
  },
  releaseDate: {
    type: Date,
    require: true,
  },
  releaseStatus: {
    type: String,
    require: true,
    default: "RELEASED",
  },
  // posterUrl: {
  //   type: String,
  //   required: true,
  // },
  // trailerUrl: {
  //   type: String,
  //   required: true,
  // },
  genre: {
    type: String,
  },
  rating: {
    type: Number,
  },
  director: { type: String },
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

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
