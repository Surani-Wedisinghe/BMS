import React from "react";

import Apartment from "../images/img2.jpg"
import Car from "../images/img1.jpg"
import heater from "../images/img3.jpg"
import iron from "../images/img4.jpg"
import brush from "../images/img5.jpg"
import hairdry from "../images/img6.png"
import "../css/Categories.css"

function Categories() {
    return (
<div class="main">
    
        <div class="cards">
            <div class="image">
            <img src = {Apartment} class="image" alt=""/>  
            </div>
            <div class="title">
               <b><p>Apartment</p> </b>
            </div>
            <div class="des">
               <b><p>location = Panadura</p></b>
               
            </div>
            <center><details>
  <summary>More</summary>
  <p>PropertyID : A002<br></br>
  Base Price: 1,000,000LKR <br></br>
  </p>
</details>
</center>

     </div>

     
     <div class="cards">
            <div class="image">
            <img src = {Car} class="image" alt=""/>  
            </div>
            <div class="title">
               <b><p>ExtremeTech Car</p> </b>
            </div>
            <div class="des">
               <b><p>Location:Nugegoda</p></b>
            </div>
            <center>
            <details>
  <summary>More</summary>
  <p>PropertyID : C005<br></br>
  Base Price : 30,000,000LKR <br></br>
  </p>
</details>
            </center>
     </div>

     <div class="cards">
            <div class="image">
            <img src = {heater} class="image" alt=""/>  
            </div>
            <div class="title">
               <b><p>Land</p> </b>
            </div>
            <div class="des">
               <b><p>Location: Kalutara</p></b>
            </div>
            <center>
            <details>
  <summary>More</summary>
  <p>PropertyID :L008<br></br>
  Base Price :20,000,000LKR <br></br>
  
  </p>
</details>
            </center>
     </div>

     <div class="cards">
            <div class="image">
            <img src = {iron} class="image" alt=""/>  
            </div>
            <div class="title">
               <b><p>Antiques</p> </b>
            </div>
            <div class="des">
               <b><p>Location:Ambalangoda</p></b>
            </div>
            <center>
            <details>
  <summary>More</summary>
  <p>PropertyID :N005<br></br>
  Base Price :35000LKR <br></br>
  
  </p>
</details>
            </center>
     </div>

     <div class="cards">
            <div class="image">
            <img src = {brush} class="image" alt=""/>  
            </div>
            <div class="title">
               <b><p>Painting</p> </b>
            </div>
            <div class="des">
               <b><p>Location:Galle</p></b>
               
            </div>
            <center>
            <details>
  <summary>More</summary>
  <p>PropertyID :P003<br></br>
  Base Price :6500LKR <br></br>
  
  </p>
</details>
            </center>
     </div>

     <div class="cards">
            <div class="image">
            <img src = {hairdry} class="image" alt=""/>  
            </div>
            <div class="title">
               <b><p>Laptop</p> </b>
            </div>
            <div class="des">
               <b><p>Location:Matugama</p></b>
                
            </div>
            <center>
            <details>
  <summary>Product Details</summary>
  <p>ProperyID : Z008<br></br>
  Base Price : 65000LKR <br></br>
  
  </p>
</details>
            </center>
     </div>

     </div>
    );
    
}

export default Categories;