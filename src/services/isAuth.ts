import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { StatusCodes } from "http-status-codes";

import { UserDocument } from "../models/users";
import { passport } from "../config/passport";
import { appError } from "../utils/appError";

export interface AuthRequest
  extends Request<ParamsDictionary, object, Document> {
  name?: string;
}

export const isAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: unknown, user: UserDocument) => {
      if (err || !user) {
        next(appError(StatusCodes.UNAUTHORIZED, "Unauthorized"));
        return;
      }
      req.name = user.name;
      next();
    }
  );
};

export default isAuth;
