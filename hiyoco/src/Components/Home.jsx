import { useState, useEffect, useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Lock from "../../src/lock.jpg";
import { loadImage } from "../Utils/steganography";

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
      overflow:"hidden"
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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const classes = useStyles();

    function submitHandler(e)
    {
        e.preventDefault();
        console.log(name + " " + email + " ");
    }

    return (
        <div className={classes.app} height="100vh">
            <div className={classes.heroContent}>
                <Container maxWidth="xl"  style={{ backgroundColor: '#1ca9c9', width:'100%', padding:'2rem' }}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.heading} gutterBottom>
                    Hide Your Copyright
                    </Typography>
                    <Typography variant="h5" align="center" color="textPrimary" paragraph>
                    Protect your images using stegnography techniques!
                    </Typography>
                </Container>
            </div>
            <div className={classes.heroContent} style={{backgroundColor:"#1ca9c9"}}>
                <img src={imageURL} alt="imageURL" id="image" style={{display:"none"}}/>
                <Grid container spacing={2} justify="center">
                    <Grid item sm={10} md={8} lg={3} style={{ height:"35vh", padding:"1rem", marginTop:"1.5rem"}}>
                        <form noValidate autoComplete="off">
                            <Box display="flex" flexDirection="column">
                                <TextField id="name" label="Name" value={name} onChange={e => setName(e.target.value)} required style={{marginBottom:"0.35rem"}} />
                                <TextField id="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} required  style={{marginBottom:"0.75rem"}} />
                                {/* <input className={classes.input} type="file" onChange={fileChangeHandler} accept="image/jpeg"  style={{marginBottom:"0.75rem"}} /> */}
                                <Button variant="contained"color="primary" type="submit" onClick={loadImage}>Submit</Button>
                            </Box>
                        </form>         
                    </Grid>
                    <Grid item xs={10} sm={10} md={5} lg={4} style={{backgroundColor:"#202020",marginLeft:"1rem", height:"35vh"}}>
                        <img id="input-image" alt="" />
                    </Grid>
                    <Grid item xs={10} sm={10} md={5} lg={4} style={{backgroundColor:"#202020", marginLeft:"1rem", height:"35vh"}}>
                        {/* <canvas ref={resultRef} width="500" height="750"/> */}
                    </Grid>
                </Grid>   
            </div>
            <div style={{height:'32vh', backgroundColor:'#1ca9c9'}}></div>
            <canvas id="canvas"></canvas>
        </div>
    );
}