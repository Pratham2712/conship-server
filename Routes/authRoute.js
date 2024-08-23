import { Router } from "express";
import {
  checkUserController,
  registerController,
  loginController,
  tokenLoginController,
  checkEmailController,
} from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/checkUser", checkUserController);
authRouter.post("/checkEmail", checkEmailController);
authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/token_login", tokenLoginController);
export { authRouter };
