import { Schedule } from "../../data/models/scheduleModel.js";
import asyncErrorHandler from "../../middleware/asyncErrorHandler.js";
import HttpText from "../../utils/HttpText.js";

export const getSchedules = asyncErrorHandler(
	async (req, res, next) => {
        const pageNumber = req.query.page *1 || 1;
        if (pageNumber < 1) pageNumber = 1;
        const limit = req.query.limit || 4;
        const skip = parseInt(pageNumber -1) * limit;

		const allowed = ["active", "completed"];

		const schedules = await Schedule.find({status: { $in: allowed }})
			.populate({ path: "driverId", select: "name licenseType availability" })
			.populate({ path: "routeId", select: "startLocation endLocation distance estimatedTime" })
			.sort({ startTime: -1 })
            .limit(limit)
            .skip(skip);

		res.status(200).json({
			status: HttpText.SUCCESS,
			message: "Schedules fetched successfully",
			data: schedules
		});
	}
);

export default {
	getSchedules,
}
