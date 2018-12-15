const mongoose = require("mongoose");

const puzzleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  puzzle: { type: Array, required: true },
  solution: { type: Array, required: true },
  difficulty: { type: String, required: true }
});

module.exports = mongoose.model("Puzzle", puzzleSchema);
