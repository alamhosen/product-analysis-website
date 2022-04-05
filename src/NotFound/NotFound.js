import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found-page'>
            <div class="top">
                <h1>404</h1>
                <h3>Page not found</h3>
            </div>
            <div className="bottom">
                <p>Boo, looks like a ghost stole this page!</p>
            </div>

        </div>
    );
};

export default NotFound;