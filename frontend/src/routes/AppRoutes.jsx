import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PostPGPage from "../pages/PostPGPages";
import AdminLoginPage from "../pages/AdminLoginPage";
import ProtectedRoute from "./ProtectedRoute";
import GirlsPGPage from "../pages/GirlsPGPage";
import CoLivingPGPage from "../pages/CoLivingPGPage";
import ListingPage from "../pages/ListingPage";
import LoginSelectPage from "../pages/LoginSelectPage";
import HomePage from "../pages/HomePage";
import BoysPGPage from "../pages/BoysPGPage";
import Booking from "../buttons/Booking";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/post" element={<PostPGPage />} />
      <Route path="/login" element={<LoginSelectPage />} />
      {/* <Route path="/user-login" element={<UserLoginPage />} />
      <Route path="/register" element={<UserRegisterPage />} /> */}
      <Route path="/admin-login" element={<AdminLoginPage />} />
      {/* ✅ Matches Navbar now */}
      <Route path="/listing" element={<ListingPage/>} />
      <Route path="/pg/boys" element={<BoysPGPage />} />
      <Route path="/pg/girls" element={<GirlsPGPage />} />
      <Route path="/pg/coliving" element={<CoLivingPGPage />} /> 
      <Route path="/booking/:id" element={<Booking />} />
      {/* <Route path="/bookreview/:id" element={<BookReview />} />
     <Route path="/readreview/:id" element={<ReadReview />} />
     <Route path="/images/:id" element={<Images />} /> */}

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
