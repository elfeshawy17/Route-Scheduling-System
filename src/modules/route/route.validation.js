import Joi from "joi";
import { createValidator } from "express-joi-validation";

const validator = createValidator({});

const addRouteSchema = Joi.object({
	startLocation: Joi.string().trim().min(1).required(),
	endLocation: Joi.string().trim().min(1).required(),
	distance: Joi.number().positive().required(),
	estimatedTime: Joi.string().trim().min(1).required()
});

export const addRouteValidator = validator.body(addRouteSchema);
