import { Driver } from "../../data/models/driverModel.js";
import { Route } from "../../data/models/routeModel.js";
import asyncErrorHandler from "../../middleware/asyncErrorHandler.js"
import HttpText from "../../utils/HttpText.js";
import { Schedule } from './../../data/models/scheduleModel.js';
import { parseEstimatedTime } from './../../utils/parseEstimatedTime.js';

export const addRoute = asyncErrorHandler(
    async (req, res, next) => {
        const route = await Route.create(req.body);

        const driver = await Driver.findOneAndUpdate({ availability: true }, { $set: { availability: false } }, { new: true });
        
        if (driver) {
            const startTime = new Date();
            const mins = parseEstimatedTime(route.estimatedTime);
            const endTime = new Date(startTime.getTime() + mins * 60000);

            await Schedule.create({
                driverId: driver._id,
                routeId: route._id,
                startTime,
                endTime,
            });
        } else {
            await Schedule.create({
                routeId: route._id,
                startTime: new Date(),
                status: "unassigned"
            });
        }

        res.status(201).json({
            status: HttpText.SUCCESS,
            message: "Route added successfully",
            data: route
        });
    }
);

export default {
    addRoute,
}