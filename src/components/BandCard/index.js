import React from "react";
import "./style.css";

function BandCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        </div>
      <div className="content" class="row justify-content-center">
        <button type="button" class="btn btn-danger"><span onClick={() => props.removeBand(props.id)} className="remove">Click Here!</span></button>
      </div>
    </div>
    
  );
}

export default BandCard;