import React from 'react'
import { Grid } from '@mui/material';
import { Item } from './Item';
import Spinner from './Spinner';

const ImagePanel = ({ radio, loading, errorStatus, img  }) => {
    return (
        <>
            <Grid item xs={6}>
                <Item style={{
                    opacity: '100',
                    backgroundColor: `${
                        radio === 'red'
                        ? 'rgba(255, 0, 0, .6)'
                        : radio === 'green'
                        ? 'rgba(0, 255, 0, .6)'
                        : 'rgba(0, 0, 255, 0.6)'
                    }`
                }}
                >
                {
                    errorStatus
                    ? <h2>Cat could not be generated</h2>
                    : loading
                    ? <Spinner />
                    : <img src={img} alt='cat'width='450'/>
                }
                </Item>
            </Grid>
        </>
    )
}

export default ImagePanel