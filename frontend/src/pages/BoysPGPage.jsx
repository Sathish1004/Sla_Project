
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const BoysPGPage = () => {
//   const navigate = useNavigate();
  

//   const boysPGs = [
//     {
//       id: 1,
//       name: "Elite Men's Stay",
//       location: "Velachery",
//       price: 7500,
//       rating: "4.5",
//       amenities: ["WiFi", "AC", "Food", "Laundry"],
//       distance: "2km from Metro",
//       image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
//       gender: "boys"
//     },
//     {
//       id: 2,
//       name: "Royal Boys PG",
//       location: "Tambaram",
//       price: 6800,
//       rating: "4.3",
//       amenities: ["WiFi", "Parking", "Gym", "Security"],
//       distance: "1.5km from Station",
//       image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
//       gender: "boys"
//     },
//     {
//       id: 3,
//       name: "Comfort Stay",
//       location: "Guindy",
//       price: 8200,
//       rating: "4.7",
//       amenities: ["WiFi", "AC", "Food", "Parking", "Laundry"],
//       distance: "Near Tech Park",
//       image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
//       gender: "boys"
//     },
//     {
//       id: 4,
//       name: "Urban Nest PG",
//       location: "T Nagar",
//       price: 9000,
//       rating: "4.8",
//       amenities: ["AC", "WiFi", "Housekeeping", "TV Lounge", "Gym"],
//       distance: "1km from Bus Stand",
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
//       gender: "boys"
//     },
//     {
//       id: 5,
//       name: "Blue Haven Men's Stay",
//       location: "Adyar",
//       price: 8500,
//       rating: "4.6",
//       amenities: ["WiFi", "Laundry", "Parking", "Security"],
//       distance: "Near IIT Madras",
//       image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
//       gender: "boys"
//     },
//     {
//       id: 6,
//       name: "Prime Comfort PG",
//       location: "OMR - Thoraipakkam",
//       price: 9200,
//       rating: "4.9",
//       amenities: ["WiFi", "AC", "Gym", "Food", "Pool"],
//       distance: "Close to IT Park",
//       image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800",
//       gender: "boys"
//     },

//     // ⭐ EXTRA CARDS ADDED ⭐
//     {
//       id: 7,
//       name: "Gentlemen’s Living Space",
//       location: "Sholinganallur",
//       price: 7800,
//       rating: "4.4",
//       amenities: ["Housekeeping", "WiFi", "Food"],
//       distance: "IT Hub Area",
//       image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800",
//       gender: "boys"
//     },
//     {
//       id: 8,
//       name: "Metro Men's Hub",
//       location: "Alandur",
//       price: 7300,
//       rating: "4.2",
//       amenities: ["AC", "WiFi", "Kitchen"],
//       distance: "300m from Metro",
//       image: "https://images.unsplash.com/photo-1520881363902-a0ff4e722963?w=800",
//       gender: "boys"
//     },
//     {
//       id: 9,
//       name: "StayIn Style Men's PG",
//       location: "Perungudi",
//       price: 8800,
//       rating: "4.7",
//       amenities: ["WiFi", "TV", "Study Table"],
//       distance: "Near RMZ Millenia",
//       image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=800",
//       gender: "boys"
//     },
//     {
//       id: 10,
//       name: "Urban Elite PG",
//       location: "Kodambakkam",
//       price: 8200,
//       rating: "4.5",
//       amenities: ["AC", "Security", "Parking"],
//       distance: "Near Meenakshi College",
//       image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
//       gender: "boys"
//     },
//     {
//       id: 11,
//       name: "Men's Prestige Living",
//       location: "Porur",
//       price: 7600,
//       rating: "4.3",
//       amenities: ["WiFi", "Laundry", "Food"],
//       distance: "Medical College Area",
//       image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
//       gender: "boys"
//     },
//     {
//       id: 12,
//       name: "Chennai Comfort Gents PG",
//       location: "Medavakkam",
//       price: 7000,
//       rating: "4.1",
//       amenities: ["WiFi", "Security"],
//       distance: "Near Bypass Road",
//       image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
//       gender: "boys"
//     }
//   ];

//   // Navigation Handlers
//   const handleViewPG = (id) => navigate(`/pg/${id}`);
//   const handleBooking = (id) => navigate(`/pg/${id}?tab=booking`);
//   const handleBookReview = (id) => navigate(`/pg/${id}?tab=feedback`);
//   const handleBuyReview = (id) => navigate(`/pg/${id}?tab=readreviews`);

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-12">
//         <div className="max-w-7xl mx-auto px-4">

//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
//               Boys PG <span className="text-blue-600">Listings</span>
//             </h1>
//             <p className="text-lg text-gray-600">
//               Affordable, Safe & Comfortable PG stays for men across Chennai.
//             </p>
//           </div>

//           {/* PG Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {boysPGs.map((pg) => (
//               <div
//                 key={pg.id}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 border border-blue-100 overflow-hidden group"
//               >
//                 {/* Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={pg.image}
//                     alt={pg.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
//                     {pg.name}
//                   </h3>

//                   <div className="text-sm text-gray-600">{pg.location}</div>
//                   <p className="text-xs text-gray-500">{pg.distance}</p>

//                   {/* Amenities */}
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {pg.amenities.slice(0, 3).map((a, i) => (
//                       <span
//                         key={i}
//                         className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-md"
//                       >
//                         {a}
//                       </span>
//                     ))}
//                     {pg.amenities.length > 3 && (
//                       <span className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-md">
//                         +{pg.amenities.length - 3} more
//                       </span>
//                     )}
//                   </div>

//                   {/* Price */}
//                   <div className="my-4">
//                     <p className="text-2xl font-bold text-blue-600">₹{pg.price}/month</p>
//                     <p className="text-xs text-gray-500">Inclusive of charges</p>
//                   </div>

//                   {/* Buttons */}
//                   <div className="flex flex-col gap-2">

//                     {/* Read Reviews */}
//                     <button
//                       onClick={() => handleBuyReview(pg.id)}
//                       className="flex flex-col justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
//                     >
//                       Read Reviews
//                       <span className="text-[10px]">(already booked users)</span>
//                     </button>

//                     {/* Give Feedback */}
//                     <button
//                       onClick={() => handleBookReview(pg.id)}
//                       className="flex flex-col justify-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
//                     >
//                       Give Feedback
//                       <span className="text-[10px]">(your experience)</span>
//                     </button>

//                     {/* View PG */}
//                     <button
//                       onClick={() => handleViewPG(pg.id)}
//                       className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm py-2.5 rounded-xl transition"
//                     >
//                       View PG
//                     </button>

//                     {/* ⭐ Booking Button — Now More Attractive ⭐ */}
//                     <button
//                       onClick={() => handleBooking(pg.id)}
//                       className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm py-2.5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
//                     >
//                       <span className="relative z-10">Booking</span>
//                       <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 -translate-x-full hover:translate-x-0 transition-transform duration-500"></span>
//                     </button>

//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Support Button */}
//           <div className="text-center mt-12">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md">
//               Get Personalized Assistance
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default BoysPGPage;



import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BoysPGPage = () => {
  const navigate = useNavigate();

  const boysPGs = [
    {
      id: 1,
      name: "Elite Men's Stay",
      location: "Velachery",
      price: 7500,
      rating: "4.5",
      amenities: ["WiFi", "AC", "Food", "Laundry"],
      distance: "2km from Metro",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      gender: "boys"
    },
    {
      id: 2,
      name: "Royal Boys PG",
      location: "Tambaram",
      price: 6800,
      rating: "4.3",
      amenities: ["WiFi", "Parking", "Gym", "Security"],
      distance: "1.5km from Station",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      gender: "boys"
    },
    {
      id: 3,
      name: "Comfort Stay",
      location: "Guindy",
      price: 8200,
      rating: "4.7",
      amenities: ["WiFi", "AC", "Food", "Parking", "Laundry"],
      distance: "Near Tech Park",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      gender: "boys"
    },
    {
      id: 4,
      name: "Urban Nest PG",
      location: "T Nagar",
      price: 9000,
      rating: "4.8",
      amenities: ["AC", "WiFi", "Housekeeping", "TV Lounge", "Gym"],
      distance: "1km from Bus Stand",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      gender: "boys"
    },
    {
      id: 5,
      name: "Blue Haven Men's Stay",
      location: "Adyar",
      price: 8500,
      rating: "4.6",
      amenities: ["WiFi", "Laundry", "Parking", "Security"],
      distance: "Near IIT Madras",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      gender: "boys"
    },
    {
      id: 6,
      name: "Prime Comfort PG",
      location: "OMR - Thoraipakkam",
      price: 9200,
      rating: "4.9",
      amenities: ["WiFi", "AC", "Gym", "Food", "Pool"],
      distance: "Close to IT Park",
      image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800",
      gender: "boys"
    },
  ];

  // ⭐ UPDATED NAVIGATION ROUTES ⭐
  const handleViewPG = (id) => navigate(`/pg/${id}`);
  const handleBooking = (id) => navigate(`/booking/${id}`);
  const handleBookReview = (id) => navigate(`/bookreview/${id}`);
  const handleBuyReview = (id) => navigate(`/readreview/${id}`);
  const handleViewImages = (id) => navigate(`/images/${id}`);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
              Boys PG <span className="text-blue-600">Listings</span>
            </h1>
            <p className="text-lg text-gray-600">
              Affordable, Safe & Comfortable PG stays for men across Chennai.
            </p>
          </div>

          {/* PG Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boysPGs.map((pg) => (
              <div
                key={pg.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 border border-blue-100 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pg.image}
                    alt={pg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                    {pg.name}
                  </h3>

                  <div className="text-sm text-gray-600">{pg.location}</div>
                  <p className="text-xs text-gray-500">{pg.distance}</p>

                  {/* Amenities */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pg.amenities.slice(0, 3).map((a, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-md"
                      >
                        {a}
                      </span>
                    ))}
                    {pg.amenities.length > 3 && (
                      <span className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-md">
                        +{pg.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="my-4">
                    <p className="text-2xl font-bold text-blue-600">
                      ₹{pg.price}/month
                    </p>
                    <p className="text-xs text-gray-500">Inclusive of charges</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2">

                    {/* Read Reviews */}
                    <button
                      onClick={() => handleBuyReview(pg.id)}
                      className="flex flex-col justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Read Reviews
                      <span className="text-[10px]">(already booked users)</span>
                    </button>

                    {/* Give Feedback */}
                    <button
                      onClick={() => handleBookReview(pg.id)}
                      className="flex flex-col justify-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Give Feedback
                      <span className="text-[10px]">(your experience)</span>
                    </button>

                    {/* View PG */}
                    <button
                      onClick={() => handleViewPG(pg.id)}
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm py-2.5 rounded-xl transition"
                    >
                      View PG
                    </button>

                    {/* Booking */}
                    <button
                      onClick={() => handleBooking(pg.id)}
                      className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm py-2.5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                      <span className="relative z-10">Booking</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 -translate-x-full hover:translate-x-0 transition-transform duration-500"></span>
                    </button>

                    {/* View Images */}
                    <button
                      onClick={() => handleViewImages(pg.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm py-2.5 rounded-xl transition"
                    >
                      View Images
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Support Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md">
              Get Personalized Assistance
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default BoysPGPage;
