import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="5"
      color="#fff"
      visible={true}
    />
  );
}
