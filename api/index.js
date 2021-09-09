import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import moviesRoutes from "./routes/movies.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/users", usersRoutes);

app.use("/api/movies", moviesRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
