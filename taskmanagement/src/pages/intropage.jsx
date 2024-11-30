import React, { useState } from "react";
import banner from "../Assests/images/img-3.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";



function IntroPage() {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleAuthMode = () => setIsLogin(!isLogin);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

<div>

    {/* Modal */}
    <AnimatePresence>
  {isModalOpen && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg w-96 p-8 shadow-xl relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Close Button */}
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Social Authentication */}
        <div className="my-4 text-center text-gray-500">OR</div>
        <div className="flex flex-col space-y-2">
          <button
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition ease-in-out"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              className="w-5 h-5 mr-3"
            />
            Continue with Google
          </button>

          <button
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition ease-in-out"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5 mr-3"
            />
            Continue with Apple
          </button>
        </div>

        {/* Toggle between Login and Signup */}
        <p className="mt-6 text-center text-sm text-gray-500">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            onClick={toggleAuthMode}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



  </div>


      <div className="bg-gradient-to-br from-blue-100 to-white min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center px-6 md:px-10 py-5 shadow-lg bg-white fixed top-0 left-0 w-full  transition-all">
  <div className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 cursor-pointer">
    TaskManager
  </div>

  {/* Toggle Button for Mobile */}
  <button
    className="md:hidden text-blue-600 focus:outline-none"
    onClick={toggleMenu}
    aria-label="Toggle menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 transition-transform transform"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </button>

  {/* Navigation Menu */}
  <nav
    className={`space-x-4 md:space-x-6 ${isOpen ? "block" : "hidden"} md:block transition-all ease-in-out duration-300`}
  >
    <Link
      to="#"
      className="text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors"
    >
      Features
    </Link>
    <Link
      to="/pricing"
      className="text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors"
    >
      Pricing
    </Link>
    <Link
      to="/contact"
      className="text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors"
    >
      Contact Us
    </Link>
    <button className="px-4 py-2 text-sm md:text-base border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all" onClick={toggleModal}>
      Login
    </button>
  </nav>

  {/* Mobile Menu */}
  <div
    className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-md transform transition-transform duration-300 md:hidden z-40 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {/* Close Button */}
    <div className="flex justify-between items-center p-5 border-b">
      <div className="text-xl font-bold text-blue-600">TaskManager</div>
      <button className="text-blue-600 focus:outline-none" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    {/* Sidebar Links */}
    <nav className="flex flex-col space-y-6 px-6 py-4">
      <Link
        to="/features"
        className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
      >
        Features
      </Link>
      <Link
        to="/pricing"
        className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
      >
        Pricing
      </Link>
      <Link
        to="/contact"
        className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
      >
        Contact Us
      </Link>
      <button className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all">
        Login
      </button>
    </nav>
  </div>

  {/* Background Overlay */}
  {isOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
      onClick={toggleMenu}
    ></div>
  )}
</header>



        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-10 py-10 md:py-20 bg-gray-50 mt-12 bg-gradient-to-r from-blue-50 to-blue-200 rounded-tl-3xl rounded-br-3xl pt-16 shadow-lg">
          <div className="flex flex-col justify-center items-center text-center max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Take Control of Your Tasks with Ease
            </h1>
            <p className="text-gray-700 text-sm md:text-lg mb-6">
              A powerful task management tool designed to boost productivity for
              individuals and teams.
            </p>
            <div className="space-y-4 md:space-x-4 md:space-y-0">
              <button className="px-6 mx-2 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out" onClick={toggleModal}>
                Start for Free
              </button>
              <button className="px-6 mx-2 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              src={banner}
              alt="Dashboard"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg bg-white"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-10 md:py-16 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 md:mb-10">
            Why Choose TaskManager?
          </h2>
          <div className="flex flex-wrap justify-center items-start gap-6 px-6 md:px-10">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Invite and manage team members effortlessly, ensuring seamless
                collaboration within your workspace.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
              <div className="text-4xl mb-4">📂</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Workspaces for Teams
              </h3>
              <p className="text-gray-600">
                Create and organize multiple workspaces to manage projects for
                different teams with ease.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Task Assignment
              </h3>
              <p className="text-gray-600">
                Assign tasks with deadlines and track their progress in
                real-time to ensure timely completion.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Progress Tracking
              </h3>
              <p className="text-gray-600">
                Monitor individual and team productivity with visual progress
                bars and detailed insights.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
              <div className="text-4xl mb-4">📨</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Effortless Onboarding
              </h3>
              <p className="text-gray-600">
                Admins can quickly send invite links to teammates to join the
                platform and get started immediately.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Secure Role Management
              </h3>
              <p className="text-gray-600">
                Robust role-based access controls ensure data is protected and
                only accessible to authorized users.
              </p>
            </div>

            {/* New Feature Added */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Real-Time Sync
              </h3>
              <p className="text-gray-600">
                Automatically sync tasks and updates across devices in
                real-time, ensuring you're always up to date.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}

        {/* Call to Action Section */}
        <section className="bg-blue-600 text-white py-10 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg mb-6">
            Sign up today and experience the difference TaskManager can make!
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded hover:bg-gray-100" onClick={toggleModal}>
            Start for Free
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="text-center text-sm md:text-base">
            <p className="mb-4">
              &copy; 2024 TaskManager. All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/xyz" className="hover:underline">
                LinkedIn
              </Link>
              <Link href="/xyz" className="hover:underline">
                Twitter
              </Link>
              <Link href="/xyz" className="hover:underline">
                Facebook
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default IntroPage;
