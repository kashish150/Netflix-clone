import Row from './Row.js';
import Banner from'./Banner.js';
function Basic(){
    return<div>
    <Banner/>
    <div className="basiccss">
    <Row url={"https://api.themoviedb.org/3/movie/now_playing?api_key=c073958d88809d1090fcc8ba8a8f52a2&language=en-US&page=1&include_adult=false"} title={"Trending"} largerow={true}/>
    <Row url={"https://api.themoviedb.org/3/discover/tv?api_key=c073958d88809d1090fcc8ba8a8f52a2&with_networks=213"} title={"NetflixOriginals"}/>
    <Row url={"https://api.themoviedb.org/3/movie/now_playing?api_key=c073958d88809d1090fcc8ba8a8f52a2&language=en-US&page=2"} title={"Top Rated"}/>
    <Row url={"https://api.themoviedb.org/3/movie/now_playing?api_key=c073958d88809d1090fcc8ba8a8f52a2&language=en-US&page=3"} title={"Romance"}/>
    <Row url={"https://api.themoviedb.org/3/movie/now_playing?api_key=c073958d88809d1090fcc8ba8a8f52a2&language=en-US&page=4"} title={"Documenries"}/>
    <Row url={"https://api.themoviedb.org/3/movie/now_playing?api_key=c073958d88809d1090fcc8ba8a8f52a2&language=en-US&page=5"} title={"Comedy Movies"}/>
    </div>

 </div>
}export default Basic;