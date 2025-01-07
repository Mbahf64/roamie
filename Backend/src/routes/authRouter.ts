const express = require("express");
const authRoutes = require("../controllers/auth"); // Ensure this is the only import for authRoutes
const { identifier } = require("../middlewares/identification");
const errorHandlerWrapper = require("../middlewares/errorHandlerWrapper");

const getAuthRouter = () => {
  const router = express.Router();

  router.post("/signup", errorHandlerWrapper(authRoutes.signup));
  router.post("/signin", errorHandlerWrapper(authRoutes.signin));
  router.post("/signout", errorHandlerWrapper(authRoutes.signout));

  router.patch(
    "/send-verification-code",
    identifier,
    errorHandlerWrapper(authRoutes.sendVerificationCode)
  );

  router.patch(
    "/verify-verification-code",
    identifier,
    errorHandlerWrapper(authRoutes.verifyVerificationCode)
  );

  router.patch(
    "/change-password",
    identifier,
    errorHandlerWrapper(authRoutes.changePassword)
  );

  router.patch(
    "/send-forgot-password-code",
    errorHandlerWrapper(authRoutes.sendForgotPasswordCode)
  );

  router.patch(
    "/verify-forgot-password-code",
    errorHandlerWrapper(authRoutes.verifyForgotPasswordCode)
  );

  return router;
};

module.exports = getAuthRouter;
