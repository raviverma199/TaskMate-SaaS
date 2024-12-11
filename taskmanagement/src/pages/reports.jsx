import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Registering necessary chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, LineElement, PointElement, CategoryScale, LinearScale);

function ReportsPage() {
  // Pie chart data for task distribution
  const pieData = {
    labels: ['Completed', 'Pending', 'In Progress'],
    datasets: [
      {
        label: 'Task Distribution',
        data: [60, 20, 20], // Example data (can be dynamic)
        backgroundColor: ['#28a745', '#f39c12', '#e74c3c'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  // Line chart data for project performance over time
  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Performance Trend',
        data: [50, 55, 65, 80, 90], // Example data (can be dynamic)
        fill: false,
        borderColor: '#007bff',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-4 bg-gradient-to-r from-indigo-50 via-blue-50 to-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Project Reports</h1>
        <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all duration-200 text-sm">
          Export Report
        </button>
      </div>

      {/* Overview Cards for Team Progress */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-base font-semibold text-gray-700">Total Team Members</h3>
          <p className="text-xl font-bold text-gray-800">10</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-base font-semibold text-gray-700">Tasks Completed</h3>
          <p className="text-xl font-bold text-gray-800">75%</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-base font-semibold text-gray-700">Total Tasks Pending</h3>
          <p className="text-xl font-bold text-gray-800">25</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-base font-semibold text-gray-700">Average Task Progress</h3>
          <p className="text-xl font-bold text-gray-800">80%</p>
        </div>
      </div>

      {/* Project Progress Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Pie Chart - Task Distribution */}
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Task Distribution</h3>
          <div className="w-full h-64 flex justify-center items-center">
            <Pie data={pieData} />
          </div>
        </div>

        {/* Line Chart - Project Progress */}
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Project Performance Trend</h3>
          <div className="w-full h-64 flex justify-center items-center">
            <Line data={lineData} />
          </div>
        </div>
      </div>

      {/* Detailed Team Member Report */}
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Detailed Team Member Report</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left text-gray-600 border">Name</th>
                <th className="px-3 py-2 text-left text-gray-600 border">Role</th>
                <th className="px-3 py-2 text-left text-gray-600 border">Assigned Task</th>
                <th className="px-3 py-2 text-left text-gray-600 border">Status</th>
                <th className="px-3 py-2 text-left text-gray-600 border">Deadline</th>
                <th className="px-3 py-2 text-left text-gray-600 border">Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2">John Doe</td>
                <td className="px-3 py-2">Developer</td>
                <td className="px-3 py-2">Build Login UI</td>
                <td className="px-3 py-2 text-green-500">Completed</td>
                <td className="px-3 py-2">2024-12-05</td>
                <td className="px-3 py-2">100%</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Jane Smith</td>
                <td className="px-3 py-2">Tester</td>
                <td className="px-3 py-2">Test Login Functionality</td>
                <td className="px-3 py-2 text-yellow-500">In Progress</td>
                <td className="px-3 py-2">2024-12-04</td>
                <td className="px-3 py-2">70%</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Mark Williams</td>
                <td className="px-3 py-2">Frontend Developer</td>
                <td className="px-3 py-2">Implement Dashboard</td>
                <td className="px-3 py-2 text-red-500">Pending</td>
                <td className="px-3 py-2">2024-12-07</td>
                <td className="px-3 py-2">0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
