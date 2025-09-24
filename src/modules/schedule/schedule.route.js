import { Router } from "express";
import scheduleController from "./schedule.controller.js";

export const scheduleRouter = Router();

scheduleRouter.get('', scheduleController.getSchedules);