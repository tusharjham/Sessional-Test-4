import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out differnt destinations with guide</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Travel to vencie to see early sunrise"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Trek the highest mountain peaks in world"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Walk through the streets of Rome"
              path="/services"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Explore the night in Amsterdam"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Reach safely and with cheapest fare to your destination"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
