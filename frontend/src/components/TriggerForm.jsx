import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/triggers";

const TriggerForm = () => {
  const [type, setType] = useState("");
  const [interval, setInterval] = useState("");
  const [payload, setPayload] = useState("");

  const handleCreateTrigger = async () => {
    try {
      let parsedPayload = {};
      if (payload) {
        try {
          parsedPayload = JSON.parse(payload);
        } catch (err) {
          alert("Payload must be valid JSON.");
          return;
        }
      }

      if (!["scheduled", "api"].includes(type)) {
        alert("Type must be either 'scheduled' or 'api'.");
        return;
      }

      await axios.post(API_URL, {
        type,
        interval: interval ? Number(interval) : null,
        payload: parsedPayload,
      });

      alert("Trigger created successfully!");
    } catch (error) {
      console.error("Error creating trigger:", error.response?.data || error.message);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Create a New Trigger</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Trigger Type (e.g., scheduled)"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Interval (if scheduled)"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
        />
        <input
          type="text"
          placeholder='Payload (e.g., {"key": "value"})'
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
        />
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
        onClick={handleCreateTrigger}
      >
        Create Trigger
      </button>
    </section>
  );
};

export default TriggerForm;
