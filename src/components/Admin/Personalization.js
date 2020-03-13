import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Next from "../Next";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "skyblue",
    height: "100%"
  },
  option: {
    border: "1px solid black",
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function Personalization() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={"false"}>
      <Grid container spacing={3}>
        <Typography>Personalization</Typography>
        <Paper elevation={3}>
          <Grid item lg={6} className={classes.option}>
            Option One
          </Grid>
        </Paper>
        <Paper elevation={3}>
          <Grid item lg={6} className={classes.option}>
            Option Two
          </Grid>
        </Paper>
        <Paper elevation={3}>
          <Grid item lg={6} className={classes.option}>
            Option Three
          </Grid>
        </Paper>
        <Grid item lg={6} className={classes.option}>
          Option Four
        </Grid>
      </Grid>
      <Next />
    </Container>
  );
}
