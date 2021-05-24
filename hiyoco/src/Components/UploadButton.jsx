import React from 'react';
import { Button } from '@material-ui/core';
import { loadImage } from '../Utils/steganography';

export default function UploadButton() {
    return (
        <label htmlFor="upload-photo">
            <input
                style={{ display: 'none' }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={loadImage}
            />
            <div>
                <Button style={{ margin: '1rem' }} variant="contained" component="span">Upload Image</Button>
            </div>
        </label>
    );
}