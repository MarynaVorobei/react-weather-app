import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="Loader">
    <ThreeDots
      height="70"
      width="70"
      radius="7"
      color="#fff"
      visible={true}
    />
    </div>
  );
}
