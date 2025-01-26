const Event = require("../models/Event");

exports.initializeRetentionScheduler = () => {
  setInterval(async () => {
    const now = new Date();

    // Archive events older than 2 hours
    await Event.updateMany(
      { triggeredAt: { $lte: new Date(now - 2 * 60 * 60 * 1000) }, archived: false },
      { $set: { archived: true } }
    );

    // Delete events older than 48 hours
    await Event.deleteMany({ triggeredAt: { $lte: new Date(now - 48 * 60 * 60 * 1000) } });

    console.log("Retention policies applied.");
  }, 60 * 60 * 1000); // Run every hour
};
