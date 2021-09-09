import express from "express";
import Movie from "../models/Movie.js";
import verify from "../verifyToken.js";

const router = express.Router();
