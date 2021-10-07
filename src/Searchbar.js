import React,{useState,useEffect} from 'react';
import Row from './Row';
import './Searchbar.css';
import axios from 'axios';
import {useParams} from "react-router-dom";
import Youtube from"react-youtube";
import movieTrailer from "movie-trailer";
function Searchbar(props){ 
  const [display,video]=useState('');
   const[mtrailer,setmtrailer]=useState('');
   const opts={
      height:"390",
      width:"100%",
      playerVars:{
         autoplay:1,
      }

   }
  const {id}=useParams();
  const [movies,setmovie]=useState([]);
  const handleclick=(movie)=>{
    if(mtrailer){
       setmtrailer('');
    }
    else{console.log(movie.title)
       movieTrailer(movie.title||"").then((url)=>{
       const urlparams=new URLSearchParams(new URL(url).search);
       setmtrailer(urlparams.get('v'));
       }).catch(e=>console.log(e))
    }
    }
   useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c073958d88809d1090fcc8ba8a8f52a2&query=${id}`)
    .then(function (response) {
      setmovie(response.data.results)
    })},[id]);
      
    return <div className="row">
    <h1>{props.title}</h1>
      <div className="searchpagecontainer">
         {
           movies.map(movie=>(
         <div className="rowcard">
           
            <img key={movie.id} onClick={()=>handleclick(movie)}
                className={props.searchpage?"searchpagerow":`row_poster ${props.largerow && "largeposter"}`} src={`https://image.tmdb.org/t/p/original/${props.largerow ? movie.poster_path:movie.backdrop_path||movie.poster_path}`} alt=""/>
                  {!props.largerow && <div className="data"><p>{movie.name||movie.title}</p> <p>Rating:{movie.vote_average}</p></div>}
                </div>
          
           )
           
           )

         }
      </div>
      {mtrailer&&<Youtube videoId={mtrailer} opts={opts}/>}
  </div>
}
export default  Searchbar;