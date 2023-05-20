const CryptoJS = require("crypto-js");

const user = require("../model/UserModel");
const {
    RegistrationValidation,
} = require("../validation/userValidation");

const registerUser = async(req, res) => {
    // validating user input fields
    const { err } = RegistrationValidation(req.body);
    try {
        if(err) {
            res.send({ message: err["details"][0]["message"] });
        }

        console.log(req.body);

        // checking whether the user has already registered
        const emailExists = await user.findOne({
            email: req.body.email,
        });

        if(emailExists) {
            return res.status(400).json("User already exists !");
        }

        // creating a new user object
        const newUser = new user({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SECRET, // encrypting the password
            ).toString(),
            
        });
        console.log(newUser);

        try {
            // checking the data in the console
            const savedUser = await newUser.save(); // Save the data and await the result
res.status(200).json(savedUser);
console.log(savedUser);
console.log("User Saved Successfully!");
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
    registerUser,
    getUsers,
};
