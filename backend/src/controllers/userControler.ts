import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../mongoModels/userModel";

interface UserDocument {
  username: string;
  email: string;
  password: string;
}

// login controller
const loginUser = async (req: Request, res: Response) => {
  try {
    // validate user input
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // check if user exists in the database
    const user: any = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // check if password is correct
    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // generate JWT token
    const token: string = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "3d" }
    );

    // return token and user info
    res.status(200).json({
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// signup controler
const signupUser = async (req: Request, res: Response) => {
  try {
    // validate user input
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Username, email, and password are required" });
    }

    // check if user already exists in the database
    const existingUser: any = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    // hash the password
    const hashedPassword: string = await bcrypt.hash(password, 10);

    // create new user object
    const user: any = new User({
      username,
      email,
      password: hashedPassword,
    });

    // save user to the database
    await user.save();

    // generate JWT token
    const token: string = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "3d" }
    );

    // return token and user info
    res.status(201).json({
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get user data controler
const getData = async (req: Request, res: Response) => {
  try {
    // get JWT token from authorization header
    const authHeader: string | undefined = req.headers.authorization;
    const token: string = authHeader?.split(" ")[1] || "";

    // verify JWT token
    const decodedToken: any = jwt.verify(
      token,
      process.env.JWT_SECRET || "default_secret"
    );
    const userId: string = decodedToken.userId;

    // retrieve user data from the database
    const user: any = await User.findById(userId);

    // return user data
    if (user) {
      res.status(200).json({ username: user.username, email: user.email });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
export { signupUser, loginUser, getData };

//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//       },
