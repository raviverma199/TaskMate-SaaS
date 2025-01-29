import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
import { Response } from "express";

const GenerateTokenAndSetCookie = async (data: object, res: Response) => {
  try {
    const secretKey: string = process.env.seckret_key as string;

    let Token = await jwt.sign({ data }, secretKey, {
      expiresIn: "15d",
    });

    res.cookie("token", Token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    return Token;
  } catch (error) {
    console.error(error);
  }
};

export { GenerateTokenAndSetCookie };
