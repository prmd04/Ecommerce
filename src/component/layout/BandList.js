import React from "react";
import './BandList.css'


const BandList = ({date,city,theater}) => {
  
  return (
    <div>
    <div class="tour-item">
      <span class="tour-date">{date}</span>
      <span class="tour-place">{city}</span>
      <span class="tour-spec-place">{theater}</span>
      <button class="buy-btn">BUY TICKETS</button>
    </div>
    <hr className="bottom-line"></hr>
    </div>

  );
};

export default BandList;
