import { Router } from "express";
import routeController from "./route.controller.js";
import { addRouteValidator } from "./route.validation.js";


export const routeRouter = Router();

routeRouter.post('', addRouteValidator, routeController.addRoute);