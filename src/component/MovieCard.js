import React from 'react';

const MovieCard = ({ movie }) => {
const { title, description, posterURL, rating } = movie;

return (
        <div className="movie-card">
            <img src={posterURL} alt={title} />
            <h2>{title}</h2>
            <p className='desc'>{description}</p>
            <p className='rating'>Rating: {rating}</p>
        </div>
    );
};

export default MovieCard;