const express = require("express");
const { testTrigger, getEvents } = require("../controllers/eventController");

const router = express.Router();

router.post("/test", testTrigger);
router.get("/", getEvents);

module.exports = router;
