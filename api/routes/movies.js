import express from "express";
import Movie from "../models/Movie.js";
import verify from "../verifyToken.js";

const router = express.Router();

//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to create a new movie!");
  }
});

export default router;
