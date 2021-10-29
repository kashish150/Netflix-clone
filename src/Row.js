import React, { useState,useEffect } from'react';
import axios from 'axios';
import './Row.css';
import Youtube from"react-youtube";
import movieTrailer from "movie-trailer";
function Row(props){
const [display,video]=useState('');
   const[mtrailer,setmtrailer]=useState('');
   const opts={
      height:"390",
      width:"100%",
      playerVars:{
         autoplay:1,
      }

   }
const [movies,setMovies]=useState([]);
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

    axios.get(props.url)
    .then(function (response) {
      
 setMovies(response.data.results);

    })
   
 }, []);
function onhovermovie(){

}

 return <div className="row">
     <h1>{props.title}</h1>
       <div className={props.searchpage?"searchpagecontainer":"container"}>
          {
            movies.map(movie=>(
      <div className={props.largerow?"rowcard":"rowcar"}>
             <img className="revealer"  key={movie.id} onMouseOver={()=>onhovermovie} onClick={()=>handleclick(movie)}
                 className={`row_poster ${props.largerow && "largeposter"}`} src={`https://image.tmdb.org/t/p/original/${props.largerow ? movie.poster_path:movie.backdrop_path||movie.poster_path}`} alt=""/>
                 {  props.searchpagerow && <div className="data"><p>{movie.name||movie.title}</p></div>}
                </div>   )
            
            )

          }
       </div>
       {mtrailer&&<Youtube videoId={mtrailer} opts={opts}/>}
   </div>

}
export default Row;