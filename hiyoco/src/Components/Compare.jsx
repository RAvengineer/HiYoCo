import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Button } from '@material-ui/core';
import UploadButton from "./UploadButton";
import ReactCompareImage from 'react-compare-image';

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
    imageBox: {
        backgroundColor: "#202020",
        margin: "0.5vh",
        height: "35vh",
        display: "flex",
        justifyContent: "center"
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
    }
}));

export default function Compare() {
    const [image1URL, setImage1URL] = useState("");
    const [image2URL, setImage2URL] = useState("");
    const [compare, setCompare] = useState(false);
    const classes = useStyles();

    function fileChangeHandler(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = function () {
            if (e.target.id === "image1-upload") {
                setImage1URL(reader.result);
            } else if (e.target.id === "image2-upload") {
                setImage2URL(reader.result);
            } else {
                alert("Something went wrong while file upload!");
            }
        };
        try {
            reader.readAsDataURL(file);
        } catch (error) {
            alert("No image selected!");
        }
    }

    function onCompare() {
        setCompare(true);
    }

    return (
        <div className={classes.app} height="100vh">
            <div className={classes.heroContent}>
                <Container maxWidth="xl" style={{ backgroundColor: '#1ca9c9', width: '100%', padding: '2rem' }}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.heading} gutterBottom>
                        Image Diff
                    </Typography>
                </Container>
            </div>
            <div className={classes.heroContent} style={{ backgroundColor: "#1ca9c9" }}>
                <Grid container spacing={2} justify="center" >
                    <Grid item xs={10} sm={10} md={5} lg={3} style={{ margin: '0.5vh' }}>
                        <Grid item >
                            <UploadButton id="image1-upload" onChange={fileChangeHandler} />
                        </Grid>
                        <Grid item className={classes.imageBox}>
                            <img id="image1" src={image1URL} alt="" />
                        </Grid>
                    </Grid>
                    <Grid item xs={10} sm={10} md={5} lg={3} style={{ margin: '0.5vh' }}>
                        <Grid item >
                            <UploadButton id="image2-upload" onChange={fileChangeHandler} />
                        </Grid>
                        <Grid item className={classes.imageBox}>
                            <img id="image2" src={image2URL} alt="" />
                        </Grid>
                    </Grid>
                    <Grid item xs={10} sm={10} md={5} lg={3} style={{ margin: '0.5vh' }}>
                        <Grid item >
                            <Button
                                style={{ margin: '1rem' }}
                                variant="contained"
                                component="span"
                                color="secondary"
                                onClick={onCompare}
                            >Compare</Button>
                        </Grid>
                        <Grid item className={classes.imageBox}>
                            {
                                compare &&
                                <ReactCompareImage
                                    leftImage={image1URL}
                                    rightImage={image2URL}
                                    leftImageLabel="Image 1"
                                    rightImageLabel="Image 2"
                                    aspectRatio="wider"
                                    rightImageCss={{ objectFit: 'contain', objectPosition: 'top' }}
                                    leftImageCss={{ objectFit: 'contain', objectPosition: 'top' }}
                                    hover
                                />
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div style={{ height: '42vh', backgroundColor: '#1ca9c9' }}></div>
        </div>
    );
}