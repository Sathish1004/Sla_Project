import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminLoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 px-4">
        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md border border-gray-100">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
            🔒 Admin Panel Access
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Welcome Admin! Enter your credentials to manage PG listings and users.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem("role", "admin");
              alert("Welcome Admin!");
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Admin Email
              </label>
              <input
                type="email"
                required
                placeholder="admin@pgfinder.com"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="Enter admin password"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl"
            >
              Login as Admin
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLoginPage;
