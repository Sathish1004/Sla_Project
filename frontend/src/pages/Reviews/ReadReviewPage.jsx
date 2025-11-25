// import { useParams } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// const ReadReviewsPage = () => {
//   const { id } = useParams();

//   const dummyReviews = [
//     { user: "Karthik", rating: 5, text: "Very good PG!" },
//     { user: "Ram", rating: 4, text: "Clean rooms and polite staff." },
//   ];

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-4xl mx-auto p-8">
//         <h1 className="text-4xl font-bold mb-4">User Reviews</h1>
//         <p className="text-lg mb-6">For PG ID: {id}</p>

//         <div className="space-y-6">
//           {dummyReviews.map((r, i) => (
//             <div key={i} className="p-5 bg-white shadow rounded-xl">
//               <h3 className="font-bold text-xl">{r.user}</h3>
//               <p className="text-yellow-500">⭐ {r.rating}</p>
//               <p className="text-gray-700">{r.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ReadReviewsPage;


import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

const ReadReviewsPage = () => {
  const { id } = useParams();
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  // PG Details with images
  const pgDetails = {
    1: { 
      name: "Elite Men's Stay", 
      location: "Velachery", 
      price: 7500,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
      amenities: ["WiFi", "AC", "Food", "Laundry", "Parking"],
      overallRating: 4.3 
    },
    2: { 
      name: "Royal Boys PG", 
      location: "Tambaram", 
      price: 6800,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      amenities: ["WiFi", "Food", "Parking", "Security"],
      overallRating: 4.1 
    },
    3: { 
      name: "Comfort Stay", 
      location: "Guindy", 
      price: 8200,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop",
      amenities: ["WiFi", "AC", "Food", "Gym", "Laundry"],
      overallRating: 4.5 
    },
    4: { 
      name: "Urban Nest PG", 
      location: "T Nagar", 
      price: 9000,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      amenities: ["WiFi", "AC", "Food", "Pool", "Gym"],
      overallRating: 4.8 
    },
    5: { 
      name: "Blue Haven Men's Stay", 
      location: "Adyar", 
      price: 8500,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
      amenities: ["WiFi", "AC", "Food", "Laundry", "Housekeeping"],
      overallRating: 4.4 
    },
    6: { 
      name: "Prime Comfort PG", 
      location: "OMR - Thoraipakkam", 
      price: 9200,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
      amenities: ["WiFi", "AC", "Food", "Pool", "Gym", "Parking"],
      overallRating: 4.9 
    },
  };

  const [reviews, setReviews] = useState([
    { 
      id: 1, 
      user: "Karthik", 
      profile: "👨‍🎓",
      rating: 5, 
      text: "Best PG for working professionals! The environment is very professional and the food quality is excellent. Management is very cooperative.",
      stayDuration: "6 months",
      accommodationType: "Single Sharing",
      advantages: ["Clean rooms", "Quality food", "24/7 water supply", "Friendly staff", "Good security"],
      disadvantages: ["Limited parking space"],
      verified: true,
      date: "2024-01-15",
      wouldRecommend: true,
      userType: "Working Professional"
    },
    { 
      id: 2, 
      user: "Ram", 
      profile: "👨‍💻",
      rating: 4, 
      text: "Clean rooms and polite staff. The location is perfect for IT professionals working in Velachery. WiFi speed is decent for work.",
      stayDuration: "3 months",
      accommodationType: "Double Sharing",
      advantages: ["Near to metro", "Quiet environment", "Regular cleaning", "Good location"],
      disadvantages: ["WiFi sometimes slow during peak hours", "Food could be more varied"],
      verified: true,
      date: "2024-01-10",
      wouldRecommend: true,
      userType: "Software Engineer"
    },
    { 
      id: 3, 
      user: "Priya", 
      profile: "👩‍🎓",
      rating: 3, 
      text: "Average experience, needs improvement in maintenance. Good for budget-conscious students but don't expect luxury.",
      stayDuration: "2 months",
      accommodationType: "Triple Sharing",
      advantages: ["Affordable price", "Good location", "Fellow students are friendly"],
      disadvantages: ["Power cuts frequently", "Small rooms", "No gym", "Limited hot water"],
      verified: false,
      date: "2024-01-05",
      wouldRecommend: false,
      userType: "College Student"
    },
    { 
      id: 4, 
      user: "Arun", 
      profile: "👨‍🏫",
      rating: 5, 
      text: "Absolutely loved my stay! The staff treats you like family. Food is homely and rooms are spacious. Highly recommended!",
      stayDuration: "1 year",
      accommodationType: "Single Sharing",
      advantages: ["Homely food", "Spacious rooms", "Family-like environment", "24/7 security"],
      disadvantages: ["Can get noisy on weekends"],
      verified: true,
      date: "2024-01-20",
      wouldRecommend: true,
      userType: "Teacher"
    },
    { 
      id: 5, 
      user: "Sneha", 
      profile: "👩‍💼",
      rating: 4, 
      text: "Good value for money. The PG is well-maintained and the location is convenient. Perfect for female professionals.",
      stayDuration: "8 months",
      accommodationType: "Double Sharing",
      advantages: ["Safe for women", "Clean bathrooms", "Good housekeeping", "Near markets"],
      disadvantages: ["Limited visitors policy", "Early dinner time"],
      verified: true,
      date: "2024-01-18",
      wouldRecommend: true,
      userType: "Bank Employee"
    },
    { 
      id: 6, 
      user: "Rohit", 
      profile: "👨‍🔧",
      rating: 2, 
      text: "Not satisfied with the services. Maintenance issues take too long to resolve. Would not recommend for long stay.",
      stayDuration: "1 month",
      accommodationType: "Four Sharing",
      advantages: ["Cheap rent", "Basic amenities available"],
      disadvantages: ["Poor maintenance", "Unresponsive staff", "Dirty common areas", "Bad food quality"],
      verified: true,
      date: "2024-01-12",
      wouldRecommend: false,
      userType: "Mechanical Engineer"
    }
  ]);

  const [newReview, setNewReview] = useState({
    userName: "",
    rating: 5,
    stayDuration: "",
    accommodationType: "",
    userType: "",
    advantages: "",
    disadvantages: "",
    generalReview: "",
    wouldRecommend: true
  });

  const pg = pgDetails[id];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    
    const review = {
      id: Date.now(),
      user: newReview.userName,
      profile: "👤",
      rating: parseInt(newReview.rating),
      text: newReview.generalReview,
      stayDuration: newReview.stayDuration,
      accommodationType: newReview.accommodationType,
      userType: newReview.userType,
      advantages: newReview.advantages.split(',').map(item => item.trim()).filter(item => item),
      disadvantages: newReview.disadvantages.split(',').map(item => item.trim()).filter(item => item),
      verified: false,
      date: new Date().toISOString().split('T')[0],
      wouldRecommend: newReview.wouldRecommend
    };

    setReviews(prev => [review, ...prev]);
    setNewReview({
      userName: "",
      rating: 5,
      stayDuration: "",
      accommodationType: "",
      userType: "",
      advantages: "",
      disadvantages: "",
      generalReview: "",
      wouldRecommend: true
    });
    setShowReviewForm(false);
  };

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating}.0)</span>
      </div>
    );
  };

  // Filter reviews for this PG (in real app, this would come from backend)
  const pgReviews = reviews;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* PG Header Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* PG Image */}
              <div className="lg:col-span-1">
                <img 
                  src={pg?.image} 
                  alt={pg?.name}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              
              {/* PG Details */}
              <div className="lg:col-span-2 p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{pg?.name}</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {pg?.location}
                    </div>
                    
                    {/* Amenities */}
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Amenities Included:</h3>
                      <div className="flex flex-wrap gap-2">
                        {pg?.amenities.map((amenity, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price & Rating */}
                  <div className="lg:text-right">
                    <div className="text-3xl font-bold text-blue-600 mb-2">₹{pg?.price}/month</div>
                    <div className="flex lg:justify-end items-center mb-2">
                      <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        {pg?.overallRating}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Based on {totalReviews} reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Rating Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="text-center lg:text-left mb-4 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Overall Rating & Reviews</h2>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="text-4xl font-bold text-gray-900 mr-4">{averageRating}</div>
                  <div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-6 h-6 ${star <= averageRating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{totalReviews} verified reviews</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-200 font-semibold w-full lg:w-auto"
                >
                  Share Your Experience
                </button>
              </div>
            </div>
          </div>

          {/* Review Form Modal */}
          {showReviewForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Share Your Experience</h2>
                    <button
                      onClick={() => setShowReviewForm(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <form onSubmit={handleSubmitReview} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="userName"
                          value={newReview.userName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          You are a *
                        </label>
                        <select
                          name="userType"
                          value={newReview.userType}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select</option>
                          <option value="College Student">College Student</option>
                          <option value="Working Professional">Working Professional</option>
                          <option value="Software Engineer">Software Engineer</option>
                          <option value="Teacher">Teacher</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          How long did you stay? *
                        </label>
                        <select
                          name="stayDuration"
                          value={newReview.stayDuration}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select duration</option>
                          <option value="Less than 1 month">Less than 1 month</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="6-12 months">6-12 months</option>
                          <option value="More than 1 year">More than 1 year</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Accommodation Type *
                        </label>
                        <select
                          name="accommodationType"
                          value={newReview.accommodationType}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select type</option>
                          <option value="Single Sharing">Single Sharing</option>
                          <option value="Double Sharing">Double Sharing</option>
                          <option value="Triple Sharing">Triple Sharing</option>
                          <option value="Four Sharing">Four Sharing</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Overall Rating *
                      </label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                            className="text-3xl focus:outline-none transition transform hover:scale-110"
                          >
                            {star <= newReview.rating ? '⭐' : '☆'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What did you like? (Advantages) *
                      </label>
                      <textarea
                        name="advantages"
                        value={newReview.advantages}
                        onChange={handleInputChange}
                        placeholder="Separate advantages with commas. Example: Clean rooms, Good food, Friendly staff"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What could be improved? (Disadvantages) *
                      </label>
                      <textarea
                        name="disadvantages"
                        value={newReview.disadvantages}
                        onChange={handleInputChange}
                        placeholder="Separate disadvantages with commas. Example: Poor WiFi, Small rooms, No parking"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        General Review *
                      </label>
                      <textarea
                        name="generalReview"
                        value={newReview.generalReview}
                        onChange={handleInputChange}
                        placeholder="Share your overall experience..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="wouldRecommend"
                        checked={newReview.wouldRecommend}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label className="ml-2 text-sm text-gray-700">
                        I would recommend this PG to others
                      </label>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowReviewForm(false)}
                        className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-200 font-semibold"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {pgReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Review Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                        {review.profile}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{review.user}</h3>
                        <div className="flex items-center mt-1">
                          <StarRating rating={review.rating} />
                          {review.verified && (
                            <span className="ml-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Verified Stay
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{review.userType}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 mt-3">{review.text}</p>
                  <div className="flex items-center mt-3 text-sm text-gray-600 flex-wrap gap-2">
                    <span className="bg-gray-100 px-2 py-1 rounded">Stayed: {review.stayDuration}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">{review.accommodationType}</span>
                    {review.wouldRecommend && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Would recommend
                      </span>
                    )}
                  </div>
                </div>

                {/* Advantages & Disadvantages */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Advantages */}
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        What I Liked
                      </h4>
                      <ul className="space-y-2">
                        {review.advantages.map((advantage, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-gray-700">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Disadvantages */}
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        </svg>
                        Areas for Improvement
                      </h4>
                      <ul className="space-y-2">
                        {review.disadvantages.map((disadvantage, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-gray-700">{disadvantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Reviews Message */}
          {pgReviews.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Reviews Yet</h3>
              <p className="text-gray-500 mb-6">Be the first to share your experience!</p>
              <button
                onClick={() => setShowReviewForm(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-200"
              >
                Write First Review
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ReadReviewsPage;


