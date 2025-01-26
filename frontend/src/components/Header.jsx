import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Branding */}
        <h1 className="text-2xl font-bold">Event Trigger Platform</h1>

        {/* Placeholder for Navigation or Actions */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-white hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#triggers"
                className="text-white hover:underline"
              >
                Triggers
              </a>
            </li>
            <li>
              <a
                href="#logs"
                className="text-white hover:underline"
              >
                Logs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
