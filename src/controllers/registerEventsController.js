const sendEmail = require("../../app");
const RegisterEvent = require("../model/registerEventModel");
const nodemailer = require("nodemailer");

const addRegisterEvent = (req, res) => {
	const {
		registerEvent_ID,
		full_Name,
		NIC,
		passport_No,
		country,
		email,
		Phone,
		gender,
		No_of_guests,
	} = req.body;
	const newRegisterEvent = new RegisterEvent({
		registerEvent_ID,
		full_Name,
		NIC,
		passport_No,
		country,
		email,
		Phone,
		gender,
		No_of_guests,
	});

	newRegisterEvent
		.save()
		.then((createdRegisterEvent) => {
			return new Promise((resolve, reject) => {
				var transporter = nodemailer.createTransport({
					service: "gmail",
					auth: {
						user: "adamchristian979@gmail.com",
						pass: "amptswubaolofkoe",
					},
				});

				const mail_configs = {
					from: "adamchristian979@gmail.com",
					to: "samithadilshan59@gmail.com",
					subject: "Tour SriLanka Event Reminder",
					text: "Im glad you registered for the upcomming event!,THANK YOU",
				};

				transporter.sendMail(mail_configs, function (error, info) {
					if (error) {
						console.log(error);
						return reject({
							message: `An error has occurred`,
						});
					}

					return resolve({ message: `Email sent successfully` });
				});
			});
		})
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			console.log(err);
		});
};

const getRegisterEvent = async (req, res) => {
	try {
		const registerevent = await RegisterEvent.find();
		res.json(registerevent);
	} catch (error) {
		res.status(400).json(error);
	}
};

const getsingleregisterevent = async (req, res) => {
	try {
		const id = req.params.id;
		const registerevent = await RegisterEvent.findById(id);
		res.status(200).json(registerevent);
	} catch (error) {
		res.status(400).json(error);
	}
};

const updateRegisterEvent = async (req, res) => {
	const registerEvent_id = req.params.id;

	try {
		const registerevent = await RegisterEvent.findById(
			registerEvent_id,
		);

		if (!registerevent) {
			return res
				.status(404)
				.json("There is a no Register for event");
		}
		const {
			registerEvent_ID,
			full_Name,
			NIC,
			passport_No,
			country,
			email,
			Phone,
			gender,
			No_of_guests,
		} = req.body;
		const regeve = await RegisterEvent.findByIdAndUpdate(
			registerEvent_id,
			{
				registerEvent_ID,
				full_Name,
				NIC,
				passport_No,
				country,
				email,
				Phone,
				gender,
				No_of_guests,
			},
		);

		res.status(201).json({ Updated: true });
	} catch (error) {
		res.status(400).json(error.message);
	}
};

const removeRegisterEvent = async (req, res) => {
	const registerEvent_ID = req.params.id;

	try {
		const registerevent = await RegisterEvent.findById(
			registerEvent_ID,
		);

		if (!registerevent) {
			return res.status(404).json("There is no register for event");
		}

		const removeRegisterEvent = await RegisterEvent.findByIdAndDelete(
			registerEvent_ID,
		);
		res.status(200).json(removeRegisterEvent);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = {
	addRegisterEvent,
	getRegisterEvent,
	updateRegisterEvent,
	getsingleregisterevent,
	removeRegisterEvent,
};
