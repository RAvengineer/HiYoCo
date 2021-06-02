import React from 'react';
import { Button } from '@material-ui/core';

export default function UploadButton(props) {
    return (
        <label htmlFor={props.id}>
            <input
                style={{ display: 'none' }}
                id={props.id}
                name={props.id}
                type="file"
                onChange={props.onChange}
            />
            <div>
                <Button style={{ margin: '1rem' }} variant="contained" component="span">Upload Image</Button>
            </div>
        </label>
    );
}