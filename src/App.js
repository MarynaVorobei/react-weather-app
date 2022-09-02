import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather Forecast</h2>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://singular-puppy-7d796a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Maryna Vorobei
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/MarynaVorobei/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
