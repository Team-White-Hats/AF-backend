const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
	{
		userID: { type: String },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true },
		phoneNumber: { type: String, required: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: true },
	},

	{ timestamps: true },
);

module.exports = mongoose.model("Admin", adminSchema);