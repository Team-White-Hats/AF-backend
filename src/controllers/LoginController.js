const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

const user = require("../model/UserModel");
const admin = require("../model/AdminModel");
const { LoginValidation } = require("../validation/loginValidation");
const LocalStorage = require("node-localstorage").LocalStorage;

var localStorage = new LocalStorage("./scratch");

const login = async (req, res) => {
	try {
		//validate the user input fields
		const { error } = LoginValidation(req.body);
		if (error) {
			res.send({ message: error["details"][0]["message"] });
		}

		// taking data from the database for relavent username
		const userData = await user.findOne({
			email: req.body.email,
		}); // if it is a user
		const adminData = await admin.findOne({
			email: req.body.email,
		}); // if it is a admin

		console.log("userData", userData);

		if (userData) {
			// code fot testing purposes

			localStorage.setItem("isUser", userData.isUser);

			// decypting the user password
			const decryptedPassword = CryptoJS.AES.decrypt(
				userData.password,
				process.env.PASS_SECRET,
			).toString(CryptoJS.enc.Utf8);

			try {
				// checking whether the password we entered is correct or not
				if (decryptedPassword !== req.body.password) {
					res.status(401).json("Wrong Password !");
					console.log("Wrong Password!");
				} else {
					console.log(userData);
					console.log("Login Successfull !");
					// generating the web token to the specified user
					const accessToken = JWT.sign(
						{
							_id: userData.id,
						},
						process.env.JWT_SECRET,
						{ expiresIn: "3d" },
					);

					const json = {
						authentication: accessToken,
						role: "user",
						roleData: userData,
					};

					// if the user exist : show data in the user variable
					res.status(200).json(json);
				}
			} catch (err) {
				res.status(400).json(err.message); // error handling
			}
		} else if (adminData) {
			localStorage.setItem("isAdmmin", adminData.isAdmin);

			// decypting the patient password
			const decryptedPassword = CryptoJS.AES.decrypt(
				adminData.password,
				process.env.PASS_SECRET,
			).toString(CryptoJS.enc.Utf8);

			try {
				// checking whether the password we entered is correct or not
				if (decryptedPassword !== req.body.password) {
					return res.status(401).json("Wrong Password !");
				} else {
					// Testing Purpose
					console.log(adminData);
					console.log("Login Successfull !");

					// generating the web token to the specified user
					const accessToken = JWT.sign(
						{
							_id: adminData.id,
						},
						process.env.JWT_SECRET,
						{ expiresIn: "3d" },
					);

					res.header("authentication", accessToken).send({
						authentication: accessToken,
						role: "admin",
						roleData: adminData,
					});

					// if the user exist : show data in the user variable
					res.status(200).json({ accessToken });
				}
			} catch (err) {
				res.status(400).json(err.message); // error handling
			}
		} else {
			res.status(500).json("Wrong credentials !");
		}
	} catch (err) {
		console.log(err);
		res.status(400).json(err.message);
	}
};

let refreshTokens = [];

const logout = async (req, res) => {
	const TokenRefresh = req.params.authentication;

	localStorage.clear();

	try {
		refreshTokens = refreshTokens.filter(
			(accessToken) => accessToken !== TokenRefresh,
		);
		res.status(200).json("You are logged out successfully");
		console.log("You are logged out successfully !");
	} catch (err) {
		return res.status(400).send({ message: err });
	}
};

module.exports = { login, logout };
