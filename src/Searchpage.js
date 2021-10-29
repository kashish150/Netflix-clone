import React, { useState,useEffect } from'react';
import './Searchpage.css';
import axios from 'axios';
import Row from './Row';
function Searchpage(props){
   
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=c073958d88809d1090fcc8ba8a8f52a2&query=spider man")
        .then(function (response) {
          console.log("search")
          console.log(response.data.results);
        })},[]);
   
        // searchURL+'&query='+searchTerm
   
        //  }, []);https://api.themoviedb.org/3/movie/597891?api_key=c073958d88809d1090fcc8ba8a8f52a2&language=en-US
return<div className="searchpagecss">
<Row url="https://api.themoviedb.org/3/movie/now_playing?api_key=c073958d88809d1090fcc8ba8a8f52a2&language=en-US&page=1&include_adult=false" searchpagerow={true}/>
</div>
}export default Searchpage;