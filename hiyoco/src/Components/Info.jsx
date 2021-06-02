import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: '0',
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    text:{
        fontSize:'1.2rem',
        fontWeight:'lighter',
    }
  }));

export default function Info()
{
    const classes = useStyles();
    return (
        <div style={{backgroundColor:'#1ca9c9', padding:'3rem'}}>
            <div className={classes.heroContent} style={{backgroundColor:'#1ca9c9'}}>
                <Container maxWidth="md" style={{backgroundColor:'#202020', padding:'3rem'}}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Image Steganography
                    </Typography>
                    <Typography align="center" color="textSecondary" className={classes.text} paragraph>
                    The image steganography is the process in which we hide the data within an image
                    so that there will not be any perceived visible change in the original image. The conventional image
                    steganography algorithm is LSB embedding algorithm. 
                    </Typography>
                </Container>
            </div>
             <div className={classes.heroContent} style={{backgroundColor:'#1ca9c9', marginTop:"3rem"}}>
                <Container maxWidth="md" style={{backgroundColor:'#202020', padding:'3rem'}}>
                    <Typography component="h1" variant="h3" align="center" color="textPrimary"  gutterBottom>
                    LSB Method
                    </Typography>
                    <Typography align="center" color="textSecondary" className={classes.text} paragraph>
                    In a gray scale image each pixel is represented in 8 bits. The last bit in a pixel is called as Least Significant bit as its
                    value will affect the pixel value only by “1”. So, this property is used to hide the data in the image. If anyone have
                    considered last two bits as LSB bits as they will affect the pixel value only by “3”. This helps in storing extra data.
                    The Least Significant Bit (LSB) steganography is one such technique in which least significant bit of the image is
                    replaced with data bit. As this method is vulnerable to steganalysis so as to make it more secure we encrypt the raw
                    data before embedding it in the image. Though the encryption process increases the time complexity, but at the same
                    time provides higher security also. This approach is very simple. 
                    </Typography>
                    <Typography  align="center" color="textSecondary" className={classes.text} paragraph>
                    In this method the least significant bits of some or
                    all of the bytes inside an image is replaced with a bits of the secret message. The LSB embedding approach has
                    become the basis of many techniques that hide messages within multimedia carrier data. LSB embedding may even
                    be applied in particular data domains – for example, embedding a hidden message into the color values of RGB
                    bitmap data, or into the frequency coefficients of a JPEG image. LSB embedding can also be applied to a variety of
                    data formats and types. Therefore, LSB embedding is one of the most important steganography techniques in use
                    today.
                    </Typography>
                </Container>
            </div>
            <div style={{height:'10vh', backgroundColor:'#1ca9c9'}}></div>
        </div>
    );
}