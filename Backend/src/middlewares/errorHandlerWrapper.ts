import { Request, Response } from "express";
import { AppError } from "../utils/appError";
import { ZodError } from "zod";
import { HTTPCode } from "../utils/commonTypes";

const errorHandlerWrapper = (h: (req: Request, res: Response) => void) => {
  return (req: Request, res: Response) => {
    try {
      h(req, res);
    } catch (error) {
      if (error instanceof AppError) {
        res.status(error.errorCode).send(error.message);
        return;
      } else if (error instanceof ZodError) {
        res.status(HTTPCode.BadRequest).send(error.message);
        return;
      }

      res.status(HTTPCode.InternalServerError).send({});
    }
  };
};

module.exports = errorHandlerWrapper;  // Using CommonJS export

