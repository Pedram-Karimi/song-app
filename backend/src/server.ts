import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// routers

import userRouter from "./routes/user";
import trackRouter from "./routes/tracks";

//
const app = express();

app.use(cors());

app.use(express.json());

//
app.use("/user", userRouter);

app.use("/tracks", trackRouter);

app.use("/tracks/upload", trackRouter);

// app.use("/albums", albumRouter);

// app.use("/artists", artistRouter);

app.get("/", (req, res) => {
  res.json("hello world shalqam");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI + "")
  .then(() => {
    app.listen(process.env.PORT, () => {});
  })
  .catch((err: string) => {
    console.log(err);
  });
