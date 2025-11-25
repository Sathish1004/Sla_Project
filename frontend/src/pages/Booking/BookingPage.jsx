
// import { useParams } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { useState } from "react";

// const pgDetails = {
//   1: { 
//     name: "Elite Men's Stay", 
//     location: "Velachery", 
//     price: 7500,
//     image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=400&fit=crop",
//     amenities: ["WiFi", "AC", "Food", "Laundry"],
//     rating: 4.5,
//     reviews: 128
//   },
//   2: { 
//     name: "Royal Boys PG", 
//     location: "Tambaram", 
//     price: 6800,
//     image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop",
//     amenities: ["WiFi", "Food", "Parking"],
//     rating: 4.2,
//     reviews: 89
//   },
//   3: { 
//     name: "Comfort Stay", 
//     location: "Guindy", 
//     price: 8200,
//     image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=400&fit=crop",
//     amenities: ["WiFi", "AC", "Food", "Gym", "Laundry"],
//     rating: 4.7,
//     reviews: 156
//   },
//   4: { 
//     name: "Urban Nest PG", 
//     location: "T Nagar", 
//     price: 9000,
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
//     amenities: ["WiFi", "AC", "Food", "Pool", "Gym"],
//     rating: 4.8,
//     reviews: 203
//   },
//   5: { 
//     name: "Blue Haven Men's Stay", 
//     location: "Adyar", 
//     price: 8500,
//     image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=400&fit=crop",
//     amenities: ["WiFi", "AC", "Food", "Laundry"],
//     rating: 4.4,
//     reviews: 112
//   },
//   6: { 
//     name: "Prime Comfort PG", 
//     location: "OMR - Thoraipakkam", 
//     price: 9200,
//     image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
//     amenities: ["WiFi", "AC", "Food", "Pool", "Gym", "Parking"],
//     rating: 4.9,
//     reviews: 178
//   },
// };

// // Function to store booking in localStorage (simulating database)
// const storeBooking = (bookingData) => {
//   const existingBookings = JSON.parse(localStorage.getItem('pgBookings') || '[]');
//   const newBooking = {
//     id: Date.now(),
//     ...bookingData,
//     bookingDate: new Date().toISOString(),
//     status: 'confirmed'
//   };
//   existingBookings.push(newBooking);
//   localStorage.setItem('pgBookings', JSON.stringify(existingBookings));
//   return newBooking;
// };

// const BookingPage = () => {
//   const { id } = useParams();
//   const pg = pgDetails[id];

//   // Form States
//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [sharing, setSharing] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isBooked, setIsBooked] = useState(false);

//   // Sharing Price Increase
//   const sharingPrice = {
//     "Single": 2000,
//     "Double": 1000,
//     "Triple": 500,
//     "Four": 0,
//   };

//   const basePrice = pg?.price || 0;
//   const extra = sharing ? sharingPrice[sharing] : 0;
//   const finalPrice = basePrice + extra;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));

//     const bookingData = {
//       pgId: id,
//       pgName: pg.name,
//       pgLocation: pg.location,
//       customerName: fullName,
//       customerPhone: phone,
//       customerEmail: email,
//       checkInDate: checkIn,
//       checkOutDate: checkOut,
//       sharingType: sharing,
//       basePrice: basePrice,
//       extraCharges: extra,
//       totalAmount: finalPrice
//     };

//     // Store booking in localStorage
//     storeBooking(bookingData);
    
//     setIsSubmitting(false);
//     setIsBooked(true);
//   };

//   if (isBooked) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center py-12">
//               <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Confirmed! 🎉</h1>
//               <p className="text-xl text-gray-600 mb-6">
//                 Your booking for <span className="font-bold text-blue-600">{pg.name}</span> has been confirmed.
//               </p>
//               <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto mb-8">
//                 <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
//                 <div className="space-y-2 text-left">
//                   <p><span className="font-medium">PG:</span> {pg.name}</p>
//                   <p><span className="font-medium">Amount:</span> ₹{finalPrice}</p>
//                   <p><span className="font-medium">Check-in:</span> {new Date(checkIn).toLocaleDateString()}</p>
//                   <p><span className="font-medium">Sharing:</span> {sharing}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => window.location.href = '/dashboard'}
//                 className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-200 font-semibold"
//               >
//                 View in Dashboard
//               </button>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">Complete Your Booking</h1>
//           <p className="text-xl text-center text-gray-600 mb-8">Secure your stay in just a few steps</p>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* PG Details Card */}
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
//               <div className="relative">
//                 <img 
//                   src={pg?.image} 
//                   alt={pg?.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
//                   ₹{pg?.price}/month
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-900 mb-2">{pg?.name}</h2>
//                     <div className="flex items-center text-gray-600 mb-3">
//                       <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                       {pg?.location}
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
//                       <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                       </svg>
//                       {pg?.rating}
//                     </div>
//                     <p className="text-sm text-gray-500 mt-1">{pg?.reviews} reviews</p>
//                   </div>
//                 </div>

