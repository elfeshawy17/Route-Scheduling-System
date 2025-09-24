import { Driver } from '../../data/models/driverModel.js';
import asyncErrorHandler from '../../middleware/asyncErrorHandler.js';
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

export default {
    addDriver,
}