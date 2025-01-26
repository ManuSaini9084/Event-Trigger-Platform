import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/triggers";

const TriggerList = () => {
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    fetchTriggers();
  }, []);

  const fetchTriggers = async () => {
    try {
      const response = await axios.get(API_URL);
      setTriggers(response.data);
    } catch (error) {
      console.error("Error fetching triggers:", error);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Trigger List</h2>
      {triggers.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border-b p-2">Type</th>
              <th className="border-b p-2">Interval</th>
              <th className="border-b p-2">Payload</th>
            </tr>
          </thead>
          <tbody>
            {triggers.map((trigger, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b p-2">{trigger.type}</td>
                <td className="border-b p-2">{trigger.interval || "N/A"}</td>
                <td className="border-b p-2">{JSON.stringify(trigger.payload)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No triggers found.</p>
      )}
    </section>
  );
};

export default TriggerList;
