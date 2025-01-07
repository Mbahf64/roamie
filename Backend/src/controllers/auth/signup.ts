import { Request, Response } from "express";
import z from "zod";
import { User } from "../../models/usersModel";
import { HTTPCode } from "../../utils/commonTypes";
import { AppError } from "../../utils/appError";
import HashUtils from "../../utils/hashUtils";
import _ from "lodash";

const signupSchema = z.object({
  email: z.string().min(6).max(60).email(),
  password: z.string().regex(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,}$")),
});

const signup = async (req: Request, res: Response) => {
  const { email, password } = signupSchema.parse(req.body);

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError(HTTPCode.Unauthorized, "User already exists!");
  }

  const hashedPassword = await HashUtils.hashString(password, 12);

  const newUser = new User({
    email,
    password: hashedPassword,
  });
  const result = await newUser.save();

  res.status(HTTPCode.Created).json({
    success: true,
    message: "Your account has been created successfully",
    result: _.omit(result, "password"),
  });
};

export default signup;
