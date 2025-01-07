import nodemailer from "nodemailer";
import { AppError } from "./appError";
import { HTTPCode } from "./commonTypes";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
    pass: process.env.NODE_CODE_SENDING_EMAIL_PASSWORD,
  },
});

export default class EmailUtils {
  static async sendRawMail(email: string, title: string, value: string) {
    const mail = await transport.sendMail({
      from: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
      to: email,
      subject: title,
      html: value,
    });

    if (mail.accepted.length === 0) {
      throw new AppError(HTTPCode.InternalServerError, "Couldn't send email");
    }
  }
}
