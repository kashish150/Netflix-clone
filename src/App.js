import React, { useState ,useEffect} from 'react';
import './App.css';
import Row from './Row.js';
import Banner from'./Banner.js';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Basic from'./Basic';
import Searchpage from './Searchpage';
import About from'./About';
import Searchbar from './Searchbar';
import axios from 'axios';
function App() {
  const [sm,ssm]=useState('intersellar');
  function getdata(movie){
ssm(movie);
console.log(movie);
}

return (<BrowserRouter>
      <switch>
      <Navbar getdata={getdata}/>
      <Route path="/" exact  component={Basic} />
      <Route path="/trending" exact  component={Searchpage} />
      <Route path="/about" exact  component={About} />
      <Route path="/searchmovie/:id" exact  component={Searchbar}/>
      <Footer/>
    </switch>
  </BrowserRouter>);
}

export default App;
