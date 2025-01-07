import { z } from "zod";
import { User } from "../../models/usersModel";
import { AppError } from "../../utils/appError";
import { HTTPCode } from "../../utils/commonTypes";
import HashUtils from "../../utils/hashUtils";
import { Request, Response } from "express";

const verifyForgotPasswordCodeSchema = z.object({
  email: z.string(),
  providedCode: z.number(),
  newPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*).{8,}$/),
});

const verifyForgotPasswordCode = async (req: Request, res: Response) => {
  const { email, providedCode, newPassword } =
    verifyForgotPasswordCodeSchema.parse(req.body);

  const existingUser = await User.findOne({ email }).select(
    "+forgotPasswordCode +forgotPasswordCodeValidation"
  );
  if (!existingUser) {
    throw new AppError(HTTPCode.NotFound, "User does not exist!");
  }

  if (
    !existingUser.forgotPasswordCode ||
    !existingUser.forgotPasswordCodeValidation
  ) {
    throw new AppError(
      HTTPCode.BadRequest,
      "Something is wrong with the code!"
    );
  }

  if (Date.now() - existingUser.forgotPasswordCodeValidation > 5 * 60 * 1000) {
    throw new AppError(HTTPCode.BadRequest, "Code expired.");
  }

  const hashedCodeValue = HashUtils.processHmac(
    providedCode.toString(),
    process.env.HMAC_VERIFICATION_CODE_SECRET as string
  );
  if (hashedCodeValue === existingUser.forgotPasswordCode) {
    const hashedPassword = await HashUtils.hashString(newPassword, 12);
    existingUser.password = hashedPassword;
    existingUser.forgotPasswordCode = undefined;
    existingUser.forgotPasswordCodeValidation = undefined;
    await existingUser.save();

    res
      .status(200)
      .json({ success: true, message: "Password reset successfully!" });
    return;
  }

  throw new AppError(HTTPCode.BadRequest, "Invalid code!");
};

export default verifyForgotPasswordCode;
