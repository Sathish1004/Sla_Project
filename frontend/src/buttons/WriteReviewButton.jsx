
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const BookReview = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [review, setReview] = useState({
//     title: "",
//     description: "",
//     cleanliness: 5,
//     food: 5,
//     safety: 5,
//     location: 5,
//     valueForMoney: 5,
//     recommendation: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Mock PG data
//   const pgData = {
//     id: id,
//     name: "Elite Men's Stay",
//     location: "Velachery, Chennai",
//     image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
//   };

//   const handleRatingClick = (value) => {
//     setRating(value);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setReview(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleCategoryRating = (category, value) => {
//     setReview(prev => ({
//       ...prev,
//       [category]: value
//     }));
//   };

//   const handleRecommendation = (value) => {
//     setReview(prev => ({
//       ...prev,
//       recommendation: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Create review object
//     const completeReview = {
//       id: Date.now().toString(),
//       pgId: id,
//       pgName: pgData.name,
//       pgLocation: pgData.location,
//       timestamp: new Date().toISOString(),
//       overallRating: rating,
//       ...review,
//       status: "pending", // pending, approved, rejected
//       adminNotes: ""
//     };

//     // Save to localStorage (simulating database)
//     const existingReviews = JSON.parse(localStorage.getItem('pgReviews') || '[]');
//     const updatedReviews = [...existingReviews, completeReview];
//     localStorage.setItem('pgReviews', JSON.stringify(updatedReviews));

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     alert("Thank you for your review! Your feedback is under review and will be published soon.");
//     setIsSubmitting(false);
//     navigate(`/readreview/${id}`);
//   };

//   // Star rating component
//   const StarRating = ({ currentRating, onRatingChange, size = "text-xl" }) => {
//     return (
//       <div className="flex gap-1">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             type="button"
//             onClick={() => onRatingChange(star)}
//             onMouseEnter={() => setHoverRating(star)}
//             onMouseLeave={() => setHoverRating(0)}
//             className={`${size} ${
//               star <= (hoverRating || currentRating) 
//                 ? 'text-yellow-500' 
//                 : 'text-gray-300'
//             }`}
//           >
//             ★
//           </button>
//         ))}
//       </div>
//     );
//   };

//   // Category rating bars
//   const CategoryRating = ({ label, value, onChange }) => {
//     return (
//       <div className="flex items-center justify-between p-3 bg-white border border-gray-300 rounded">
//         <span className="font-medium text-gray-700">{label}</span>
//         <div className="flex items-center gap-3">
//           <div className="flex gap-1">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <button
//                 key={star}
//                 type="button"
//                 onClick={() => onChange(star)}
//                 className={`w-5 h-5 rounded-full ${
//                   star <= value 
//                     ? 'bg-blue-600' 
//                     : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//           <span className="text-sm font-medium text-gray-600 min-w-8">{value}/5</span>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Navbar />
      
//       <div className="min-h-screen bg-gray-50 pt-20 pb-12">
//         <div className="max-w-4xl mx-auto px-4">
          
//           {/* Header Section */}
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">
//               Share Your Experience
//             </h1>
//             <p className="text-gray-600">Help others by sharing your honest review</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
//             {/* Left Column - PG Info */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
//                 {/* PG Card */}
//                 <div className="text-center mb-4">
//                   <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden">
//                     <img 
//                       src={pgData.image} 
//                       alt={pgData.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <h2 className="text-xl font-semibold text-gray-800 mb-1">{pgData.name}</h2>
//                   <p className="text-gray-600 text-sm">{pgData.location}</p>
//                 </div>

//                 {/* Review Guidelines */}
//                 <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
//                   <h3 className="font-semibold text-gray-800 mb-2">Review Guidelines</h3>
//                   <ul className="text-sm text-gray-600 space-y-1">
//                     <li>• Be honest and specific about your experience</li>
//                     <li>• Mention both positives and areas for improvement</li>
//                     <li>• Focus on facts rather than emotions</li>
//                     <li>• Your review will help other students</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Review Form */}
//             <div className="lg:col-span-2">
//               <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                
//                 {/* Overall Rating */}
//                 <div className="text-center mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Overall Rating</h3>
//                   <div className="flex justify-center mb-2">
//                     <StarRating 
//                       currentRating={rating} 
//                       onRatingChange={handleRatingClick}
//                       size="text-3xl"
//                     />
//                   </div>
//                   <p className="text-gray-600 text-sm">
//                     {rating === 0 ? "Tap to rate" : `You rated ${rating} out of 5 stars`}
//                   </p>
//                 </div>

//                 {/* Review Title */}
//                 <div className="mb-4">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Review Title
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     value={review.title}
//                     onChange={handleInputChange}
//                     placeholder="Summarize your experience in a few words..."
//                     className="w-full px-3 py-2 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   />
//                 </div>

//                 {/* Review Description */}
//                 <div className="mb-6">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Detailed Review
//                   </label>
//                   <textarea
//                     name="description"
//                     value={review.description}
//                     onChange={handleInputChange}
//                     rows="5"
//                     placeholder="Share your experience in detail. What did you like? What could be improved? Your honest feedback helps others..."
//                     className="w-full px-3 py-2 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
//                     required
//                   />
//                 </div>

//                 {/* Category Ratings */}
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                     Rate Specific Aspects
//                   </h3>
                  
//                   <div className="space-y-3">
//                     <CategoryRating
//                       label="Cleanliness & Maintenance"
//                       value={review.cleanliness}
//                       onChange={(value) => handleCategoryRating('cleanliness', value)}
//                     />
//                     <CategoryRating
//                       label="Food Quality"
//                       value={review.food}
//                       onChange={(value) => handleCategoryRating('food', value)}
//                     />
//                     <CategoryRating
//                       label="Safety & Security"
//                       value={review.safety}
//                       onChange={(value) => handleCategoryRating('safety', value)}
//                     />
//                     <CategoryRating
//                       label="Location & Accessibility"
//                       value={review.location}
//                       onChange={(value) => handleCategoryRating('location', value)}
//                     />
//                     <CategoryRating
//                       label="Value for Money"
//                       value={review.valueForMoney}
//                       onChange={(value) => handleCategoryRating('valueForMoney', value)}
//                     />
//                   </div>
//                 </div>

//                 {/* Would You Recommend? */}
//                 <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-300">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                     Would you recommend this PG to others?
//                   </h3>
//                   <div className="flex gap-3">
//                     {["Yes, Definitely!", "Maybe", "Not Really"].map((option) => (
//                       <button
//                         key={option}
//                         type="button"
//                         onClick={() => handleRecommendation(option)}
//                         className={`flex-1 py-2 rounded font-medium ${
//                           review.recommendation === option
//                             ? option === "Yes, Definitely!" 
//                               ? "bg-green-600 text-white"
//                               : option === "Maybe"
//                               ? "bg-yellow-500 text-white"
//                               : "bg-red-600 text-white"
//                             : "bg-gray-300 text-gray-700 hover:bg-gray-400"
//                         }`}
//                       >
//                         {option}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="text-center">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting || rating === 0 || !review.recommendation}
//                     className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded font-semibold"
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center justify-center gap-2">
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Submitting Your Review...</span>
//                       </div>
//                     ) : (
//                       "Submit Your Review"
//                     )}
//                   </button>
                  
//                   <p className="text-sm text-gray-500 mt-3">
//                     Your review will be published anonymously to protect your privacy
//                   </p>
//                 </div>
//               </form>

//               {/* Tips Section */}
//               <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-300">
//                 <h3 className="font-semibold text-gray-800 mb-2">Writing a Great Review</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
//                   <div>• Mention specific amenities you liked or disliked</div>
//                   <div>• Talk about the neighborhood and nearby facilities</div>
//                   <div>• Share your experience with the PG owner/staff</div>
//                   <div>• Mention any issues you faced during your stay</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookReview;


import React from "react";
import { useNavigate } from "react-router-dom";

const WriteReviewButton = ({ pgId, variant = "primary", size = "medium", hasBooked = false }) => {
  const navigate = useNavigate();

  const handleWriteReview = () => {
    if (!hasBooked) {
      alert("You need to book this PG first before writing a review!");
      return;
    }
    navigate(`/review/${pgId}`);
  };

  const getButtonClasses = () => {
    const baseClasses = "font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-50";
    
    const sizeClasses = {
      small: "px-4 py-2 text-sm",
      medium: "px-6 py-3 text-base",
      large: "px-8 py-4 text-lg"
    };

    const variantClasses = {
      primary: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500",
      secondary: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl focus:ring-amber-500",
      outline: "bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white focus:ring-green-500",
      ghost: "bg-transparent text-green-600 hover:bg-green-50 hover:text-green-700 focus:ring-green-500"
    };

    const disabledClasses = "bg-gray-400 text-gray-200 cursor-not-allowed hover:from-gray-400 hover:to-gray-500 transform-none shadow-none";

    return `${baseClasses} ${sizeClasses[size]} ${hasBooked ? variantClasses[variant] : disabledClasses}`;
  };

  return (
    <button
      onClick={handleWriteReview}
      className={getButtonClasses()}
      disabled={!hasBooked}
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">✍️</span>
        {hasBooked ? "Write a Review" : "Book to Review"}
      </span>
    </button>
  );
};

export default WriteReviewButton;