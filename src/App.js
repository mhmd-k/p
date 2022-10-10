import React from "react";
import Card from "./Card";
import data from "./data";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";

function App() {
  let cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <nav>
        <h4>
          <FontAwesomeIcon icon={faEarthAmerica} /> my travel journal.
        </h4>
      </nav>
      <div className="container">{cards}</div>
    </div>
  );
}

export default App;
