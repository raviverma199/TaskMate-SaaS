import React from "react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-6">
      {/* Header */}
      <header className="flex items-center justify-between border-b pb-4">
        {/* Logo & Navigation */}
        <div className="flex items-center space-x-8">
          <h1 className="text-blue-800 text-xl font-bold">ATLAS</h1>
          <nav className="flex space-x-6">
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-blue-600 font-medium border-b-2 border-blue-600"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Goals
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Teams
            </a>
          </nav>
        </div>

        {/* Search & Icons */}
        <div className="flex items-center space-x-6">
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
          <i className="fas fa-bell text-gray-600 text-lg cursor-pointer"></i>
          <i className="fas fa-question-circle text-gray-600 text-lg cursor-pointer"></i>
          <i className="fas fa-cog text-gray-600 text-lg cursor-pointer"></i>
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
            RV
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="mt-6">
        {/* Page Title */}
        <div className="flex items-center space-x-4">
          <i className="fas fa-rocket text-blue-600 text-lg"></i>
          <h2 className="text-2xl font-bold text-gray-700">Projects</h2>
        </div>

        {/* Search Bar */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search projects"
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Filters */}
        <div className="mt-6 flex items-center space-x-4">
          <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
            <i className="fas fa-tag mr-2"></i> Filter by tag
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
            <i className="fas fa-list-alt mr-2"></i> Status
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
            <i className="fas fa-users mr-2"></i> Team
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
            <i className="fas fa-user mr-2"></i> Owner
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
            <i className="fas fa-network-wired mr-2"></i> Reporting line
          </button>
        </div>

        {/* Projects List */}
        <div className="mt-8">
          {/* Project Item */}
          <div className="flex items-center justify-between px-4 py-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-md bg-yellow-100 flex items-center justify-center">
                <i className="fas fa-star text-yellow-600"></i>
              </div>
              <div className="text-gray-700 font-medium">Project Name 1</div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 text-green-700 bg-green-100 rounded-lg text-sm">
                ON TRACK
              </span>
              <i className="fas fa-calendar-alt text-gray-600"></i>
              <i className="fas fa-user-circle text-orange-500"></i>
            </div>
          </div>

          {/* Another Project Item */}
          <div className="flex items-center justify-between px-4 py-4 border mt-4 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center">
                <i className="fas fa-avocado text-purple-600"></i>
              </div>
              <div className="text-gray-700 font-medium">Project Name 2</div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 text-yellow-700 bg-yellow-100 rounded-lg text-sm">
                AT RISK
              </span>
              <i className="fas fa-calendar-alt text-gray-600"></i>
              <i className="fas fa-user-circle text-green-500"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
