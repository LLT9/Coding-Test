import { Router } from "express";

import { UsersController } from "../controllers/users";
import { checkToken } from "../services/checkToken";
import { isAuth } from "../services/isAuth";

const usersRouter = Router();

usersRouter.get("/hello", UsersController.hello);

usersRouter.post("/sortnum", UsersController.sortNum);

usersRouter.post("/login", UsersController.login);
usersRouter.get("/is_auth", checkToken, isAuth, UsersController.isAuth);

export { usersRouter };
