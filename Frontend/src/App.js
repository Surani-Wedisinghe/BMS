import React from "react";
import './App.css';
import Signup from "../src/Pages/Signup";
import Home from "../src/Pages/Home";
import Addproperties from "../src/Pages/Addproperties";
import Commercials from "./Pages/Commercials";
import Categories from "./Pages/Categories";
import Review from "./Pages/Review";
import Chat from "../src/Pages/Chat";


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return(
    <Router>
      <Routes>
        <Route exact path = "/" element = { <Signup/>} />
        <Route exact path = "/home" element = { <Home/>}/>
        <Route exact path = "/addproperties" element = {<Addproperties/>}/>
        <Route exact path = "/commercials" element = {<Commercials/>}/>
        <Route exact path = "/categories" element={<Categories/>}/>
        <Route exact path = "/review" element={<Review/>}/>
        <Route exact path = "/chat" element = {<Chat/>}/>
     

      </Routes>
    </Router>
  );
}

export default App;
