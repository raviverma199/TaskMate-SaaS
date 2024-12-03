import React, { useState, useEffect } from 'react';
import { FaRocket, FaTag, FaListAlt, FaUsers, FaUser, FaNetworkWired, FaStar, FaCalendarAlt, FaUserCircle, FaRegClock } from 'react-icons/fa';

const ProjectsPage = () => {
  const [userRole, setUserRole] = useState('teamLead'); // Example: 'teamLead' or 'projectManager'
  const [projects, setProjects] = useState([]);
  const currentUser = 'Alice'; // Current user's name (this can be dynamic based on login)

  useEffect(() => {
    const fetchedProjects = [
      { id: 1, name: 'Project 1', status: 'ON TRACK', assignedTo: ['teamLead'], teamLead: 'Alice', startDate: '2024-01-01', developmentDeadline: '2024-06-01', qaDeadline: '2024-07-01', description: 'This is an important project that focuses on the development of our main product.' },
      { id: 2, name: 'Project 2', status: 'AT RISK', assignedTo: ['projectManager', 'teamLead'], teamLead: 'Bob', startDate: '2024-02-01', developmentDeadline: '2024-07-01', qaDeadline: '2024-08-01', description: 'This project involves the redesign of our mobile app.' },
      { id: 3, name: 'Project 3', status: 'IN PROGRESS', assignedTo: ['projectManager'], teamLead: 'Charlie', startDate: '2024-03-01', developmentDeadline: '2024-09-01', qaDeadline: '2024-10-01', description: 'This project is about integrating new features into the current software.' },
    ];

    const visibleProjects = fetchedProjects.filter(project => project.assignedTo.includes(userRole));
    setProjects(visibleProjects);
  }, [userRole]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-4">
      <main>
        <div className="flex items-center space-x-3 mb-4">
          <FaRocket className="text-blue-600 text-2xl animate-bounce" />
          <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
        </div>

        {/* Search Bar */}
        <div className="mt-3">
          <input
            type="text"
            placeholder="Search projects"
            className="w-full md:w-1/2 px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out text-sm"
          />
        </div>

        {/* Filters */}
        <div className="mt-5 flex items-center space-x-4">
          <button className="flex items-center px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition duration-200 ease-in-out text-sm">
            <FaTag className="mr-2 text-lg" /> Filter by tag
          </button>
          <button className="flex items-center px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out text-sm">
            <FaListAlt className="mr-2 text-lg" /> Status
          </button>
          <button className="flex items-center px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out text-sm">
            <FaUsers className="mr-2 text-lg" /> Team
          </button>
          <button className="flex items-center px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out text-sm">
            <FaUser className="mr-2 text-lg" /> Owner
          </button>
          <button className="flex items-center px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out text-sm">
            <FaNetworkWired className="mr-2 text-lg" /> Reporting line
          </button>
        </div>

        {/* Projects List */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p className="text-gray-600 text-sm">No projects available for your role.</p>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-r from-blue-50 to-blue-100 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                <div className="p-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-md bg-yellow-100 flex items-center justify-center">
                      <FaStar className="text-yellow-600 text-lg" />
                    </div>
                    <div className="text-gray-700 font-semibold text-lg">{project.name}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-green-700 bg-green-100 rounded-lg text-xs font-medium">
                      {project.status}
                    </span>
                    <FaCalendarAlt className="text-gray-600 text-lg" />
                  </div>

                  {/* Project Description */}
                  <div className="text-gray-600 text-sm mt-2">{project.description}</div>

                  {/* Deadlines */}
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-3 text-gray-600 text-xs">
                      <div className="flex items-center space-x-2">
                        <FaRegClock className="text-gray-600 text-lg" />
                        <span className="text-gray-700 font-medium">Dev Deadline:</span>
                        <span>{project.developmentDeadline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaRegClock className="text-gray-600 text-lg" />
                        <span className="text-gray-700 font-medium">QA Deadline:</span>
                        <span>{project.qaDeadline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Team Lead */}
                  <div className="flex items-center space-x-2 mt-3">
                    <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center">
                      <FaUserCircle className="text-white text-md" />
                    </div>
                    <div className="text-gray-600 font-medium text-sm">Team Lead: {project.teamLead}</div>

                    {/* Mark current user's project */}
                    {project.teamLead === currentUser && (
                      <span className="ml-2 text-xs text-blue-500 font-semibold">You</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
