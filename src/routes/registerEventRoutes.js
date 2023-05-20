const express = require("express");
const router = express.Router();

const{
    addRegisterEvent,
     getRegisterEvent,
     updateRegisterEvent,
     getsingleregisterevent,
     removeRegisterEvent

} = require("../controllers/registerEventsController");

router.get("/all",getRegisterEvent);

router.post("/", addRegisterEvent);

router.put("/:id",updateRegisterEvent);

router.delete("/:id",removeRegisterEvent);

router.get("/:id",  getsingleregisterevent);
module.exports = router;