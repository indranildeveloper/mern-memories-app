import React from "react";
import { AppBar, Toolbar, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <Container maxWidth="md" align="center" className={classes.container}>
        <Toolbar>
          <Typography variant="body1" color="inherit" className={classes.text}>
            Memories Application Created By &copy;Indranil Halder, 2021
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
