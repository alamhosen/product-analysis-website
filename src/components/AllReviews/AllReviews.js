import React from 'react';
import Reviews from '../../hooks/Reviews';
import Review from '../Review/Review';
import './AllReviews.css'
const AllReviews = () => {
    const [reviews, setReviews] = Reviews();
    return (
        <div className='allreview'>
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default AllReviews;