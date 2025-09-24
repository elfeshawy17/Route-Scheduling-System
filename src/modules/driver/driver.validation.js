import Joi from "joi";
import { createValidator } from "express-joi-validation";

const validator = createValidator({});

const addDriverSchema = Joi.object({
	name: Joi.string().trim().min(1).required(),
	licenseType: Joi.string().trim().min(1).required(),
	availability: Joi.boolean().required()
});

export const addDriverValidator = validator.body(addDriverSchema);
