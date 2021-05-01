import './App.css';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { BrowserRouter as Router, Routes, Route, NavLink }from "react-router-dom";
import Home from "./Components/Home";
import Compare from "./Components/Compare";
import Info from "./Components/Info";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary:{
      main:'#000000',
    },
    secondary:{
      main:'#424242',
    }
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link:{
    textDecoration:"none",
    color:"white",
    fontFamily:"Helvetica",
    marginLeft:"0.5rem",
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
          <AppBar  position="static" style={{backgroundColor:"black"}}>
            <Toolbar>
              <Typography variant="h4" className={classes.title}>
                <NavLink to="/" className={classes.link} end activeStyle={{color: '#1ca9c9'}}>
                  HiYoCo
                </NavLink>
              </Typography>
            <List component="nav">
              <ListItem button>
                <NavLink to="/compare" className={classes.link} activeStyle={{color: '#1ca9c9'}}>
                  Compare 
                </NavLink>
                <NavLink to="/info" className={classes.link} activeStyle={{color: '#1ca9c9'}} >
                  Info 
                </NavLink>
              </ListItem>
            </List>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="/compare" element={<Compare />}/>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
