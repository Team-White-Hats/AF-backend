const Joi = require("joi");

const RegistrationValidation  = (data) => {
	const SchemaValidation = Joi.object({
		firstName: Joi.string().required(),
        lastName: Joi.string().required(),
		email: Joi.string().required(),
		phoneNumber: Joi.string().required(),
		password: Joi.string().required(),
		
	});

	return SchemaValidation.validate(data);
};

module.exports.RegistrationValidation = RegistrationValidation;