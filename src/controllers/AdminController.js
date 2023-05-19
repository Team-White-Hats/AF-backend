const CryptoJS = require("crypto-js");

const admin = require("../model/AdminModel");
const {
    RegistrationValidation,
} = require("../validation/adminValidation");

const registerAdmin = async(req, res) => {
    // validating admin input fields
    const { err } = RegistrationValidation(req.body);
    try {
        if(err) {
            res.send({ message: err["details"][0]["message"] });
        }

        console.log(req.body);

        // checking whether the user has already registered
        const emailExists = await admin.findOne({
            email: req.body.email,
        });

        if(emailExists) {
            return res.status(400).json("Admin already exists !");
        }

        // creating a new user object
        const newAdmin = new admin({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SECRET, // encrypting the password
            ).toString(),
        }); console.log(newAdmin);

        try {
            // checking the data in the console
            const savedAdmin = newAdmin.save(); // saving data
            res.status(200).json(savedAdmin);
            console.log(newAdmin);
            console.log("Admin Saved Successfully !");
        } catch(err) {
            res.status(400).json("Error"); // error handling
        }
    } catch(err) {
        console.log(err);
    }
};

const getUsers = async(req, res) => {
    try {
        // taking all the user data
        const allUsers = await user.find();
        res.send(allUsers); // sending the taken data
    } catch(err) {
        res.status(400).json(err.message); // error handling
    }
};

module.exports = {
    registerAdmin,
    getUsers,
};