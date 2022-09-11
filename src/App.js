import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="mt-2 mb-4">Weather Forecast</h2>
        <Weather defaultCity="Madrid" />
        <footer className="mt-4">© 2022 | Designed & coded by{" "}
          <a
            href="https://singular-puppy-7d796a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Maryna Vorobei
          </a>{" "}
          | Open-sourced on{" "}
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
