const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  triggerId: { type: mongoose.Schema.Types.ObjectId, ref: "Trigger" },
  type: { type: String },
  payload: { type: Object },
  triggeredAt: { type: Date, default: Date.now },
  isTest: { type: Boolean, default: false },
  archived: { type: Boolean, default: false },
});

module.exports = mongoose.model("Event", eventSchema);
