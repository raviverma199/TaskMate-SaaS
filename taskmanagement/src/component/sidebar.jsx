import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-50 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>
      </div>
      <nav className="mt-6">
        <a
          href="#"
          className="block py-2.5 px-4 rounded hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-medium"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-medium"
        >
          Status Updates
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
