import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, CssBaseline } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Next from "../Next";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "90vh"
  },
  paper: {
    cursor: "pointer",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px gray",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    height: "50%",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.text.secondary
    },
    "&.active": {
      color: "white",
      backgroundColor: theme.palette.text.secondary
    }
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "5px",
    "&:hover": {
      opacity: "0.65"
    }
  }
}));

export default function Personalization({ onPatientClick }) {
  const classes = useStyles();
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const handlePatientClick = event => {
    setSelectedPatientId(event.target.id);
  };

  return (
    <div>
      <Typography>Personalization Grid</Typography>
      <CssBaseline />
      <Grid container component="main" className={classes.root}>
        <Grid
          item
          xs={false}
          id={1}
          xl={5}
          onClick={e => handlePatientClick(e)}
          className={`${classes.image}`}
        >
          <Checkbox
            checked={parseInt(selectedPatientId) === 1}
            value="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid
          item
          xs={false}
          id={2}
          xl={5}
          className={classes.image}
          onClick={e => handlePatientClick(e)}
        >
          <Checkbox
            checked={parseInt(selectedPatientId) === 2}
            value="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid
          item
          xs={false}
          id={3}
          xl={5}
          className={classes.image}
          onClick={e => handlePatientClick(e)}
        >
          <Checkbox
            checked={parseInt(selectedPatientId) === 3}
            value="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid
          item
          xs={false}
          id={4}
          xl={5}
          className={classes.image}
          onClick={e => handlePatientClick(e)}
        >
          <Checkbox
            checked={parseInt(selectedPatientId) === 4}
            value="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
