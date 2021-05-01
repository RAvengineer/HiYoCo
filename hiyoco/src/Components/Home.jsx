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
      backgroundImage:`url(${Glass})`,
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    app:{
      backgroundColor:'#1ca9c9',
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
        <div className={classes.app}>
        <div className={classes.image} style={{height:'35vh'}}>
        </div>
        <div className={classes.heroContent}>
          <Container maxWidth="xl"  style={{ backgroundColor: '#1ca9c9', height: '40vh', width:'100%', padding:'3rem' }}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
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
        <div className={classes.heroContent} style={{backgroundColor:'#1ca9c9'}}>
          <Container maxWidth="md" style={{backgroundColor:'#303030', padding:'3rem'}}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Image Steganography
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            The image steganography is the process in which we hide the data within an image
            so that there will not be any perceived visible change in the original image. The conventional image
            steganography algorithm is LSB embedding algorithm. 
            </Typography>
            <div className={classes.heroButtons}>
            </div>
          </Container>
        </div>
        <div className={classes.heroContent} style={{backgroundColor:'#1ca9c9', marginTop:'3rem'}}>
          <Container maxWidth="md" style={{backgroundColor:'#303030', padding:'3rem'}}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            LSB Method
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            In a gray scale image each pixel is represented in 8 bits. The last bit in a pixel is called as Least Significant bit as its
            value will affect the pixel value only by “1”. So, this property is used to hide the data in the image. If anyone have
            considered last two bits as LSB bits as they will affect the pixel value only by “3”. This helps in storing extra data.
            The Least Significant Bit (LSB) steganography is one such technique in which least significant bit of the image is
            replaced with data bit. As this method is vulnerable to steganalysis so as to make it more secure we encrypt the raw
            data before embedding it in the image. Though the encryption process increases the time complexity, but at the same
            time provides higher security also. This approach is very simple. 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            In this method the least significant bits of some or
            all of the bytes inside an image is replaced with a bits of the secret message. The LSB embedding approach has
            become the basis of many techniques that hide messages within multimedia carrier data. LSB embedding may even
            be applied in particular data domains – for example, embedding a hidden message into the color values of RGB
            bitmap data, or into the frequency coefficients of a JPEG image. LSB embedding can also be applied to a variety of
            data formats and types. Therefore, LSB embedding is one of the most important steganography techniques in use
            today.
            </Typography>
            <div className={classes.heroButtons}>
            </div>
          </Container>
        </div>
        <div style={{height:'10vh', backgroundColor:'#1ca9c9'}}>
        </div>
      </div>
    );
}