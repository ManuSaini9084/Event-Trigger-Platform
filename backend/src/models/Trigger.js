const mongoose = require("mongoose");

const triggerSchema = new mongoose.Schema({
  type: { type: String, enum: ["scheduled", "api"], required: true },
  interval: { type: Number }, // In minutes, if applicable
  payload: { type: Object },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Trigger", triggerSchema);
