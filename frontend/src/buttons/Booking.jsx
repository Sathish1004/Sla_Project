

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Booking = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [months, setMonths] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeNeighborhoodTab, setActiveNeighborhoodTab] = useState("shopping");

  // Mock PG data - in real app, fetch based on ID
  const pgData = {
    id: id,
    name: "Elite Men's Stay",
    location: "Velachery, Chennai",
    price: 8000,
    rating: 4.5,
    amenities: ["WiFi", "AC", "Food", "Laundry", "Security", "Parking"],
    description: "A premium PG accommodation with modern amenities and excellent security features.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
    ]
  };

  // Neighborhood data
  const neighborhoodData = {
    shopping: [
      { name: "Phoenix MarketCity", distance: "2.1 km", time: "5 mins", type: "Premium Mall", features: ["300+ Stores", "Food Court", "Cinema"] },
      { name: "VR Chennai", distance: "3.5 km", time: "8 mins", type: " Luxury Mall", features: ["Premium Brands", "Fine Dining", "Entertainment"] },
      { name: "Forum Vijaya Mall", distance: "4.2 km", time: "10 mins", type: " Family Mall", features: ["Anchor Stores", "Kids Zone", "Bowling"] },
      { name: "Express Avenue", distance: "6.8 km", time: "15 mins", type: " Mega Mall", features: ["Fashion Hub", "Gourmet Dining", "Events"] }
    ],
    beaches: [
      { name: "Marina Beach", distance: "8.2 km", time: "20 mins", type: " World's 2nd Longest", features: ["Sunrise Views", "Street Food", "Horse Riding"] },
      { name: "Besant Nagar Beach", distance: "7.5 km", time: "18 mins", type: " Serene Beach", features: ["Quiet Atmosphere", "Cafes", "Evening Walks"] },
      { name: "Covelong Beach", distance: "25 km", time: "35 mins", type: "🏄‍♂️ Surfing Beach", features: ["Water Sports", "Resorts", "Adventure"] },
      { name: "Thiruvanmiyur Beach", distance: "6.3 km", time: "15 mins", type: "Local Favorite", features: ["Less Crowded", "Parking", "Sunset"] }
    ],
    entertainment: [
      { name: "PVR Skywalk", distance: "2.3 km", time: "6 mins", type: "🎬 Multiplex", features: ["4K Screens", "Dolby Atmos", "Recliners"] },
      { name: "Sathyam Cinemas", distance: "5.8 km", time: "12 mins", type: " Premium Theater", features: ["IMAX", "Luxury Seating", "Cafe"] },
      { name: "Mayajaal", distance: "12 km", time: "20 mins", type: "🏰 Entertainment City", features: ["16 Screens", "Bowling", "Arcade"] },
      { name: "Escape Cinema", distance: "3.1 km", time: "7 mins", type: " Luxury Experience", features: ["Butler Service", "Gourmet Food", "Premium"] }
    ],
    parks: [
      { name: "Semmozhi Poonga", distance: "4.5 km", time: "10 mins", type: " Botanical Garden", features: ["Exotic Plants", "Fountains", "Walking Trails"] },
      { name: "Guindy National Park", distance: "3.8 km", time: "8 mins", type: " Wildlife Park", features: ["Deer Park", "Nature Trails", "Bird Watching"] },
      { name: "Anna Nagar Tower Park", distance: "6.2 km", time: "12 mins", type: " City Park", features: ["Jogging Track", "Play Area", "Evening Events"] },
      { name: "Tholkappia Poonga", distance: "5.5 km", time: "11 mins", type: " Eco Park", features: ["Lake View", "Boating", "Photography"] }
    ],
    food: [
      { name: "Barbeque Nation", distance: "1.8 km", time: "4 mins", type: " Buffet Restaurant", features: ["Live Grill", "Veg & Non-Veg", "Desserts"] },
      { name: "Anjappar Chettinad", distance: "2.2 km", time: "5 mins", type: " South Indian", features: ["Authentic Chettinad", "Spicy Curries", "Traditional"] },
      { name: "The Marina", distance: "3.1 km", time: "7 mins", type: "🍽️ Multi-Cuisine", features: ["Sea Food", "Chinese", "Continental"] },
      { name: "Murugan Idli Shop", distance: "1.5 km", time: "3 mins", type: " Local Favorite", features: ["Budget Friendly", "Quick Service", "Authentic"] }
    ],
    healthcare: [
      { name: "Apollo Hospitals", distance: "3.2 km", time: "7 mins", type: " Multi-Speciality", features: ["24/7 Emergency", "All Specialities", "Pharmacy"] },
      { name: "MIOT International", distance: "4.1 km", time: "9 mins", type: "⚕️ Advanced Care", features: ["Super Speciality", "ICU", "Surgery"] },
      { name: "Fortis Malar", distance: "5.3 km", time: "11 mins", type: " Cardiac Speciality", features: ["Heart Institute", "Critical Care", "OPD"] },
      { name: "Billroth Hospitals", distance: "2.8 km", time: "6 mins", type: "🩺 General Hospital", features: ["Emergency", "Lab Services", "Consultation"] }
    ]
  };

  const pricePerMonth = pgData.price;
  const total = pricePerMonth * months;

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === pgData.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [pgData.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === pgData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? pgData.images.length - 1 : prev - 1
    );
  };

  const handleConfirmBooking = () => {
    alert(`Booking confirmed for ${pgData.name}! Total: ₹${total}`);
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-lg ${
            i <= rating ? 'text-amber-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      );
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  const neighborhoodTabs = [
    { id: "shopping", name: " Shopping", color: "from-purple-500 to-pink-500" },
    { id: "beaches", name: " Beaches", color: "from-blue-500 to-cyan-500" },
    { id: "entertainment", name: " Entertainment", color: "from-red-500 to-orange-500" },
    { id: "parks", name: "Parks", color: "from-green-500 to-emerald-500" },
    { id: "food", name: " Food", color: "from-amber-500 to-yellow-500" },
    { id: "healthcare", name: " Healthcare", color: "from-rose-500 to-pink-500" }
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent mb-4">
              Book Your Perfect Stay
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Secure your spot in one of Chennai's finest PG accommodations with amazing neighborhood access
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - PG Details & Images */}
            <div className="space-y-6">
              
              {/* PG Card */}
              <div className="bg-white rounded-3xl shadow-xl border border-white/40 overflow-hidden">
                {/* Image Slider */}
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  {pgData.images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${pgData.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    ›
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {pgData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Popular Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                       Available Now
                    </span>
                  </div>
                </div>

                {/* PG Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        {pgData.name}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <span className="text-blue-500">📍</span>
                        <span>{pgData.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        ₹{pricePerMonth}
                        <span className="text-sm font-normal text-gray-600">/month</span>
                      </div>
                      <StarRating rating={pgData.rating} />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pgData.description}
                  </p>

                  {/* Amenities */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Amenities Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pgData.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-2 rounded-xl text-sm font-medium border border-blue-100"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">4.5★</div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">50+</div>
                      <div className="text-xs text-gray-600">Bookings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-200">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-green-500"></span>
                  Security & Safety Features
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    CCTV Surveillance
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    24/7 Security Guard
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Fire Safety Equipment
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Emergency Exit
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/40">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Complete Your Booking
                </h2>
                <p className="text-gray-600">
                  PG ID: <span className="font-semibold text-blue-600">{id}</span>
                </p>
              </div>

              <div className="space-y-6">
                {/* Check-in Date */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 flex items-center gap-2">
                    <span className="text-green-500">📅</span>
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Check-out Date */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 flex items-center gap-2">
                    <span className="text-red-500">🚪</span>
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    min={startDate || new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 flex items-center gap-2">
                    <span className="text-purple-500">⏳</span>
                    Duration (Months)
                  </label>
                  <input
                    type="number"
                    value={months}
                    min="1"
                    max="12"
                    onChange={(e) => setMonths(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Price Breakdown */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-800 mb-4">Price Breakdown</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Monthly Rent</span>
                      <span>₹{pricePerMonth} × {months}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Security Deposit</span>
                      <span>₹{pricePerMonth}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Maintenance Charges</span>
                      <span>₹500</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between text-lg font-bold text-blue-600">
                        <span>Total Amount</span>
                        <span>₹{total + pricePerMonth + 500}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        * Security deposit refundable at checkout
                      </p>
                    </div>
                  </div>
                </div>

                {/* Confirm Booking Button */}
                <button
                  onClick={handleConfirmBooking}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Confirm Booking - ₹{total + pricePerMonth + 500}
                </button>

                {/* Additional Info */}
                <div className="text-center">
                  <p className="text-sm text-black-500">
                     Your booking is secured with advanced encryption
                  </p>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Neighborhood Exploration Section */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-white/40">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent mb-3">
                🗺️ Explore Your Neighborhood
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover amazing places near your PG for shopping, entertainment, dining, and relaxation
              </p>
            </div>

            {/* Neighborhood Tabs */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {neighborhoodTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveNeighborhoodTab(tab.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                    activeNeighborhoodTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Neighborhood Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {neighborhoodData[activeNeighborhoodTab].map((place, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {place.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{place.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{place.distance}</div>
                      <div className="text-sm text-gray-500">{place.time} drive</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {place.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">📍</span>
                      Easy Access
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-amber-500">⭐</span>
                      Highly Rated
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Access Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Malls Nearby</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="text-2xl font-bold text-green-600">8+</div>
                <div className="text-sm text-gray-600">Beaches</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">20+</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                <div className="text-2xl font-bold text-amber-600">12+</div>
                <div className="text-sm text-gray-600">Entertainment</div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-gray-800 to-blue-900 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-3">Need Help with Booking?</h3>
              <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                Our support team is available 24/7 to assist you with any questions about the PG, amenities, neighborhood, or booking process.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                📞 Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;