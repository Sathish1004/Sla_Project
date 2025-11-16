

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-gray-200">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div>
                <span className="text-white text-lg"></span>
              </div>
              <div className="absolute -inset-1 bg-indigo-200 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ChennaiPG
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Find Your Perfect Stay</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all duration-200 flex items-center space-x-1"
            >
              <span></span>
              <span>Home</span>
            </Link>

            <Link to="/listing" className="hover:text-blue-600 font-medium">Listings</Link>

            <Link 
              to="/about" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all duration-200 flex items-center space-x-1"
            >
              <span></span>
              <span>About</span>
            </Link>
            
            <Link 
              to="/contact" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all duration-200 flex items-center space-x-1"
            >
              <span></span>
              <span>Contact</span>
            </Link>

            {/* Login Button with Enhanced Style */}
            <Link 
              to="/login" 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span></span>
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl animate-slideDown">
            <div className="px-4 py-3 space-y-1">
              <Link
                to="/"
                className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 flex items-center space-x-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span></span>
                <span>Home</span>
              </Link>
              
              <div className="border-t border-gray-200 my-2"></div>
              
              <div className="px-4 py-2 text-sm font-semibold text-gray-500">LISTINGS</div>
              
              <Link
                to="/pg/boys"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 flex items-center space-x-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg"></span>
                <div>
                  <div className="font-medium">Boys PG</div>
                  <div className="text-xs text-gray-500">Safe & Comfortable</div>
                </div>
              </Link>
              
              <Link
                to="/pg/girls"
                className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-200 flex items-center space-x-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg"></span>
                <div>
                  <div className="font-medium">Girls PG</div>
                  <div className="text-xs text-gray-500">Secure & Verified</div>
                </div>
              </Link>
              
              <Link
                to="/pg/coliving"
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200 flex items-center space-x-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg"></span>
                <div>
                  <div className="font-medium">Co-Living</div>
                  <div className="text-xs text-gray-500">Modern & Social</div>
                </div>
              </Link>
              
              <div className="border-t border-gray-200 my-2"></div>
              
              <Link
                to="/about"
                className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 flex items-center space-x-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>ℹ️</span>
                <span>About</span>
              </Link>
              
              <Link
                to="/contact"
                className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 flex items-center space-x-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span></span>
                <span>Contact</span>
              </Link>
              
              <Link
                to="/login"
                className="block px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg mt-4 text-center transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span></span>
                  <span>Login / Sign Up</span>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Add custom animations to Tailwind config */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;