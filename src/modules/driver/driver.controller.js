import { Driver } from '../../data/models/driverModel.js';
import { Schedule } from '../../data/models/scheduleModel.js';
import asyncErrorHandler from '../../middleware/asyncErrorHandler.js';
import { driverHistoryMapper } from '../../utils/driverHistoryMapper.js';
import HttpText from '../../utils/HttpText.js';

export const addDriver = asyncErrorHandler(
    async (req, res, next) => {
        const driver = await Driver.create(req.body);

        res.status(201).json({
            status: HttpText.SUCCESS,
            message: "Driver added successfully",
            data: driver
        });
    }
);

export const getDriverRoutes = asyncErrorHandler(
    async (req, res, next) => {

        const pageNumber = req.query.page *1 || 1;
        if (pageNumber < 1) pageNumber = 1;
        const limit = req.query.limit || 4;
        const skip = parseInt(pageNumber -1) * limit;

        const driverId = req.params.id;

        const allowed = ["active", "completed"];

        const history = await Schedule.find({
            driverId,
            status: { $in: allowed }
        })
        .populate("routeId")
        .sort({startTime: -1})
        .skip(skip)
        .limit(limit);

        res.status(200).json({
            status: HttpText.SUCCESS,
            message: "Driver routes fetched successfully",
            data: history.map(driverHistoryMapper)
        });
    }
);

export default {
    addDriver,
    getDriverRoutes
}