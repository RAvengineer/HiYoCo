import React from 'react';
import { Button } from '@material-ui/core';
import { loadImage } from '../Utils/steganography';

export default function UploadButton(props) {
    return (
        <label htmlFor="upload-photo">
            <input
                style={{ display: 'none' }}
                id={props.id}
                name="upload-photo"
                type="file"
                onChange={props.onChange}
            />
            <div>
                <Button style={{ margin: '1rem' }} variant="contained" component="span">Upload Image</Button>
            </div>
        </label>
    );
}