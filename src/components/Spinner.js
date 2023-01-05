import React from 'react';
import { CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <>
        <CircularProgress color='secondary' size='100px' thickness={6}/>
    </>
  )
}

export default Spinner