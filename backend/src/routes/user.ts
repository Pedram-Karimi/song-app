import express from "express";

// controller functions
import { loginUser, signupUser } from "../controllers/userControler";

const userRouter = express.Router();

// login route
userRouter.post("/login", loginUser);

// signup route
userRouter.post("/signup", signupUser);

export default userRouter;
