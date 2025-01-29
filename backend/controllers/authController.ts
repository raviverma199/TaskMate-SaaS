import { Request, Response, NextFunction } from "express";
import * as authservice from "../services/authservice";
import { GenerateTokenAndSetCookie } from "../middlewares/authmiddleware";

// Controller to Create New User
export const signupuser = async (req: Request, res: Response) => {
  try {
    let { user_name, email, password } = req.body;

    let response = await authservice.signupuser(user_name, email, password);

    let Token = await GenerateTokenAndSetCookie(response, res);

    if (response.status == false) {
      res.json({ success: false, data: response });
    } else {
      res.json({ success: true, data: response, Token: Token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, ErrorMsg: "Internal Server Error" });
  }
};

// Controller for Login the user
export const LoginUser = async(req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error(error)
    res.status(500).json("Internal Server Error")
  }
}
