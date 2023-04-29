import passport from "passport";
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { prisma } from "./prismaClient";

interface JwtPayload {
  name?: string;
  password?: string;
}

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: String(process.env.JWT_SECRET)
};

passport.use(
  "jwt",
  new Strategy(
    options,
    async (jwt_payload: JwtPayload, done: VerifiedCallback) => {
      try {
        const user = await prisma.user.findUnique({
          where: { name: jwt_payload.name }
        });

        if (!user) {
          return done(null, false, { message: "Invalid login" });
        }

        if (user.password !== jwt_payload.password) {
          return done(null, false, { message: "Invalid password" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export { passport };
