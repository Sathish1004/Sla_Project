
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ViewPGButton = ({ pgId, variant = "primary", size = "medium", pgData }) => {
//   const navigate = useNavigate();
//   const [showImageModal, setShowImageModal] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Default PG data if not provided
//   const defaultPGData = {
//     id: pgId,
//     name: "Elite Men's Stay",
//     location: "Velachery, Chennai",
//     images: [
//       "https://i.pinimg.com/1200x/2e/76/b7/2e76b7b352e21747439a3a0d6bec272c.jpg",
//       "https://i.pinimg.com/736x/2b/f2/ed/2bf2edbaa4a4ec1fdc9031b613b7b0b1.jpg",
//       "https://i.pinimg.com/736x/9a/d2/24/9ad2249fa0ebf8bb87ed78ac0a7d56a1.jpg",
//       "https://i.pinimg.com/736x/d8/8e/ab/d88eab72694a08c006f24b63a99e36fc.jpg"
//     ]
//   };

//   const data = pgData || defaultPGData;

//   const handleViewPG = () => {
//     setShowImageModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowImageModal(false);
//     setCurrentImageIndex(0);
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === data.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? data.images.length - 1 : prev - 1
//     );
//   };

//   const getButtonClasses = () => {
//     const baseClasses = "font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";
    
//     const sizeClasses = {
//       small: "px-4 py-2 text-sm",
//       medium: "px-6 py-3 text-base",
//       large: "px-8 py-4 text-lg"
//     };

//     const variantClasses = {
//       primary: "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl",
//       secondary: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl",
//       outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
//       ghost: "bg-transparent text-blue-600 hover:bg-blue-50 hover:text-blue-700"
//     };

//     return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;
//   };

//   return (
//     <>
//       <button
//         onClick={handleViewPG}
//         className={getButtonClasses()}
//       >
//         <span className="flex items-center gap-2">
//           <span className="text-lg">🏠</span>
//           View PG Images
//         </span>
//       </button>

//       {/* Image Modal */}
//       {showImageModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            
//             {/* Header */}
//             <div className="flex justify-between items-center p-6 border-b border-gray-200">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
//                 <p className="text-gray-600">{data.location}</p>
//               </div>
//               <button
//                 onClick={handleCloseModal}
//                 className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Image Display */}
//             <div className="relative h-96 bg-black">
//               <img
//                 src={data.images[currentImageIndex]}
//                 alt={`${data.name} - Image ${currentImageIndex + 1}`}
//                 className="w-full h-full object-contain"
//               />
              
//               {/* Navigation Arrows */}
//               {data.images.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 text-2xl font-bold"
//                   >
//                     ‹
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 text-2xl font-bold"
//                   >
//                     ›
//                   </button>
//                 </>
//               )}

//               {/* Image Counter */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                 {currentImageIndex + 1} / {data.images.length}
//               </div>
//             </div>

//             {/* Thumbnail Strip */}
//             {data.images.length > 1 && (
//               <div className="p-4 bg-gray-50 border-t border-gray-200">
//                 <div className="flex gap-2 overflow-x-auto pb-2">
//                   {data.images.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentImageIndex(index)}
//                       className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                         index === currentImageIndex
//                           ? 'border-blue-500 scale-105'
//                           : 'border-gray-300 hover:border-gray-400'
//                       }`}
//                     >
//                       <img
//                         src={image}
//                         alt={`Thumbnail ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div className="p-6 flex gap-3 justify-end border-t border-gray-200">
//               <button
//                 onClick={handleCloseModal}
//                 className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-semibold transition-colors"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => navigate(`/booking/${pgId}`)}
//                 className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ViewPGButton;



import React from "react";
import { useNavigate } from "react-router-dom";

const ViewPgButton = () => {
  const navigate = useNavigate();

  const handleViewPG = () => {
    navigate("/viewPG"); // your route for Images page
  };

  return (
    <button
      onClick={handleViewPG}
      className="
        flex items-center gap-2 
        bg-gradient-to-r from-amber-500 to-orange-600 
        hover:from-amber-600 hover:to-orange-700
        text-white font-semibold
        px-5 py-3 rounded-xl
        shadow-lg hover:shadow-xl
        transition duration-300
      "
    >
      View PG Images
    </button>
  );
};

export default ViewPgButton;
