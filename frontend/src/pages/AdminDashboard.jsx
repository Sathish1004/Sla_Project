import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = () => {
    const storedReviews = JSON.parse(localStorage.getItem('pgReviews') || '[]');
    setReviews(storedReviews);
  };

  const updateReviewStatus = (reviewId, status, notes = "") => {
    const updatedReviews = reviews.map(review => 
      review.id === reviewId 
        ? { ...review, status, adminNotes: notes } 
        : review
    );
    
    setReviews(updatedReviews);
    localStorage.setItem('pgReviews', JSON.stringify(updatedReviews));
    setSelectedReview(null);
  };

  const filteredReviews = reviews.filter(review => {
    if (filter === "all") return true;
    return review.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-yellow-100 text-yellow-800";
    }
  };

  const getRecommendationColor = (recommendation) => {
    switch (recommendation) {
      case "Yes, Definitely!": return "text-green-600";
      case "Maybe": return "text-yellow-600";
      case "Not Really": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const stats = {
    total: reviews.length,
    pending: reviews.filter(r => r.status === "pending").length,
    approved: reviews.filter(r => r.status === "approved").length,
    rejected: reviews.filter(r => r.status === "rejected").length
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage and moderate PG reviews</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
            <div className="text-gray-600">Total Reviews</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-gray-600">Pending Review</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
            <div className="text-gray-600">Approved</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
            <div className="text-gray-600">Rejected</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded ${
                filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              All Reviews ({stats.total})
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded ${
                filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Pending ({stats.pending})
            </button>
            <button
              onClick={() => setFilter("approved")}
              className={`px-4 py-2 rounded ${
                filter === "approved" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Approved ({stats.approved})
            </button>
            <button
              onClick={() => setFilter("rejected")}
              className={`px-4 py-2 rounded ${
                filter === "rejected" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Rejected ({stats.rejected})
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No reviews found for the selected filter.
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredReviews.map((review) => (
                <div key={review.id} className="p-6 hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{review.title}</h3>
                      <p className="text-gray-600">
                        {review.pgName} • {review.pgLocation}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(review.status)}`}>
                        {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(review.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">Overall: {review.overallRating}/5</span>
                    </div>
                    <p className="text-gray-700 mb-3">{review.description}</p>
                  </div>

                  {/* Category Ratings */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-3">
                    <div className="text-sm">
                      <span className="text-gray-600">Cleanliness: </span>
                      <span className="font-medium">{review.cleanliness}/5</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Food: </span>
                      <span className="font-medium">{review.food}/5</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Safety: </span>
                      <span className="font-medium">{review.safety}/5</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Location: </span>
                      <span className="font-medium">{review.location}/5</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Value: </span>
                      <span className="font-medium">{review.valueForMoney}/5</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className={`font-medium ${getRecommendationColor(review.recommendation)}`}>
                      Recommendation: {review.recommendation}
                    </div>
                    
                    {review.status === "pending" && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedReview(review)}
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Review
                        </button>
                      </div>
                    )}
                  </div>

                  {review.adminNotes && (
                    <div className="mt-3 p-3 bg-gray-100 rounded">
                      <strong className="text-gray-700">Admin Notes:</strong>
                      <p className="text-gray-600 mt-1">{review.adminNotes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Review Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Review Submission</h2>
              
              <div className="space-y-4">
                <div>
                  <strong>PG:</strong> {selectedReview.pgName}
                </div>
                <div>
                  <strong>Title:</strong> {selectedReview.title}
                </div>
                <div>
                  <strong>Overall Rating:</strong> {selectedReview.overallRating}/5
                </div>
                <div>
                  <strong>Description:</strong>
                  <p className="mt-1 text-gray-700">{selectedReview.description}</p>
                </div>
                <div>
                  <strong>Recommendation:</strong> {selectedReview.recommendation}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Admin Notes (Optional)
                </label>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add any notes or reasons for your decision..."
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => updateReviewStatus(selectedReview.id, "approved", adminNotes)}
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Approve Review
                </button>
                <button
                  onClick={() => updateReviewStatus(selectedReview.id, "rejected", adminNotes)}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                >
                  Reject Review
                </button>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;