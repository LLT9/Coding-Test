import { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export class AppError extends Error {
  public statusCode = StatusCodes.BAD_REQUEST;

  public isOperational = true;

  constructor(public message: string) {
    super();
    this.message = message;
  }
}

export const appError = (
  httpStatus: number,
  errMessage: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next?: NextFunction
) => {
  const error = new AppError(errMessage);
  error.statusCode = httpStatus;
  return error;
};
