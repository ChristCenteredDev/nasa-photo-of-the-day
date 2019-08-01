import React from "react";
import { Image } from './NasaGrid';
import { Info } from './NasaGrid';

export function Card() {
  return (
    <div className="card">
      <div className="image-container">
        <Image />
      </div>

      <div className="info-container">
        <Info />
      </div>
    </div>
  );
}