//                 {/* Amenities */}
//                 <div className="mb-6">
//                   <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {pg?.amenities.map((amenity, index) => (
//                       <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//                         {amenity}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* PG Description */}
//                 <div className="border-t border-gray-200 pt-4">
//                   <h3 className="font-semibold text-gray-900 mb-2">About this PG</h3>
//                   <p className="text-gray-600 text-sm">
//                     A comfortable and secure accommodation with all modern amenities. 
//                     Perfect for students and working professionals. Well-connected to 
//                     public transport and major IT parks.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Booking Form */}
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Personal Information */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter your full name"
//                       value={fullName}
//                       onChange={(e) => setFullName(e.target.value)}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       placeholder="Enter your phone number"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                     required
//                   />
//                 </div>

//                 {/* Date Selection */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Check-in Date *
//                     </label>
//                     <input
//                       type="date"
//                       value={checkIn}
//                       onChange={(e) => setCheckIn(e.target.value)}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Check-out Date *(Approximate)
//                     </label>
//                     <input
//                       type="date"
//                       value={checkOut}
//                       onChange={(e) => setCheckOut(e.target.value)}
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Sharing Type */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Sharing Type *
//                   </label>
//                   <select
//                     value={sharing}
//                     onChange={(e) => setSharing(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                     required
//                   >
//                     <option value="">Select Sharing Type</option>
//                     <option value="Single">Single Sharing (+₹2000)</option>
//                     <option value="Double">Double Sharing (+₹1000)</option>
//                     <option value="Triple">Triple Sharing (+₹500)</option>
//                     <option value="Four">Four Sharing (+₹0)</option>
//                   </select>
//                 </div>

//                 {/* Price Summary */}
//                 <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
//                   <h3 className="text-xl font-bold mb-3 text-gray-900">Booking Summary</h3>
//                   <div className="space-y-2">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Base Price:</span>
//                       <span className="font-medium">₹{basePrice}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Sharing Charges:</span>
//                       <span className="font-medium">+₹{extra}</span>
//                     </div>
//                     <div className="border-t border-gray-200 pt-2 mt-2">
//                       <div className="flex justify-between">
//                         <span className="text-lg font-bold text-gray-900">Total Amount:</span>
//                         <span className="text-2xl font-bold text-green-600">₹{finalPrice}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition duration-200 ${
//                     isSubmitting
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105"
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <div className="flex items-center justify-center">
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing Booking...
//                     </div>
//                   ) : (
//                     `Confirm Booking - ₹${finalPrice}`
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default BookingPage;



import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import api from "../../services/api";

const pgDetails = {
  1: { 
    name: "Elite Men's Stay", 
    location: "Velachery", 
    price: 7500,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=400&fit=crop",
    amenities: ["WiFi", "AC", "Food", "Laundry"],
    rating: 4.5,
    reviews: 128
  },
  2: { 
    name: "Royal Boys PG", 
    location: "Tambaram", 
    price: 6800,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop",
    amenities: ["WiFi", "Food", "Parking"],
    rating: 4.2,
    reviews: 89
  },
  3: { 
    name: "Comfort Stay", 
    location: "Guindy", 
    price: 8200,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=400&fit=crop",
    amenities: ["WiFi", "AC", "Food", "Gym", "Laundry"],
    rating: 4.7,
    reviews: 156
  },
};

// ---------------- STORE BOOKING IN LOCAL STORAGE ------------------------
const storeBooking = (bookingData) => {
  const existingBookings = JSON.parse(localStorage.getItem('pgBookings') || '[]');
  const newBooking = {
    id: Date.now(),
    ...bookingData,
    bookingDate: new Date().toISOString(),
    status: 'confirmed'
  };
  existingBookings.push(newBooking);
  localStorage.setItem('pgBookings', JSON.stringify(existingBookings));
  return newBooking;
};

