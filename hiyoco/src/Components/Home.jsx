import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Lock from "../../src/lock.jpg";
import { decode, encode } from "../Utils/steganography";
import EncodeGrid from "./EncodeGrid";
import UploadButton from "./UploadButton";
import DecodeGrid from "./DecodeGrid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: '0',
    },
    image: {
        backgroundImage: `url(${Lock})`,
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    app: {
        backgroundColor: '#1ca9c9',
        overflow: "hidden"
    },
    heading: {
        color: "black",
        fontWeight: "normal",
        fontSize: "2.5rem"
    },
    canvas: {
        display: "none"
    }
}));

export default function Home() {
    const [option, setOption] = useState('home');
    const classes = useStyles();

    function handleClick(event) {

        const { name } = event.currentTarget;
        if (name === 'home') {
            setOption('home');
            // document.getElementById('encoded-image').style.display = 'none';
        } else if (name === 'encode') {
            setOption('encode');
        } else if (name === 'decode') {
            setOption('decode');
        }
    }

    return (
        <div className={classes.app} height="100vh">
            <div className={classes.heroContent}>
                <Container maxWidth="xl" style={{ backgroundColor: '#1ca9c9', width: '100%', padding: '2rem' }}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.heading} gutterBottom>
                        Hide Your Copyright
                    </Typography>
                    <Typography variant="h5" align="center" color="textPrimary" paragraph>
                        Protect your images using stegnography techniques!
                    </Typography>
                </Container>
            </div>
            <div className={classes.heroContent} style={{ backgroundColor: "#1ca9c9" }} align="center">
                {option === 'home' && <Button style={{ margin: '1rem' }} name='encode' onClick={handleClick} variant="contained">Encode</Button>}
                {option === 'home' && <Button style={{ margin: '1rem' }} name='decode' onClick={handleClick} variant="contained">Decode</Button>}
                {option !== 'home' && <UploadButton />}
                {option === 'encode' && <EncodeGrid />}
                {option === 'decode' && <DecodeGrid />}
                {option === 'encode' && <Button style={{ margin: '1rem' }} onClick={encode} variant="contained">Encode</Button>}
                {option === 'decode' && <Button style={{ margin: '1rem' }} onClick={decode} variant="contained">Decode</Button>}
                {option !== 'home' && <Button style={{ margin: '1rem' }} name='home' onClick={handleClick} variant="contained">Return</Button>}
            </div>
            <div style={{ height: '32vh', backgroundColor: '#1ca9c9' }}></div>
            <canvas id="canvas" className={classes.canvas}></canvas>
        </div>
    );
}