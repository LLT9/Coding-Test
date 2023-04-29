import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { AppError } from "./appError.js";
import { responseErrorDev, responseErrorProd } from "./responseError.js";

export const handleError = (
  err: AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next?: NextFunction
) => {
  const currentError = err;

  currentError.statusCode ||= StatusCodes.INTERNAL_SERVER_ERROR;

  if (String(process.env.NODE_ENV) === "dev") {
    return responseErrorDev(currentError, res);
  }

  if (currentError.name === "ValidationError") {
    currentError.message = "The input of field is wrong, please try again.";
    currentError.isOperational = true;
    return responseErrorProd(currentError, res);
  }

  return responseErrorProd(currentError, res);
};
