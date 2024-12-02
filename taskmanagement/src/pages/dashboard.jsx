import React from "react";

const Dashboard = () => {
  return (
    <div className="p-2 bg-gray-50 min-h-screen">
      {/* Welcome Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold">Welcome back, Ravi Verma!</h1>
        <p className="mt-2 text-lg">Here’s an overview of your tasks and progress.</p>
      </section>

      {/* Task & Deadlines Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Active Task Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="text-blue-600 p-4 rounded-full bg-blue-100 mb-4">
            <i className="fas fa-tasks text-3xl"></i>
          </div>
          <h2 className="mt-2 text-xl font-semibold text-gray-800">Your Active Tasks</h2>
          <p className="text-3xl font-semibold text-gray-900 mt-2">5 Active Tasks</p>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="text-yellow-600 p-4 rounded-full bg-yellow-100 mb-4">
            <i className="fas fa-clock text-3xl"></i>
          </div>
          <h2 className="mt-2 text-xl font-semibold text-gray-800">Upcoming Deadlines</h2>
          <p className="text-3xl font-semibold text-gray-900 mt-2">2 Deadlines This Week</p>
        </div>

        {/* Completed Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="text-green-600 p-4 rounded-full bg-green-100 mb-4">
            <i className="fas fa-check-circle text-3xl"></i>
          </div>
          <h2 className="mt-2 text-xl font-semibold text-gray-800">Completed Tasks</h2>
          <p className="text-3xl font-semibold text-gray-900 mt-2">12 Completed Tasks</p>
        </div>
      </section>

      {/* Task List */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Your Tasks</h2>
        <div className="bg-white shadow-xl rounded-lg p-6 mt-4">
          <table className="w-full text-gray-700">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4 text-sm font-medium">Task</th>
                <th className="p-4 text-sm font-medium">Priority</th>
                <th className="p-4 text-sm font-medium">Deadline</th>
                <th className="p-4 text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[ 
                { task: "Complete Feature A", priority: "High", deadline: "Dec 10", status: "In Progress" },
                { task: "Fix Bug B", priority: "Medium", deadline: "Dec 8", status: "Pending" },
                { task: "Update Documentation", priority: "Low", deadline: "Dec 15", status: "Completed" },
              ].map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-all duration-200">
                  <td className="p-4 text-sm">{item.task}</td>
                  <td className="p-4 text-sm">{item.priority}</td>
                  <td className="p-4 text-sm">{item.deadline}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : item.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Progress Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Your Progress</h2>
        <div className="bg-white p-6 shadow-xl rounded-lg mt-4">
          <div className="relative">
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: "70%" }} // Example: dynamic percentage of progress
              ></div>
            </div>
            <p className="text-sm font-medium text-gray-700 mt-1">
              70% of your tasks are completed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
