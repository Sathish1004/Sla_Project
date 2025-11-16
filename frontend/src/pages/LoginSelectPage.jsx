import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LoginSelectPage = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("select");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);

  // Trigger shake animation
  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  // 🔹 USER LOGIN HANDLER
  const handleUserLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      triggerShake();
      setIsLoading(false);
      return;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    localStorage.setItem("role", "user");
    setIsLoading(false);
    navigate("/");
  };

  // 🔹 ADMIN LOGIN HANDLER
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin email or password!");
      triggerShake();
    }
    setIsLoading(false);
  };

  // 🔹 REGISTER HANDLER
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      triggerShake();
      setIsLoading(false);
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match!");
      triggerShake();
      setIsLoading(false);
      return;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    localStorage.setItem("role", "user");
    alert("Registration successful!");
    setIsLoading(false);
    setActivePage("userLogin");
  };

  // Back button handler
  const handleBack = () => {
    setActivePage("select");
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-slow"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-float-fast"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Main Card */}
        <div className="relative z-10 w-full max-w-md">
          {/* Enhanced Card with glow effect */}
          <div className={`bg-white/5 backdrop-blur-2xl shadow-2xl rounded-3xl border border-white/10 transform transition-all duration-700 hover:shadow-3xl ${
            shake ? 'animate-shake' : 'hover:scale-[1.02]'
          } relative overflow-hidden`}>
            
            {/* Glow Effect */}
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-lg transition-all duration-1000 animate-pulse-slow"></div> */}
            
            {/* Inner Card Content */}
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/5">
              
              {/* Header Section */}
              <div className="p-8 border-b border-white/10">
                {activePage === "select" && (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/25 animate-float-slow">
                      <span className="text-3xl text-white">🔐</span>
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                      Welcome Back
                    </h2>
                    <p className="text-gray-400 text-sm font-light">
                      Choose your login method to continue your journey
                    </p>
                  </div>
                )}

                {activePage !== "select" && (
                  <div className="flex items-center justify-between">
                    <button
                      onClick={handleBack}
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group p-2 rounded-xl hover:bg-white/5"
                    >
                      <svg className="w-6 h-6 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <div className="text-center flex-1">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {activePage === "userLogin" && "User Login"}
                        {activePage === "adminLogin" && "Admin Portal"}
                        {activePage === "register" && "Join Us"}
                      </h2>
                    </div>
                    <div className="w-20"></div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* --------------------------- SELECT PAGE --------------------------- */}
                {activePage === "select" && (
                  <div className="space-y-6">
                    {/* USER LOGIN BUTTON */}
                    <button
                      onClick={() => setActivePage("userLogin")}
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-white font-semibold py-5 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-500"></div>
                      <div className="relative flex items-center justify-start space-x-4">
                        <div>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-lg">User Login</div>
                          <div className="text-blue-300/80 text-sm font-light">Access your personal dashboard</div>
                        </div>
                      </div>
                      <svg className="absolute right-4 w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* ADMIN LOGIN BUTTON */}
                    <button
                      onClick={() => setActivePage("adminLogin")}
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-white font-semibold py-5 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-amber-500/20 hover:border-amber-400/40 hover:bg-amber-500/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-500"></div>
                      <div className="relative flex items-center justify-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform duration-300">
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-lg">Admin Portal</div>
                          <div className="text-amber-300/80 text-sm font-light">Manage system and users</div>
                        </div>
                      </div>
                      <svg className="absolute right-4 w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center py-6">
                      <div className="flex-grow border-t border-white/10"></div>
                      <span className="flex-shrink mx-4 text-white/40 text-sm font-light">or continue with</span>
                      <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    {/* REGISTER BUTTON */}
                    <button
                      onClick={() => setActivePage("register")}
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-5 px-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative flex items-center justify-center space-x-3">
                        <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <span className="text-lg font-semibold">Create New Account</span>
                      </div>
                    </button>
                  </div>
                )}

                {/* --------------------------- USER LOGIN PAGE --------------------------- */}
                {activePage === "userLogin" && (
                  <form onSubmit={handleUserLogin} className="space-y-6">
                    <div className="space-y-5">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-3">Email Address</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm text-white placeholder-gray-400"
                            placeholder="Enter your email"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            📧
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-3">Password</label>
                        <div className="relative">
                          <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm text-white placeholder-gray-400"
                            placeholder="Enter your password"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🔒
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="font-semibold">Signing in...</span>
                        </div>
                      ) : (
                        <span className="flex items-center justify-center space-x-2">
                          <span>Sign In</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      )}
                    </button>

                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-400">
                        Don't have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setActivePage("register")}
                          className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 hover:underline"
                        >
                          Create one here
                        </button>
                      </p>
                    </div>
                  </form>
                )}

                {/* --------------------------- ADMIN LOGIN PAGE --------------------------- */}
                {activePage === "adminLogin" && (
                  <form onSubmit={handleAdminLogin} className="space-y-6">
                    <div className="space-y-5">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-3">Admin Email</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300 backdrop-blur-sm text-white placeholder-gray-400"
                            placeholder="admin@gmail.com"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            👑
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-3">Password</label>
                        <div className="relative">
                          <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300 backdrop-blur-sm text-white placeholder-gray-400"
                            placeholder="Enter admin password"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🔐
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-700 text-white font-semibold py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="font-semibold">Accessing Portal...</span>
                        </div>
                      ) : (
                        <span className="flex items-center justify-center space-x-2">
                          <span>Access Admin Portal</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      )}
                    </button>

                    <div className="text-center p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                      <p className="text-sm text-amber-300 font-medium">
                        Demo credentials: admin@gmail.com / admin123
                      </p>
                    </div>
                  </form>
                )}

                {/* --------------------------- REGISTER PAGE --------------------------- */}
                {activePage === "register" && (
                  <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-5">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-3">Email Address</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm text-white placeholder-gray-400"
                            placeholder="Enter your email"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            ✉️
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-3">Password</label>
                        <div className="relative">
                          <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm text-white placeholder-gray-400"
                            placeholder="Minimum 8 characters"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🛡️
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-3">Confirm Password</label>
                        <div className="relative">
                          <input
                            type="password"
                            required
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm text-white placeholder-gray-400"
                            placeholder="Re-enter your password"
                          />
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            ✅
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white font-semibold py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="font-semibold">Creating Account...</span>
                        </div>
                      ) : (
                        <span className="flex items-center justify-center space-x-2">
                          <span>Create Account</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      )}
                    </button>

                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-400">
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setActivePage("userLogin")}
                          className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-200 hover:underline"
                        >
                          Sign in here
                        </button>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Footer Note */}
          <div className="text-center mt-8">
            <p className="text-xs text-gray-500 font-light tracking-wide">
              🔒 Secure login with end-to-end encryption • 🌟 Trusted by thousands
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(10px) translateY(-15px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>

      <Footer />
    </>
  );
};

export default LoginSelectPage;