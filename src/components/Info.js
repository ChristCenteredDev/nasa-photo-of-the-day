import React from "react";

export function Info(props) {
  return (
    <>
      <p style={props.style}>{props.explain}</p>
    </>
  );
}