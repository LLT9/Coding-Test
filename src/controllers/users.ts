import { Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

import { generateAndSendJwt } from "src/services/generateAndSendJwt";
import { handleAsync } from "../utils/handleAsync";
import { responseSuccess } from "../utils/responseSuccess";
import { appError } from "../utils/appError";
import { UserRequest } from "../models/users";

const prisma = new PrismaClient();

export const UsersController = {
  hello: (req: UserRequest, res: Response) => {
    const message = "Hello World";
    responseSuccess(res, StatusCodes.OK, { message });
  },

  sortNum: (req: UserRequest, res: Response, next: NextFunction) => {
    const { number } = req.body;

    if (
      !number ||
      !number.length ||
      !Array.isArray(number) ||
      !number.every((value) => typeof value === "number")
    ) {
      next(appError(StatusCodes.BAD_REQUEST, "Invalid numeric array"));
      return;
    }

    responseSuccess(res, StatusCodes.OK, {
      number: number.sort((a, b) => a - b)
    });
  },

  login: handleAsync(
    async (req: UserRequest, res: Response, next: NextFunction) => {
      const { name, password } = req.body;

      if (!name || !password) {
        next(
          appError(StatusCodes.BAD_REQUEST, "Name and password are required")
        );
        return;
      }

      const user = await prisma.user.findUnique({ where: { name } });

      if (!user) {
        next(appError(StatusCodes.BAD_REQUEST, "could not find user"));
        return;
      }

      if (password !== user.password) {
        next(
          appError(StatusCodes.BAD_REQUEST, "Email or password is incorrect")
        );
        return;
      }

      await generateAndSendJwt(res, StatusCodes.OK, user);
    }
  ),

  isAuth: (req: UserRequest, res: Response) =>
    responseSuccess(res, StatusCodes.OK, { message: "Valid token" })
};
