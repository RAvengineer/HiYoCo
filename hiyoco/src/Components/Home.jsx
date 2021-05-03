import { useState, useEffect, useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const classes = useStyles();
    const canvasRef = useRef(null); 
    const resultRef = useRef(null);

   useEffect(()=>{
       if(canvasRef.current){
            const sourceCanvas = canvasRef.current;
            const context = sourceCanvas.getContext("2d");
            if(selectedFile){
                let img = new Image();
                img.src=imageURL; 
                context.drawImage(document.getElementById("lock"),0,0,250,250);
            }
       }
       if(resultRef.current){
            const sourceCanvas = resultRef.current;
            const context = sourceCanvas.getContext("2d");
            if(selectedFile){
                let img = new Image();
                img.src=imageURL; 
                context.drawImage(document.getElementById("lock"),0,0,250,250);
            }
   }
    })
 
    function fileChangeHandler(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = function () {
        setSelectedFile(file);
        setImageURL(reader.result);
        };
        reader.readAsDataURL(file);
    }

    function submitHandler(e)
    {
        e.preventDefault();
        console.log(name + " " + email + " ");
    }

    return (
        <div className={classes.app} height="100vh">
            <div className={classes.image} style={{height:'25vh'}}>
            </div>
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
                <img src={imageURL} alt="lock" id="lock" style={{display:"none"}}/>
                <Grid container spacing={2} justify="center">
                    <Grid item sm={3} style={{ height:"35vh", padding:"1rem", marginTop:"1.5rem"}}>
                        <form noValidate autoComplete="off">
                            <Box display="flex" flexDirection="column">
                                <TextField id="name" label="Name" value={name} onChange={e => setName(e.target.value)} required style={{marginBottom:"0.35rem"}} />
                                <TextField id="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} required  style={{marginBottom:"0.75rem"}} />
                                <input className={classes.input} type="file" onChange={fileChangeHandler} accept="image/jpeg"  style={{marginBottom:"0.75rem"}} />
                                <Button variant="contained"color="primary" type="submit" onClick={submitHandler}>Submit</Button>
                            </Box>
                        </form>         
                    </Grid>
                    <Grid item xs={4} sm={3} style={{backgroundColor:"white",marginLeft:"1rem", height:"35vh"}}>
                        <canvas ref={canvasRef} width="500" height="750"/>
                    </Grid>
                    <Grid item xs={4} sm={3}  style={{backgroundColor:"white", marginLeft:"1rem", height:"35vh"}}>
                        <canvas ref={resultRef} width="500" height="750"/>
                    </Grid>
                </Grid>   
            </div>
            <div style={{height:'5.2vh', backgroundColor:'#1ca9c9'}}></div>
        </div>
    );
}