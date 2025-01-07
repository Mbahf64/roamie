import { HTTPCode } from "./commonTypes";

export class AppError extends Error {
  readonly errorCode: HTTPCode;  
  readonly rawData: Record<string, unknown>;

  private static readonly defaultMessages: Record<HTTPCode, string> = {
    [HTTPCode.Done]: "Done",
    [HTTPCode.Created]: "Successfully Created",
    [HTTPCode.BadRequest]: "Bad Request",
    [HTTPCode.Unauthorized]: "Unauthorized Request",
    [HTTPCode.NotFound]: "Not Found",
    [HTTPCode.InternalServerError]: "Internal Server Error",
    [HTTPCode.Conflict]: "Conflict",
  };

  constructor(code: HTTPCode, message?: string, data?: Record<string, unknown>) {
    super(message ?? AppError.defaultMessages[code]);

    this.errorCode = code;
    this.rawData = data ?? {};

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  // Add this getter for statusCode
  get statusCode() {
    return this.errorCode;
  }
}
