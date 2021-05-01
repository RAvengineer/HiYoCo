import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Modal from "@material-ui/core/Modal";
import Glass from "../../src/glass.jpeg";
import Lock from "../../src/lock.jpg";

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
    image:{
      backgroundImage:`url(${Lock})`,
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    app:{
      backgroundColor:'#1ca9c9',
    },
    heading:{
        color:"black",
        fontWeight:"normal",
        fontSize:"2.5rem"
    }
  }));

export default function Home()
{
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [isModalOpen, setModal] = useState(false);
    const classes = useStyles();
    function fileChangeHandler(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = function () {
        setSelectedFile(file);
        setImageURL(reader.result);
        };
        reader.readAsDataURL(file);
    }

    function clickHandler(e) {
        console.log("File Uploaded!", selectedFile);
    }

    function closeModal()
    {
        setModal(false);
    }

    function openModal()
    {
        setModal(true);
    }

    return (
        <div className={classes.app} height="100vh">
            <div className={classes.image} style={{height:'25vh'}}>
            </div>
            <div className={classes.heroContent}>
                <Container maxWidth="xl"  style={{ backgroundColor: '#1ca9c9', height: '40vh', width:'100%', padding:'2rem' }}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.heading} gutterBottom>
                    Hide Your Copyright
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Protect your images using stegnography techniques!
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                            <input className={classes.input} type="file" onChange={fileChangeHandler} accept="image/jpeg"/>
                            </Grid>
                            <Grid item>
                            { !selectedFile && 
                                <Button variant="contained" color="primary" onClick={clickHandler}>
                                upload
                                </Button> 
                            }
                            {  selectedFile && 
                                <Button variant="contained" color="primary" onClick={openModal}>
                                view
                                </Button> 
                            }
                            </Grid>
                        </Grid>
                    </div>
                </Container>
                <Modal open={isModalOpen} onClose={closeModal} disableScrollLock={'true'} onBackdropClick={closeModal} style={{top:'20%', left:'20%', position:'absolute', width:"fit-content"}}>
                    <div style={{position:"relative"}}>
                        <span style={{position:"absolute", left:'0', top:'0'}}><button onClick={closeModal}>x</button></span>
                        <img src={imageURL} alt="preview" />
                    </div>
                </Modal>
            </div>
            <div style={{height:'20vh', backgroundColor:'#1ca9c9'}}>
            </div>
        </div>
    );
}