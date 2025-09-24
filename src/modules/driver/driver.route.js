import { Router } from "express";
import driverController from "./driver.controller.js";
import { addDriverValidator } from "./driver.validation.js";

export const driverRouter = Router();

driverRouter.post('', addDriverValidator, driverController.addDriver);