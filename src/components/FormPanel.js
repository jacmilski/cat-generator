// @ts-nocheck
import React from 'react';
import {
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField
} from '@mui/material';
import { Item } from './Item'

const FormPanel = ({ cat, setCat, handleChecked }) => {
    return (
        <>
            <Grid item xs={6}>
                <Item>
                {
                    !cat && <h1 style={{marginBottom: '2em'}}>
                        Use form to generate cat
                    </h1>
                }
                    <FormControl noValidate autoComplete='off'>
                    <TextField 
                        type='text'
                        placeholder='Add Cat Name'
                        id='cat'
                        name={cat} // lub value ?
                        onChange={(e) => setCat(e.target.value) }
                    />
                    <hr style={{border: 'solid #444 2px', width: '300px', marginTop: '20px'}}/>
                    <RadioGroup
                        name='radio-buttons-group'
                    >
                        <FormControlLabel
                        type='text'
                        value='red'
                        control={<Radio />}
                        label='Red'
                        onChange={handleChecked}
                        />
                        <FormControlLabel
                        type='text'
                        value='green'
                        control={<Radio />}
                        label='Green'
                        onChange={handleChecked}
                        />
                        <FormControlLabel
                        type='text'
                        value='blue'
                        control={<Radio />}
                        label='Blue'
                        onChange={handleChecked}
                        />
                    </RadioGroup>
                    </FormControl>
                </Item>
            </Grid>
        </>
    )
}

export default FormPanel;