const BookingPage = () => {
  const { id } = useParams();
  const pg = pgDetails[id];

  // Form States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [sharing, setSharing] = useState("");

  // Payment Step States
  const [paymentStep, setPaymentStep] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const sharingPrice = {
    "Single": 2000,
    "Double": 1000,
    "Triple": 500,
    "Four": 0,
  };

  const basePrice = pg?.price || 0;
  const extra = sharing ? sharingPrice[sharing] : 0;
  const finalPrice = basePrice + extra;

  // ----------------- SUBMIT BOOKING FORM (GO TO PAYMENT STEP) ------------
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPaymentStep(true); // show payment options
  };

  // ----------------- FINAL PAYMENT CONFIRMATION --------------------------
  const handlePaymentConfirm = async () => {
    const bookingData = {
      pgId: id,
      pgName: pg.name,
      pgLocation: pg.location,
      customerName: fullName,
      customerPhone: phone,
      customerEmail: email,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      sharingType: sharing,
      paymentMethod: paymentMethod,
      basePrice: basePrice,
      extraCharges: extra,
      totalAmount: finalPrice,
    };

    try {
      // Compute rough duration in months for notes
      const durationMonths = Math.max(
        1,
        Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24 * 30)) || 1
      );

      // Create payment record in backend (MongoDB)
      const res = await api.post("/payments", {
        amount: finalPrice,
        method: paymentMethod,
        pg: id,
        notes: `PG: ${pg.name} | Sharing: ${sharing} | Duration: ${durationMonths} month(s)`,
        meta: {
          customerName: fullName,
          customerPhone: phone,
          customerEmail: email,
          checkInDate: checkIn,
          checkOutDate: checkOut,
          basePrice: basePrice,
          extraCharges: extra,
        },
      });

      if (!res?.success) throw new Error(res?.message || "Payment save failed");

      // Optional local fallback/store
      storeBooking(bookingData);
      setIsBooked(true);
    } catch (err) {
      alert(err.message || "Failed to record payment. Please try again.");
    }
  };

  // ------------------------- SUCCESS PAGE -------------------------------
  if (isBooked) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
          <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">
            <div className="text-green-600 text-6xl mb-4">✔</div>
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-lg">Your booking has been confirmed.</p>

            <div className="mt-6 text-left bg-gray-100 p-4 rounded-xl">
              <p><strong>PG:</strong> {pg.name}</p>
              <p><strong>Amount Paid:</strong> ₹{finalPrice}</p>
              <p><strong>Payment Method:</strong> {paymentMethod}</p>
            </div>

            <button
              onClick={() => window.location.href = "/dashboard"}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // ------------------------ PAYMENT METHOD STEP -------------------------
  if (paymentStep) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-blue-50 p-6 flex justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
            <h2 className="text-3xl font-bold text-center mb-6">Select Payment Method</h2>

            <div className="space-y-4">
              {/* UPI GPay */}
              <label className="flex items-center p-4 border rounded-xl cursor-pointer">
                <input 
                  type="radio" 
                  name="payment" 
                  value="Google Pay" 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                  className="mr-3"
                />
                <span className="text-lg font-medium">Google Pay (GPay)</span>
              </label>

              {/* PhonePe */}
              <label className="flex items-center p-4 border rounded-xl cursor-pointer">
                <input 
                  type="radio" 
                  name="payment" 
                  value="PhonePe" 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                  className="mr-3"
                />
                <span className="text-lg font-medium">PhonePe</span>
              </label>

              {/* Paytm */}
              <label className="flex items-center p-4 border rounded-xl cursor-pointer">
                <input 
                  type="radio" 
                  name="payment" 
                  value="Paytm" 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                  className="mr-3"
                />
                <span className="text-lg font-medium">Paytm</span>
              </label>

              {/* Card Payment */}
              <label className="flex items-center p-4 border rounded-xl cursor-pointer">
                <input 
                  type="radio" 
                  name="payment" 
                  value="Card Payment" 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                  className="mr-3"
                />
                <span className="text-lg font-medium">Credit / Debit Card</span>
              </label>
            </div>

            <button
              disabled={!paymentMethod}
              onClick={handlePaymentConfirm}
              className={`mt-6 w-full py-3 rounded-xl text-white font-bold ${
                paymentMethod ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
              }`}
            >
              Pay ₹{finalPrice}
            </button>

            <button
              onClick={() => setPaymentStep(false)}
              className="mt-3 w-full text-blue-600 underline"
            >
              Go Back
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  // --------------------- MAIN BOOKING FORM --------------------------
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Complete Your Booking</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PG Details */}
            <div className="bg-white rounded-xl shadow p-6">
              <img src={pg.image} className="w-full h-56 rounded-lg object-cover mb-4" />
              <h2 className="text-2xl font-bold">{pg.name}</h2>
              <p className="text-gray-600">{pg.location}</p>
              <p className="text-xl mt-2 font-semibold text-blue-600">₹{pg.price}/month</p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="bg-white shadow p-6 rounded-xl space-y-4">
              <input className="w-full p-3 border rounded" placeholder="Full Name" required
                value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <input className="w-full p-3 border rounded" placeholder="Phone" required
                value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input className="w-full p-3 border rounded" placeholder="Email" required
                value={email} onChange={(e) => setEmail(e.target.value)} />

              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="p-3 border rounded" required
                  value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                <input type="date" className="p-3 border rounded" required
                  value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
              </div>

              <select className="w-full p-3 border rounded" required
                value={sharing} onChange={(e) => setSharing(e.target.value)}>
                <option value="">Choose Sharing Type</option>
                <option value="Single">Single (+2000)</option>
                <option value="Double">Double (+1000)</option>
                <option value="Triple">Triple (+500)</option>
                <option value="Four">Four (+0)</option>
              </select>

              <button className="bg-blue-600 text-white w-full py-3 rounded-xl text-lg">
                Continue to Payment - ₹{finalPrice}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
