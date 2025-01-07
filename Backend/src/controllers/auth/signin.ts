import { Request, Response } from "express";
import { z } from "zod";
import { User } from "../../models/usersModel";
import HashUtils from "../../utils/hashUtils";
import { HTTPCode } from "../../utils/commonTypes";
import { AppError } from "../../utils/appError";
import jwt from "jsonwebtoken";

const signinSchema = z.object({
  email: z.string().min(6).max(60).email(),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,}$/),
});

const signin = async (req: Request, res: Response) => {
  const { email, password } = signinSchema.parse(req.body);

  const existingUser = await User.findOne({ email }).select("+password");
  if (!existingUser) {
    res.status(401).json({ success: false, message: "User does not exist!" });
    return;
  }

  const isPasswordValid = await HashUtils.validateHash(
    password,
    existingUser.password
  );
  if (!isPasswordValid) {
    throw new AppError(HTTPCode.Unauthorized, "Invalid Credentials");
  }

  const token = jwt.sign(
    {
      userId: existingUser._id,
      email: existingUser.email,
      verified: existingUser.verified,
    },
    process.env.TOKEN_SECRET as string,
    { expiresIn: "8h" }
  );

  res.cookie("Authorization", "Bearer " + token, {
    expires: new Date(Date.now() + 8 * 3600000),
    httpOnly: process.env.NODE_ENV === "production",
    secure: process.env.NODE_ENV === "production",
  });

  res
    .status(200)
    .json({ success: true, token, message: "Logged in successfully" });
};

export default signin;
