// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import FormPanel from './components/FormPanel';
import ImagePanel from './components/ImagePanel';
import { fetchCatImage } from './utils/fetchCatImage';
import './App.css';

function App() {

  const [cat, setCat] = useState('');
  const [img, setImg] = useState('');
  const [radio, setRadio] = useState(false); //wciśnięty czy nie
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    const imageUrl = process.env.REACT_APP_IMAGE_URL + cat; 

    fetchCatImage(imageUrl, cat, setErrorStatus, setImg, setLoading);

  }, [cat, radio]);

  const handleChecked = e => {
    const target = e.target;

    console.log(target.value);

    if (target.checked) {
      setRadio(target.value);
    }
  }


  return (
    <Box className='child'>
      <Grid container spacing={2}>
        <FormPanel
          cat={cat}
          setCat={setCat}
          handleChecked={handleChecked}
        />
        <ImagePanel
          radio={radio}
          loading={loading}
          errorStatus={errorStatus}
          img={img}
        />
      </Grid>
    </Box>
  );
}

export default App;
