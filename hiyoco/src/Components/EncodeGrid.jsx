import { Grid, Box, TextField, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    imageBox: {
        backgroundColor: "#202020", 
        marginLeft: "1rem", 
        height: "35vh", 
        display: "flex"
    }
}));

export default function EncodeGrid() {

    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        console.log(name + "\n" + email);
    }

    return (
        <Grid container spacing={2} justify="center">
            <Grid item sm={10} md={8} lg={3} style={{ height: "35vh", padding: "1rem", marginTop: "1.5rem" }}>
                <form noValidate autoComplete="off">
                    <Box display="flex" flexDirection="column">
                        <TextField id="name" label="Name" value={name} onChange={e => setName(e.target.value)} required style={{ marginBottom: "0.35rem" }} />
                        <TextField id="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ marginBottom: "0.75rem" }} />
                        {/* <input className={classes.input} type="file" onChange={fileChangeHandler} accept="image/jpeg"  style={{marginBottom:"0.75rem"}} /> */}
                        <Button variant="contained" color="primary" type="submit" onClick={submitHandler}>Submit</Button>
                    </Box>
                </form>
            </Grid>
            <Grid item xs={10} sm={10} md={5} lg={4} justify='center' className={classes.imageBox}>
                <img id="input-image" alt="" />
            </Grid>
            <Grid item xs={10} sm={10} md={5} lg={4} justify='center' className={classes.imageBox}>
                <img id="encoded-image" alt=""></img>
            </Grid>
        </Grid>
    );
}