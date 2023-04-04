import express from "express";

// controller functions
import { loginUser, signupUser, getData } from "../controllers/userControler";

const userRouter = express.Router();

// login route
userRouter.post("/login", loginUser);

// signup route
userRouter.post("/signup", signupUser);

// get data route
userRouter.get("/data", getData);

export default userRouter;
