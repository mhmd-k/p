import React from "react";
import Card from "./Card";
import data from "./data";
import "./App.css";

function App() {
  let cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <nav>
        <h4>
          <i className="fa-solid fa-earth-americas"></i> my travel journal.
        </h4>
      </nav>
      <div className="container">{cards}</div>
    </div>
  );
}

export default App;
