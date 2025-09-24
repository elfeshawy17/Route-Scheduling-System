import { model, Schema } from "mongoose";

const scheduleSchema = new Schema(
    {
        driverId: {
            type: Schema.Types.ObjectId,
            ref: "Driver",
        },
        routeId: {
            type: Schema.Types.ObjectId,
            ref: "Route",
            required: true
        },
        startTime: {
            type: Date,
            required: true
        },
        endTime: {
            type: Date,
        },
        status: {
            type: String,
            enum: ["active", "completed", "unassigned"],
            default: "active"
        }
    }, {
        timestamps: true,
        versionKey: false
    }
);

export const Schedule = model("Schedule", scheduleSchema);