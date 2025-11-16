import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DashboardPage = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/user-login");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-24 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-10 border border-gray-100">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800">
              {role === "admin"
                ? "🛠 Admin Dashboard"
                : "🏠 User Dashboard"}
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>

          {/* Conditional Dashboard */}
          {role === "admin" ? (
            <>
              <p className="text-gray-600 mb-8">
                Welcome, <span className="font-semibold text-indigo-700">Admin</span>!  
                Here you can manage PG listings, users, and system analytics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-indigo-100 rounded-2xl shadow">
                  <h3 className="font-bold text-indigo-700 mb-2">📋 Manage PGs</h3>
                  <p className="text-gray-600 text-sm">View, edit, or delete PG listings.</p>
                </div>
                <div className="p-6 bg-purple-100 rounded-2xl shadow">
                  <h3 className="font-bold text-purple-700 mb-2">👥 Manage Users</h3>
                  <p className="text-gray-600 text-sm">Monitor registered users and tenants.</p>
                </div>
                <div className="p-6 bg-pink-100 rounded-2xl shadow">
                  <h3 className="font-bold text-pink-700 mb-2">📊 Reports</h3>
                  <p className="text-gray-600 text-sm">Track performance and analytics.</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-600 mb-8">
                Welcome back, <span className="font-semibold text-indigo-700">User</span>!  
                Here you can browse PG listings, post requests, and manage your bookings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-blue-100 rounded-2xl shadow">
                  <h3 className="font-bold text-blue-700 mb-2">🏘 View PGs</h3>
                  <p className="text-gray-600 text-sm">Find PGs for Boys, Girls, or Co-living.</p>
                </div>
                <div className="p-6 bg-green-100 rounded-2xl shadow">
                  <h3 className="font-bold text-green-700 mb-2">📝 Book a Room</h3>
                  <p className="text-gray-600 text-sm">Reserve rooms and make secure payments.</p>
                </div>
                <div className="p-6 bg-yellow-100 rounded-2xl shadow">
                  <h3 className="font-bold text-yellow-700 mb-2">📞 Contact Owners</h3>
                  <p className="text-gray-600 text-sm">Chat or call PG owners directly.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
