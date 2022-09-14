//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const getHour = date.getHours();
const customColor = {};

if (getHour < 12) {
  customColor.color = "blue";
} else if (getHour < 18) {
  customColor.color = "red";
} else {
  customColor.color = "orange";
}

ReactDom.render(
  <h1 style={customColor}>Good Morning {getHour}</h1>,
  document.getElementById("root")
);
