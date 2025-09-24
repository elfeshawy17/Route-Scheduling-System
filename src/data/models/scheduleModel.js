import { model, Schema } from "mongoose";

const scheduleSchema = new Schema(
    {
        driverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
            required: true
        },
        routeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Route",
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        startTime: {
            type: Date,
            required: true
        },
        endTime: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ["active","completed", "cancelled"],
            default: "active"
        }
    }, {
        timestamps: true,
        versionKey: false
    }
);

export const Schedule = model("Schedule", scheduleSchema);