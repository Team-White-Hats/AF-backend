const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const mongoose = require("mongoose");
const cors = require("cors");
const expressSession = require("express-session");
const productRoutes = require("./src/routes/ProductRoutes");
const reviewRoutes = require("./src/routes/ReviewRoutes");
const tourTripRoutes = require("./src/routes/TourTripRoute");
const userRoutes = require("./src/routes/UserRoutes");
const adminRoutes = require("./src/routes/AdminRoutes");
const loginRoutes = require("./src/routes/LoginRoutes");

const app = express();
dotenv.config();

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	}),
);

app.use(express.json());
app.set("trust proxy", 1);
const sessSettings = expressSession({
	path: "/",
	secret: "oursecret",
	resave: true,
	saveUninitialized: true,
	cookie: {
		sameSite: false,
		secure: false,
		maxAge: 360000,
	},
});

app.use(sessSettings);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
	logger.info(" Mongodb connected successfully");
});

app.get("/", (req, res) => {
	res.status(200).json({ messsage: "Server is running!" });
});

//Review API
app.use("/api/review", reviewRoutes);

//Tour Trip API
app.use("/api/tourtrip", tourTripRoutes);

//Product API
app.use("/api/product", productRoutes);

//User API
app.use("/api/user", userRoutes);

//Admin API
app.use("/api/admin", adminRoutes);

//Admin API
app.use("/api/login", loginRoutes);

app.listen(PORT, () => {
	logger.info(`Server is running on PORT: ${PORT}`);
});
