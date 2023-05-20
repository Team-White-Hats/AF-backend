const router = require("express").Router();

const { login, logout } = require("../controllers/LoginController");
const { verifyToken } = require("../verifyToken/verifyToken");

router.post("/", login);
router.post("/logout", verifyToken, logout);

module.exports = router;