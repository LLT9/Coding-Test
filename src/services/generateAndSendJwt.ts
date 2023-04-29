import { Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import moment from "moment";
import { User } from "@prisma/client";

import { responseSuccess } from "../utils/responseSuccess";
import { keyvRedis } from "../config/keyvRedis";

const JWT_SECRET = process.env.JWT_SECRET || "default-secret";
const JWT_EXPIRES_DAY = process.env.JWT_EXPIRES_DAY || "10d";

const setupTokenToKeyvRedis = async (token: string) => {
  try {
    const currentTime = moment();
    const expiredTime = moment(currentTime).add(10, "d");
    await keyvRedis.set(token, expiredTime);
  } catch (error) {
    if (error instanceof Error) throw error;
  }
};

export const generateAndSendJwt = async (
  res: Response,
  statusCode: number,
  user: User
) => {
  const { id, name } = user;
  const token = jsonwebtoken.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_DAY
  });

  try {
    await setupTokenToKeyvRedis(token);
    responseSuccess(res, statusCode, { user: { token, name } });
  } catch (error) {
    console.log(error);
  }
};
