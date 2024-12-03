import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaUser,
  FaCalendarAlt,
  FaTasks,
  FaMinusCircle,
  FaPlusCircle,
  FaListAlt,
  FaTrashAlt,
} from "react-icons/fa";

const TeamsPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [assignedProjects, setAssignedProjects] = useState(["Project 1"]); // Example: Projects assigned to the team lead

  useEffect(() => {
    const fetchedTeamMembers = [
      {
        id: 1,
        name: "Bob",
        role: "Developer",
        assignedProjects: ["Project 1"],
        email: "bob@example.com",
        startDate: "2024-01-01",
        status: "On Time",
        task: "Implement login feature",
        deadline: "2024-12-15",
      },
      {
        id: 2,
        name: "Charlie",
        role: "QA Tester",
        assignedProjects: ["Project 1"],
        email: "charlie@example.com",
        startDate: "2024-03-01",
        status: "Delayed",
        task: "Test user registration",
        deadline: "2024-12-20",
      },
      {
        id: 3,
        name: "David",
        role: "Designer",
        assignedProjects: ["Project 1"],
        email: "david@example.com",
        startDate: "2024-04-01",
        status: "Stared yesterday",
        task: "",
        deadline: "",
      },
    ];

    const filteredMembers = fetchedTeamMembers.filter((member) =>
      member.assignedProjects.some((project) =>
        assignedProjects.includes(project)
      )
    );
    setTeamMembers(filteredMembers);
  }, [assignedProjects]);

  // Handle adding a member
  const addMember = () => {
    console.log("Adding new member");
  };

  // Handle removing a member
  const removeMember = (memberId) => {
    setTeamMembers((prevMembers) =>
      prevMembers.filter((member) => member.id !== memberId)
    );
  };

  // Handle task assignment
  const assignTask = (memberId) => {
    console.log("Assign task to member:", memberId);
  };

  // Handle task removal
  const removeTask = (memberId) => {
    setTeamMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === memberId ? { ...member, task: "", deadline: "" } : member
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-6">
      <main>
        <div className="flex items-center space-x-3 mb-6">
          <FaUsers className="text-blue-600 text-3xl" />
          <h2 className="text-2xl font-semibold text-gray-800">Team Members</h2>
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
          <button
            onClick={addMember}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200 ease-in-out text-sm"
          >
            <FaPlusCircle className="mr-2 text-lg" /> Add Team
          </button>
          <button className="flex items-center px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out text-sm">
            <FaListAlt className="mr-2 text-lg" /> Status
          </button>
        </div>

        {/* Members with Tasks */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">
            Team with Tasks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers
              .filter((member) => member.task)
              .map((member) => (
                <div
                  key={member.id}
                  className="bg-white p-4 border rounded-md shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaUser className="text-blue-600 text-lg" />
                    </div>
                    <div className="text-gray-700 font-semibold text-lg">
                      {member.name}
                    </div>
                    <FaMinusCircle
                      onClick={() => removeMember(member.id)}
                      className="text-red-500 text-lg cursor-pointer hover:text-red-600"
                    />

                    <span className="px-3 py-1 text-green-700 bg-green-100 rounded-lg text-sm font-medium">
                      {member.status}
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="text-gray-600 text-sm">{member.role}</span>
                  </div>

                  <div className="mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-500 text-lg" />
                      <span className="ml-2">{member.deadline}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-gray-700 font-medium">
                      Assigned Task:
                    </h4>
                    <p className="text-sm text-gray-600">{member.task}</p>
                  </div>

                  {/* Task Removal Button */}
                  <div className="mt-3 flex justify-between items-center">
                    <button
                      onClick={() => removeTask(member.id)}
                      className="flex items-center text-red-600 hover:text-red-500 text-sm"
                    >
                      <FaTrashAlt className="mr-2 text-lg" /> Remove Task
                    </button>

                    <button
                      onClick={() => assignTask(member.id)}
                      className="flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200 ease-in-out text-sm"
                    >
                      <FaTasks className="mr-1.5 text-lg" /> Assign New Task
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Members Without Tasks */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Team Without Tasks
          </h3>
          <div className="space-y-4">
            {teamMembers
              .filter((member) => !member.task)
              .map((member) => (
                <div
                  key={member.id}
                  className="flex items-center space-x-3 p-4 bg-gray-200 rounded-md shadow-md hover:shadow-lg transition duration-200 ease-in-out"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaUser className="text-blue-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-700">
                      {member.name}
                    </div>
                    <div className="text-sm text-gray-600">{member.role}</div>
                  </div>
                  <button
                    onClick={() => assignTask(member.id)}
                    className="text-blue-600 hover:text-blue-500 text-sm"
                  >
                    Assign Task
                  </button>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamsPage;
