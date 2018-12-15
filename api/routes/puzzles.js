const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Puzzle = require("../models/puzzle");

router.get("/", (req, res, next) => {
  Puzzle.find()
    .select("_id puzzle solution difficulty")
    .exec()
    .then(docs => {
      const response = {
        puzzles: docs.map(doc => {
          return {
            _id: doc._id,
            puzzle: doc.puzzle,
            solution: doc.solution,
            difficulty: doc.difficulty
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", (req, res, next) => {
  const puzzle = new Puzzle({
    _id: new mongoose.Types.ObjectId(),
    puzzle: req.body.puzzle,
    solution: req.body.solution,
    difficulty: req.body.difficulty
  });
  puzzle
    .save()
    .then(result => {
      res.status(201).json({
        message: "puzzle saved",
        puzzle: {
          _id: result._id,
          puzzle: result.puzzle,
          solution: result.solution,
          difficulty: result.difficulty
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:puzzleId", (req, res, next) => {
  const id = req.params.puzzleId;
  Puzzle.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Puzzle deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
module.exports = router;
