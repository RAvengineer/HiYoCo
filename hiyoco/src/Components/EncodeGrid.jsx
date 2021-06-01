import { Grid, Box, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    imageBox: {
        backgroundColor: "#202020",
        margin: "0.5vh",
        height: "35vh",
        display: "flex",
        justifyContent: "center"
    }
}));

export default function EncodeGrid() {

    const classes = useStyles();

    return (
        <Grid container spacing={2} justify="center">
            <Grid item sm={10} md={8} lg={3} style={{ height: "35vh", padding: "1rem", marginTop: "1.5rem" }}>
                <form noValidate autoComplete="off">
                    <Box display="flex" flexDirection="column">
                        <TextField type="text" id="author-name" label="Name" required style={{ marginBottom: "0.35rem" }} />
                        <TextField type="email" id="author-email" label="Email" required style={{ marginBottom: "0.75rem" }} />
                    </Box>
                </form>
            </Grid>
            <Grid item xs={10} sm={10} md={5} lg={4} className={classes.imageBox}>
                <img id="input-image" alt="" />
            </Grid>
            <Grid item xs={10} sm={10} md={5} lg={4} className={classes.imageBox}>
                <img id="encoded-image" alt=""></img>
            </Grid>
        </Grid>
    );
}