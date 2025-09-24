import { model, Schema } from "mongoose";

const routeSchema = new Schema(
    {
        startLocation: {
            type: String,
            required: true
        },
        endLocation: {
            type: String,
            required: true
        },
        distance: {
            type: Number,
            required: true
        },
        estimatedTime: {
            type: String,
            required: true
        }
    }, {
        timestamps: true,
        versionKey: false
    }
);

export const Route = model("Route", routeSchema);