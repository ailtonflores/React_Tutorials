import React from "react";
import "./styles.css";

const date= new Date(2021, 1, 1, 13);
const currentTime = date.getHours();
let greeting;

const customStyle = {
  color: ""
}

if (currentTime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";

} else if(currentTime < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
  }else {
    greeting = "Good Night";
    customStyle.color= "blue";
  }



export default function App() {
  return (
    <div  className="App">
      <h1 style = {customStyle}>{greeting}</h1>
     
    </div>
  );
}
