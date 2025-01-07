import { z } from "zod";
import { User } from "../../models/usersModel";
import { AppError } from "../../utils/appError";
import { HTTPCode } from "../../utils/commonTypes";
import EmailUtils from "../../utils/emailUtils";
import HashUtils from "../../utils/hashUtils";
import { Request, Response } from "express";

const sendForgotPasswordCodeSchema = z.object({
  email: z.string().email(),
});

const sendForgotPasswordCode = async (req: Request, res: Response) => {
  const { email } = sendForgotPasswordCodeSchema.parse(req.body);
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new AppError(HTTPCode.NotFound, "User does not exist!");
  }

  const codeValue = Math.floor(Math.random() * 1000000).toString();
  await EmailUtils.sendRawMail(
    existingUser.email,
    "Forgot Password Code",
    `<h1>${codeValue}</h1>`
  );

  const hashedCodeValue = HashUtils.processHmac(
    codeValue,
    process.env.HMAC_VERIFICATION_CODE_SECRET as string
  );
  existingUser.forgotPasswordCode = hashedCodeValue;
  existingUser.forgotPasswordCodeValidation = Date.now();
  await existingUser.save();

  res.status(200).json({ success: true, message: "Code sent!" });
  return;
};

export default sendForgotPasswordCode;
