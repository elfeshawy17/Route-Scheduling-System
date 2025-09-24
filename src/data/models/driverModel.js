import { model, Schema } from "mongoose";

const driverSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        licenseType: {
            type: String,
            required: true
        },
        availability: {
            type: Boolean,
            required: true
        }
    }, {
        timestamps: true,
        versionKey: false
    }
);

export const Driver = model("Driver", driverSchema);