import React from "react";
import "../css/Review.css";
import Test from "../images/img01.png";


function Review(){
    return (
        <div class="wrapper">
			
  <h1>Our User's Say</h1>
  <div class="team">
    <div class="team_member">
      <div class="team_img">
        <img src="https://i.imgur.com/2pGPLrl.png" alt="Team_image"/>
      </div>
      <h3>Mr. Sumith Perera</h3>
      <p class="role">Bid winner</p>
      <p> I enjoyed working with Let's Bid. This saves our time and cost. Let's Bid gives actually high quality properties. </p>
    </div>
    <div class="team_member">
      <div class="team_img">
        <img src="https://i.imgur.com/jQj1I8E.png" alt="Team_image"/>
      </div>
      <h3>Ms.Senuli Aksha </h3>
      <p class="role">Property Owner</p>
      <p> This is actually amazing. I could sell my properties for a satisfactory amount.Highly recommend Let's Bid. </p></div>
  </div>
 
</div>
    );
    
}

export default Review;