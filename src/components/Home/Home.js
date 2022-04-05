import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reviews from '../../hooks/Reviews';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = Reviews();
    const navigate = useNavigate();

    return (
        <div className='home-container'>
            <div className='header-area'>
                <div className='header-text'>
                    <h1>Welcome to Monater Shoes Store</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit laborum minus consequatur fugiat doloribus! Ut ipsa maxime sapiente. Laborum ipsum eius suscipit pariatur. Ratione nulla ex delectus distinctio fugiat, quia sapiente suscipit dolores deserunt.</p>
                    <button className='live-demo-btn'>Live Demo</button>
                </div>
                <div className='header-image'>
                    <img src="https://m.media-amazon.com/images/I/71h55t2eL2L._AC_UY500_.jpg"></img>
                </div>
            </div>
            <div className='review-area'>
                <h2>Customer Reviews: {reviews.length}</h2>
                <div className='reviews'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>

                <button onClick={() => navigate('/reviews')} className='SeeAllReviewBtn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;