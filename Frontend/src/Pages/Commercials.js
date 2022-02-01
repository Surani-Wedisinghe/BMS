import React from "react";
import "../css/Add.css";


function Commercials(){
    return (
      <div class="wrapper">
    <div class="title">
      REQUEST TO ADD YOUR COMMERCIAL
    </div>
    <div class="form">
       <div class="inputfield">
          <label>User Name</label>
          <input type="text" class="input"/>
       </div>   
        <div class="inputfield">
          <label>Upload image</label>
          <input type="file" id="file" accept= "image/*"/>
       </div> 
      <div class="inputfield">
          <label>Description</label>
          <textarea class="textarea"></textarea>
       </div> 
       <div class="inputfield">
          <label>Address</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Submit" class="btn"/>
      </div>
    </div>
</div>	

    );
    
}

export default Commercials;