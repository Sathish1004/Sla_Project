import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PGCard from "../components/PGCard";

const HomePage = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [gender, setGender] = useState("all");

  // 🔥 Navigate with query params
  const handleSearch = () => {
    navigate(`/listings?gender=${gender}&search=${searchText}`);
  };

  const listings = [
    {
      id: 1,
      title: "Premium Girls PG - Mylapore",
      price: 9500,
      location: "0.4 km from Mylapore Temple",
      gender: "girls",
      img: "https://i.pinimg.com/736x/a4/c4/e9/a4c4e9c92f37f6f094c019978cb01d11.jpg",
      amenities: ["WiFi", "AC", "Food", "Laundry"],
    },
    {
      id: 2,
      title: "Executive Boys PG - T. Nagar",
      price: 9000,
      location: "0.9 km from T. Nagar Shopping Complex",
      gender: "boys",
      img: "https://i.pinimg.com/736x/f6/42/f7/f642f78c1dcdcfde4de821619d07d1d1.jpg",
      amenities: ["WiFi", "Food", "Parking", "Gym"],
    },
    {
      id: 3,
      title: "Co-living Space - Adyar",
      price: 12000,
      location: "1.2 km from Adyar Bus Stand",
      gender: "both",
      img: "https://i.pinimg.com/736x/c5/db/d0/c5dbd061926572a4c4dff7e4b0ef2f59.jpg",
      amenities: ["WiFi", "AC", "Food", "Gym", "Pool"],
    },
  ];

  return (
    <>
      <Navbar />

      {/*  Hero  */}
      <div className="relative bg-gradient-to-br from-blue-400 via-red-400 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              PG in Chennai
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover safe, affordable, and comfortable paying guest
            accommodations across Chennai
          </p>
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search by location (e.g., T. Nagar, Adyar...)"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 focus:ring-2 focus:ring-indigo-500"
              />

              {/* Gender Filter */}
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="px-6 py-4 rounded-xl border text-gray-800 bg-white focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All</option>
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
                <option value="both">Co-living</option>
              </select>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg"
              >
                Search PGs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings   */}
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured PG Listings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked accommodations with verified amenities and trusted
              hosts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((pg) => (
              <PGCard key={pg.id} {...pg} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
  <div className="
      relative 
      bg-white/10 backdrop-blur-xl 
      border border-white/20 
      rounded-3xl 
      p-12 
      text-white
      shadow-[0_0_40px_rgba(99,102,241,0.4)]
      overflow-hidden
    "
  >

    {/* Floating Glow Animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse"></div>

    {/* Headline */}
  <h3 className="text-4xl font-extrabold mb-4 drop-shadow-md text-gray-900">
  Still Searching for the Right PG?
</h3>

<p className="text-gray-800 text-lg mb-10 max-w-2xl mx-auto">
  Don’t worry — we’ll guide you!  
  Explore all PGs in your area with prices, reviews, images & amenities.
</p>


    {/* CTA BUTTON */}
    <button
      className="
        relative overflow-hidden 
        px-10 py-4 
        rounded-2xl 
        font-semibold 
        bg-white text-indigo-700
        shadow-xl hover:shadow-2xl 
        transition-all duration-500 
        group
      "
    >
      <span className="relative z-20 flex items-center gap-2 text-lg">
        Visit Listings Page  
        <svg 
          className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>

      <span
        className="
          absolute inset-0 
          bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
          translate-y-[100%] 
          group-hover:translate-y-0 
          transition-transform duration-500
          z-10 opacity-90
        "
      ></span>
    </button>

    {/* Helpful Hint */}
    <p className="text-black text-sm mt-4 opacity-80">
  (Click the button above to explore all available PGs in Chennai)
</p>

  </div>
</div>

        
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
