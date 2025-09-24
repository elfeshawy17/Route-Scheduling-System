import cron from "node-cron";
import mongoose from "mongoose";
import { Schedule } from "../data/models/scheduleModel.js";
import { Driver } from "../data/models/driverModel.js";

let isRunning = false;

export function startScheduleStatusJob() {
	cron.schedule("* * * * *", async () => {
		if (isRunning) return;
		if (mongoose.connection.readyState !== 1) return;
		isRunning = true;
		const now = new Date();
		try {
			const schedules = await Schedule.find({
				endTime: { $lte: now },
				status: { $ne: "completed" }
			});

			if (schedules.length === 0) {
				isRunning = false;
				return;
			}

			const scheduleIds = schedules.map(s => s._id);
			const driverIds = schedules
				.map(s => s.driverId)
				.filter(Boolean);

			await Schedule.updateMany(
				{ _id: { $in: scheduleIds } },
				{ $set: { status: "completed" } }
			);

			if (driverIds.length > 0) {
				await Driver.updateMany(
					{ _id: { $in: driverIds } },
					{ $set: { availability: true } }
				);
			}

			console.log(`[cron] Completed ${schedules.length} schedule(s) at ${now.toISOString()}`);
		} catch (err) {
			console.error("[cron] Job failed:", err?.message || err);
		} finally {
			isRunning = false;
		}
	});
}
