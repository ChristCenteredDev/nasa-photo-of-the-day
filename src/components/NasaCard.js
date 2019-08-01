import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from './Image';
import { Info } from './Info';

export function NasaCard() {
  const [picture, setPicture] = useState([]);
  const [explaination, setExplaination] = useState([]);
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log('response:' + res);
        setPicture(res.data.hdurl);
        setExplaination(res.data.explaination);
        setTitle(res.data.title);
        setAuthor(res.data.copyright);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Image />
      <Info />
    </>
  )
};
