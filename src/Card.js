import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="content">
        <div className="country">
          <i className="fa-solid fa-location-dot"></i> {props.location}{" "}
          <a href={props.googleMapsUrl} target="_blanck">
            View on Google Maps
          </a>
        </div>
        <h3>{props.title}</h3>
        <div className="date">
          {props.startDate} - {props.endDate}
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
