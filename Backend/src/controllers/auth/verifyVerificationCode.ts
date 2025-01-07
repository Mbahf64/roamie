import { Request, Response } from "express";
import { z } from "zod";
import { User } from "../../models/usersModel";
import { AppError } from "../../utils/appError";
import { HTTPCode } from "../../utils/commonTypes";
import HashUtils from "../../utils/hashUtils";

const verifyVerificationCodeSchema = z.object({
  email: z.string().email(),
  providedCode: z.number(),
});

const verifyVerificationCode = async (req: Request, res: Response) => {
  const { email, providedCode } = verifyVerificationCodeSchema.parse(req.body);

  const existingUser = await User.findOne({ email }).select(
    "+verificationCode +verificationCodeValidation"
  );
  if (!existingUser) {
    throw new AppError(HTTPCode.NotFound, "User does not exist!");
  }
  if (existingUser.verified) {
    throw new AppError(HTTPCode.BadRequest, "You are already verified!");
  }
  if (
    !existingUser.verificationCode ||
    !existingUser.verificationCodeValidation
  ) {
    throw new AppError(
      HTTPCode.BadRequest,
      "Something is wrong with the code!"
    );
  }
  if (Date.now() - existingUser.verificationCodeValidation > 5 * 60 * 1000) {
    throw new AppError(HTTPCode.BadRequest, "Code has expired");
  }

  const hashedCodeValue = HashUtils.processHmac(
    providedCode.toString(),
    process.env.HMAC_VERIFICATION_CODE_SECRET as string
  );
  if (hashedCodeValue !== existingUser.verificationCode) {
    throw new AppError(HTTPCode.BadRequest, "Invalid Code");
  }

  existingUser.verified = true;
  existingUser.verificationCode = undefined;
  existingUser.verificationCodeValidation = undefined;
  await existingUser.save();

  res
    .status(HTTPCode.Done)
    .json({ success: true, message: "Account verified!" });
};

export default verifyVerificationCode;
