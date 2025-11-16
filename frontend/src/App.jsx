import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <div className="flex flex-col min-h-screen">
    {/* Navbar at top */}
    <Navbar />

    {/* Main content area */}
    <main className="flex-grow">
      <AppRoutes />
    </main>

    {/* Footer at bottom */}
    <Footer />
  </div>
);

export default App;
