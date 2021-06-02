import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    imageBox: {
        backgroundColor: "#202020",
        margin: "0.5vh",
        height: "35vh",
        display: "flex",
        justifyContent: "center"
    }
}));

export default function DecodeGrid() {

    const classes = useStyles();

    return (
        <Grid container spacing={2} justify="center">
            <Grid item xs={10} sm={10} md={5} lg={4} className={classes.imageBox}>
                <img id="input-image" alt="" />
            </Grid>
        </Grid>
    );
}