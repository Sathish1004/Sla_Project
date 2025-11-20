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
import AdminDashboard from "../pages/AdminDashboard";
import ViewPGButton from "../buttons/ViewPGButton";
import WriteReviewButton from "../buttons/WriteReviewButton";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/post" element={<PostPGPage />} />
      <Route path="/login" element={<LoginSelectPage />} />
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/listing" element={<ListingPage/>} />
      <Route path="/pg/boys" element={<BoysPGPage />} />
      <Route path="/pg/girls" element={<GirlsPGPage />} />
      <Route path="/pg/coliving" element={<CoLivingPGPage />} /> 
      <Route path="/booking/:id" element={<Booking />} />
     <Route path="/review/:id" element={<WriteReviewButton />} />
      <Route path="/images/:id" element={<ViewPGButton />} />
     <Route path="/admin/reviews" element={<AdminDashboard />} />

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
