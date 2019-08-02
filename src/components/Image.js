import React from "react";

export function Image(props) {
  return (
    <>
      <img src={props.imgURL} alt="space" style={props.style}></img>
    </>
  );
}