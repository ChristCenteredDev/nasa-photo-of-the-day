import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from './Image';
import { Info } from './Info';

export function NasaCard() {
  const [picture, setPicture] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        setPicture(res.data.hdurl);
        setExplanation(res.data.explanation);
        setTitle(res.data.title);
        setAuthor(res.data.copyright);
        console.log(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="nasa-card">
      <h1>{title}</h1>
      <Image imgURL={picture} />
      <h2>{author}</h2>
      <Info explain={explanation} />
    </div>
  )
};
