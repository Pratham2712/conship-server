import { Router } from "express";
import { getOrdersController } from "../controller/mainController.js";

const mainRouter = Router();

mainRouter.get("/getorder", getOrdersController);

export { mainRouter };
