import { useRef, useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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

export default function Compare()
{
    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");
    const [image1URL, setImage1URL] = useState("");
    const [image2URL, setImage2URL] = useState("");
    const classes = useStyles();
    const image1Ref = useRef(null); 
    const image2Ref = useRef(null);
 
    useEffect(()=>{
        if(image1Ref.current){
            const canvas = image1Ref.current;
            const context = canvas.getContext("2d");
            if(file1)
            {
                context.drawImage(document.getElementById("image1"),0,0,250,250)
            }
        }
        if(image2Ref.current){
            const canvas = image2Ref.current;
            const context = canvas.getContext("2d");
            if(file2)
            {
                context.drawImage(document.getElementById("image2"),0,0,250,250)
            }
        }
    })

    function fileChangeHandler(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = function () {
            if(e.target.id==="file1") 
            {
                setFile1(file);
                setImage1URL(reader.result);
            }
            else{
                setFile2(file);
                setImage2URL(reader.result);
            } 
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className={classes.app} height="100vh">
            <div className={classes.heroContent}>
                <Container maxWidth="xl"  style={{ backgroundColor: '#1ca9c9', width:'100%', padding:'2rem' }}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.heading} gutterBottom>
                    Image Diff
                    </Typography>
                </Container>
            </div>
            <div className={classes.heroContent} style={{backgroundColor:"#1ca9c9"}}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={10} sm={10} md={5} lg={3} className={classes.imageBox}>
                        <input type="file" accpet="image/jpeg" onChange={fileChangeHandler} id="file1"/>
                        <img id="image1" src={image1URL} alt="image1" style={{display:"none"}}/>
                        <canvas ref={image1Ref} width="500" height="750"/>
                    </Grid>
                    <Grid item xs={10} sm={10} md={5} lg={3} className={classes.imageBox}>
                        <input type="file" accpet="image/jpeg" onChange={fileChangeHandler} id="file2"/>
                        <img id="image2" src={image2URL} alt="image2" style={{display:"none"}}/>
                        <canvas ref={image2Ref}  width="500" height="750"/>
                    </Grid>
                    <Grid item xs={10} sm={10} md={5} lg={3} className={classes.imageBox}>     
                    </Grid>
                </Grid>   
            </div>
            <div style={{height:'42vh', backgroundColor:'#1ca9c9'}}></div>
        </div>
    );
}