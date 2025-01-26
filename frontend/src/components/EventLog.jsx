import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/events";

const EventLog = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(API_URL);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Event Logs</h2>
      {events.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {events.map((event, index) => (
            <li key={index} className="py-4">
              <p>
                <strong className="text-gray-800">Trigger Type:</strong> {event.type}
              </p>
              <p>
                <strong className="text-gray-800">Payload:</strong>{" "}
                {JSON.stringify(event.payload)}
              </p>
              <p>
                <strong className="text-gray-800">Triggered At:</strong>{" "}
                {new Date(event.triggeredAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No events found.</p>
      )}
    </section>
  );
};

export default EventLog;
