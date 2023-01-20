import { Button, FormControl, TextField } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';
import './Form.css' 

function Form() {
    const theme = useTheme();
        return (
            <div className='dashboard_form'>
                <h1 className='form_title'>Add Product</h1>
                <FormControl sx={{gap:"2rem"}}>
                    <div className='form_textfield'>
                        <div className='form_content'>
                            <label>Product Name</label>
                            <TextField type="text" label="Product Name" />
                        </div>
                        <div className='form_content'>
                            <label>Upload Images</label>
                            <TextField type="file" />
                        </div>
                        <div className='form_content'>
                            <label>Description</label>
                            <TextField type="text" multiline label="Description" />
                        </div>
                    </div>
                    <div className='form_button'>
                        <Button sx={{backgroundColor:theme.palette.secondary.main,justifyContent:"center"}}>Add</Button>
                    </div>
                </FormControl>
            </div>
        );
}

export default Form;