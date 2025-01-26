const express = require("express");
const {
  createTrigger,
  getTriggers,
  updateTrigger,
  deleteTrigger,
} = require("../controllers/triggerController");

const router = express.Router();

router.post("/", createTrigger);
router.get("/", getTriggers);
router.put("/:id", updateTrigger);
router.delete("/:id", deleteTrigger);

module.exports = router;
