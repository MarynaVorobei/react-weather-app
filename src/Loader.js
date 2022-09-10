import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <ThreeDots
      height="60"
      width="60"
      radius="7"
      color="var(--heading-color)"
      visible={true}
    />
  );
}
