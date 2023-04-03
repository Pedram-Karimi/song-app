import express from "express";

// controller functions

import { getTracks, uploadTracks } from "../controllers/trackController";

const trackRouter = express.Router();

// login route

trackRouter.get("/", getTracks);
//
trackRouter.post("/upload", uploadTracks);

export default trackRouter;
