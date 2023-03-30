import React from 'react';
import Button from 'react-bootstrap/Button';


const SingleMovies = ({movie,handleWatchTime}) => {
    console.log(movie);
    return (
          <div className="card align-items-center p-4">
            <img src={movie.poster} alt="" className='img-fluid w-50 my-3'/>
            <p>{movie.movieName}</p>
            <p>{movie.description}</p>
            <div className='d-flex gap-4'>
            <p>Watch Time {movie.watchTime}</p>
            <p>Rating : {movie.imdbRating}</p>
            </div>
            <Button onClick={()=>handleWatchTime(movie.watchTime)} className='w-75' variant="success" size="lg" type="submit">BookNow</Button>
        </div>
  
    );
};

export default SingleMovies;