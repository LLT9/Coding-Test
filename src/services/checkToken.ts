import { NextFunction, Request, Response } from "express";
import moment, { Moment, isMoment } from "moment";
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

    const expiredTime = (await keyvRedis.get(token)) as Moment;
    if (!moment.isMoment(expiredTime)) {
      next(appError(StatusCodes.UNAUTHORIZED, "Token is not valid", next));
      return;
    }
    const timeOut = moment() > expiredTime;
    if (timeOut) {
      await keyvRedis.delete(token);
      next(appError(StatusCodes.UNAUTHORIZED, "Token is timeout", next));
    }

    next();
  }
);
