import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WriteReviewButton from '../components/WriteReviewButton';

const ReadReview = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState('all');

  // Mock reviews data
  const mockReviews = [
    {
      id: 1,
      userName: "Raj Kumar",
      rating: 5,
      title: "Excellent Stay!",
      description: "The PG is very clean and the food is amazing. The staff is very helpful and the location is perfect for IT professionals.",
      timestamp: "2024-01-15",
      categories: {
        cleanliness: 5,
        food: 5,
        safety: 5,
        location: 4,
        valueForMoney: 5
      },
      recommendation: "Yes, Definitely!"
    },
    {
      id: 2,
      userName: "Priya S",
      rating: 4,
      title: "Good value for money",
      description: "Overall good experience. The rooms are spacious and well-maintained. Food could be better but it's decent.",
      timestamp: "2024-01-10",
      categories: {
        cleanliness: 4,
        food: 3,
        safety: 5,
        location: 5,
        valueForMoney: 4
      },
      recommendation: "Maybe"
    }
  ];

  useEffect(() => {
    // In real app, this would be an API call
    setReviews(mockReviews);
  }, [id]);

  const StarRating = ({ rating, size = "text-lg" }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${size} ${
            i <= rating ? 'text-amber-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      );
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  const getRecommendationColor = (recommendation) => {
    switch (recommendation) {
      case "Yes, Definitely!": return "text-green-600 bg-green-50";
      case "Maybe": return "text-yellow-600 bg-yellow-50";
      case "Not Really": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => 
        filter === 'positive' ? review.rating >= 4 :
        filter === 'negative' ? review.rating <= 2 :
        review.rating === 3
      );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Reviews & Ratings
          </h1>
          <p className="text-gray-600 text-lg">
            See what others are saying about this PG
          </p>
        </div>

        {/* Review Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-5xl font-bold text-amber-500 mb-2">4.5</div>
              <StarRating rating={4.5} size="text-2xl" />
              <div className="text-gray-600 mt-2">Based on {reviews.length} reviews</div>
            </div>
            
            <div className="flex gap-4">
              <WriteReviewButton 
                pgId={id} 
                variant="primary" 
                size="medium" 
                hasBooked={true} 
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setFilter('positive')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === 'positive' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Positive (4+)
          </button>
          <button
            onClick={() => setFilter('neutral')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === 'neutral' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Neutral (3)
          </button>
          <button
            onClick={() => setFilter('negative')}
            className={`px-4 py-2 rounded-lg font-medium ${
              filter === 'negative' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Negative (1-2)
          </button>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {review.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <StarRating rating={review.rating} />
                    <span className="text-gray-600">by {review.userName}</span>
                    <span className="text-gray-500 text-sm">
                      {new Date(review.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRecommendationColor(review.recommendation)}`}>
                  {review.recommendation}
                </span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.description}
              </p>

              {/* Category Ratings */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-gray-700">Cleanliness</div>
                  <div className="text-amber-500 font-bold">{review.categories.cleanliness}/5</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-700">Food</div>
                  <div className="text-amber-500 font-bold">{review.categories.food}/5</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-700">Safety</div>
                  <div className="text-amber-500 font-bold">{review.categories.safety}/5</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-700">Location</div>
                  <div className="text-amber-500 font-bold">{review.categories.location}/5</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-700">Value</div>
                  <div className="text-amber-500 font-bold">{review.categories.valueForMoney}/5</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No reviews found</h3>
            <p className="text-gray-600">No reviews match your current filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadReview;