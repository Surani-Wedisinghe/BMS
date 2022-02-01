import React from "react";
import "../css/Nav.css";
import {Link} from "react-router-dom";

function Home(){
    return (
      <nav>
      <label class="logo">Let's Bid</label>
      <ul>
         <li><a class="active" href="#">Home</a></li>
         <li>
         <Link to = "/Categories"><a href="#">All categories
            <i class="fas fa-caret-down"></i>
            </a></Link>
            <ul>
               <li><a href="#">Vehicles</a></li>
               <li><a href="#">Lands</a></li>
               <li><a href="#">Apartments</a></li>
               <li><a href="#">Paintings</a></li>
               <li><a href="#">Antiques</a></li>
               <li><a href="#">Laptops</a></li>
               <li><a href="#">Smartphones</a></li>
            </ul>
         </li>
         <li>
            <a href="#">Requests
            <i class="fas fa-caret-down"></i>
            </a>
            <ul>
               <li>
                  <a href="#">Add
                  <i class="fas fa-caret-right"></i>
                  </a>
                  <ul>
                     <li><Link to = "/addproperties"><a href="#">Properties</a></Link></li> 
                  </ul>
               </li>
               <li>
                  <a href="#">Post
                  <i class="fas fa-caret-right"></i>
                  </a>
                  <ul>
                     <li><Link to = "/commercials"><a href="#">Commercials</a></Link></li>
                  </ul>
               </li>
            </ul>
         </li>
         <Link to = "/review"><li><a href="#">Review</a></li></Link>
         <Link to = "/chat"><li><a href="#">Chat</a></li></Link>
         <li><a href="#">Log out</a></li>

      </ul>
   </nav>
   
    );
    
}

export default Home;