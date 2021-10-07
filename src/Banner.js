import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Banner.css';
import Youtube from"react-youtube";
import movieTrailer from "movie-trailer";
function Banner(props){
    const [movies,setMovies]=useState('');
    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c073958d88809d1090fcc8ba8a8f52a2&language=en-US&page=1')
        .then(function (response) {
         
     setMovies(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
        })
       
     }, []);
     function truncate(str,n){
         return str?.length>n?str.substr(0,n-1)+"...":str;
     }
    return (<div className="banner" 
    style={{backgroundSize:"cover",
backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`}}
>
 
        <div className="bannercontents">
<h1 className="bannertitle">{movies?.title||movies?.name||movies?.original_name}</h1>
 
<div className="bannerbuttons">
    <button>Play</button>
    <button>My List</button>
</div>
<div className="bannerdescription">
   <h1> {truncate(movies?.overview,150)}
   </h1>
</div>
        

    </div>
    
    <div className="bottom">  
        </div></div>
    )
}
export default Banner;