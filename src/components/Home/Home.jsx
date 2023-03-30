import React, { useEffect, useState } from 'react';
import {Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Email from '../Email/Email';
import SingleMovies from '../Movies/SingleMovies';
import Summery from '../Movies/Summery';

const Home = () => {
    const [movies,setMovies] = useState([]);
    const [watchTime,setWatchTime] = useState([]);

     const handleWatchTime =(time)=>{
        const previewsWatchTime = JSON.parse(localStorage.getItem('watch-time'));
        if(previewsWatchTime){
            const sum = previewsWatchTime + time;
            JSON.stringify(localStorage.setItem("watch-time",sum))
            setWatchTime(sum);
        }else{
           JSON.stringify(localStorage.setItem("watch-time",time))
           setWatchTime(time);
        }
     }
    useEffect(()=>{
        const loadData = async () =>{
            const res = await fetch('data.json')
            const data = await res.json()
            setMovies(data);
        }
        loadData();
    },[]);

    return (
        <Container>
            
            <div className='row align-items-center min-vh-100 my-5'>

               <div className="col-sm-12 col-md-6">
                    {movies.map(movie=><SingleMovies movie={movie} handleWatchTime={handleWatchTime} />)}
               </div> 
                <Summery watchTime={watchTime} />
            </div>
            
            <Email/>

        </Container>
    );
};

export default Home;