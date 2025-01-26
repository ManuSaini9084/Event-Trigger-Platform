require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const triggerRoutes = require("./routes/triggerRoutes");
const eventRoutes = require("./routes/eventRoutes");
const { connectDB } = require("./utils/db");
const { initializeRetentionScheduler } = require("./utils/scheduler");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/triggers", triggerRoutes);
app.use("/api/events", eventRoutes);

// Connect to Database
connectDB();

// Initialize Event Retention Scheduler
initializeRetentionScheduler();

module.exports = app;
