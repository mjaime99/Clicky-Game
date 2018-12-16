import React from "react";
import "./style.css";

function BandCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Genre:</strong> {props.genre}
          </li>
          <li>
            <strong>Origin:</strong> {props.origin}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeBand(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default BandCard;