import { Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../../utils/appError";
import { HTTPCode } from "../../utils/commonTypes";
import { User } from "../../models/usersModel";
import HashUtils from "../../utils/hashUtils";

const changePasswordSchema = z.object({
  newPassword: z.string().regex(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,}$"/),
  oldPassword: z.string().regex(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,}$"/),
});

const changePassword = async (req: Request, res: Response) => {
  const { userId, verified } = req.user;
  const { oldPassword, newPassword } = changePasswordSchema.parse(req.body);

  if (!verified) {
    throw new AppError(HTTPCode.BadRequest, "You are not a verified user!");
  }

  const existingUser = await User.findOne({ _id: userId }).select("+password");
  if (!existingUser) {
    throw new AppError(HTTPCode.NotFound, "User does not exist!");
  }

  const isPasswordValid = await HashUtils.validateHash(
    oldPassword,
    existingUser.password
  );
  if (!isPasswordValid) {
    throw new AppError(HTTPCode.NotFound, "Wrong Password");
  }

  const hashedPassword = await HashUtils.hashString(newPassword, 12);
  existingUser.password = hashedPassword;
  await existingUser.save();

  res
    .status(HTTPCode.Done)
    .json({ success: true, message: "Password updated!" });
  return;
};

export default changePassword;