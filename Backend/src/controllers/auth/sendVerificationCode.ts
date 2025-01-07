import { Request, Response } from "express";
import { User } from "../../models/usersModel";
import EmailUtils from "../../utils/emailUtils";
import HashUtils from "../../utils/hashUtils";
import { z } from "zod";
import { HTTPCode } from "../../utils/commonTypes";

const sendVerificationCodeSchema = z.object({
  email: z.string().email(),
});

const sendVerificationCode = async (req: Request, res: Response) => {
  const { email } = sendVerificationCodeSchema.parse(req.body);

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    res.status(404).json({ success: false, message: "User does not exist!" });
    return;
  }
  if (existingUser.verified) {
    res
      .status(400)
      .json({ success: false, message: "You are already verified!" });
    return;
  }

  const codeValue = Math.floor(Math.random() * 1000000).toString();
  await EmailUtils.sendRawMail(
    existingUser.email,
    "Verification Code",
    `<h1>${codeValue}</h1>`
  );

  const hashedCodeValue = HashUtils.processHmac(
    codeValue,
    process.env.HMAC_VERIFICATION_CODE_SECRET as string
  );
  existingUser.verificationCode = hashedCodeValue;
  existingUser.verificationCodeValidation = Date.now();
  await existingUser.save();

  res.status(HTTPCode.Done).json({ message: "Code sent!" });
};

export default sendVerificationCode;
