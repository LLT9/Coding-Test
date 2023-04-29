import express from "express";
import cors from "cors";
import morgan from "morgan";

import passport from "passport";
import { usersRouter } from "./routes/users.js";
import { handleError } from "./utils/handleError.js";
import { handleNotFoundError } from "./utils/handleNotFoundError.js";

const API_BASEURL = process.env.API_BASEURL || "";
const API_USERS_ENDPOINT =
  API_BASEURL + String(process.env.API_USERS_ENDPOINT || "");

const app = express();

// **** Process Error handler **** //

// Record error and stop this process while the service is done.
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception!");
  console.error(err);
  process.exit(1);
});

// Uncaught catch
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection: ", promise, "reason: ", reason);
});

// **** Setup **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

// Add APIs, must be after middleware
app.use(API_USERS_ENDPOINT, usersRouter);

// Add error handlers
app.use(handleNotFoundError);
app.use(handleError);

export { app };
