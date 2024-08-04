import { Router } from "express";
import {
  checkUserController,
  registerController,
  loginController,
  tokenLoginController,
} from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/checkUser", checkUserController);
authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/token_login", tokenLoginController);
export { authRouter };
