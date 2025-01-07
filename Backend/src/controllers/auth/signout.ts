import { Request, Response } from "express";

const signout = async (req: Request, res: Response) => {
  res.clearCookie("Authorization");
  res.status(200).json({ success: true, message: "Logged out successfully" });
  return;
};

export default signout;
