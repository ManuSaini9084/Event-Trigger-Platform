import React from "react";
import Header from "./components/Header";
import TriggerForm from "./components/TriggerForm";
import TriggerList from "./components/TriggerList";
import EventLog from "./components/EventLog";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-6 space-y-10">
        <TriggerForm />
        <TriggerList />
        <EventLog />
      </main>
    </div>
  );
};

export default App;
