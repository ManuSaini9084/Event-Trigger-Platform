const Trigger = require("../models/Trigger");

exports.createTrigger = async (req, res) => {
  try {
    const trigger = await Trigger.create(req.body);
    res.status(201).json(trigger);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTriggers = async (req, res) => {
  try {
    const triggers = await Trigger.find();
    res.json(triggers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTrigger = async (req, res) => {
  try {
    const trigger = await Trigger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(trigger);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTrigger = async (req, res) => {
  try {
    await Trigger.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
