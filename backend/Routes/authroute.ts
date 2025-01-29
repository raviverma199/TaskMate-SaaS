import express, { Request, Response, NextFunction } from "express";
const route = express.Router();
import * as authcontroller from "../controllers/authController";


// Api for Create New User
route.post("/createuser", authcontroller.signupuser);

// Api for Login User
route.post("/login")

export default route;
