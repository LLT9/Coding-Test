import { NextFunction, Request, Response } from "express";
import moment, { Moment } from "moment";
import { StatusCodes } from "http-status-codes";

import { keyvRedis } from "../config/keyvRedis";
import { handleAsync } from "../utils/handleAsync";
import { appError } from "../utils/appError";

export const checkToken = handleAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer")) {
      next(
        appError(
          StatusCodes.UNAUTHORIZED,
          "Authorization header is missing",
          next
        )
      );
      return;
    }

    const [, token] = authorization.split(" ");

    if (!token) {
      next(appError(StatusCodes.UNAUTHORIZED, "Token is missing", next));
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const expiredTime: Moment = await keyvRedis.get(token);
    const timeOut = moment() > expiredTime;
    if (timeOut) {
      await keyvRedis.delete(token);
      next(appError(StatusCodes.UNAUTHORIZED, "Token is timeout", next));
    }

    next();
  }
);
