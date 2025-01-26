const Event = require("../models/Event");

exports.testTrigger = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body, isTest: true });
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ archived: false });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
