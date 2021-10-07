import React from 'react';
import Searchpage from './Searchpage';
function Trending(){
return <Searchpage url={"https://api.themoviedb.org/3/movie/now_playing?api_key=c073958d88809d1090fcc8ba8a8f52a2&language=en-US&page=1&include_adult=false"} />

}export default Trending;