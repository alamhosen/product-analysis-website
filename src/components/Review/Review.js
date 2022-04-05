import React from 'react';
import './Review.css'

const Review = ({review}) => {
    return (
        <div className='review-container'>
        
            <img src={review.img} alt=''></img>
            <h3>{review.name}</h3>
            <h4>Ratings: {review.ratings} Star</h4>
            <p>{review.review}</p>
            
        </div>
    );
};

export default Review;