import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, CssBaseline } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import SignaturePad from "../SignaturePad";
import { data } from "../../firebase";

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
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    height: "40%"
  },
  card: {
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

export default function Personalization({
  handlePersonalizationClick,
  selectedPersonalizationId
}) {
  const classes = useStyles();
  const [personalizations, setPersonalizations] = useState(null);

  useEffect(() => {
    data
      .collection("personalization")
      .get()
      .then(snapshot => {
        const patients = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });

        setPersonalizations(patients);
      });
  }, []);

  return (
    <div>
      <Typography>Personalization Grid</Typography>
      <CssBaseline />
      <Grid container component="main" className={classes.root}>
        {personalizations
          ? personalizations.map(personalization => (
              <Grid
                item
                xs={12}
                id={personalization.id}
                xl={5}
                onClick={() => handlePersonalizationClick(personalization.id)}
                className={`${classes.image}`}
              >
                <Checkbox
                  checked={selectedPersonalizationId == personalization.id}
                  value="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <Paper className={classes.paper} elevation={3}>
                  <Typography variant="h3">{personalization.title}</Typography>
                  <Typography variant="p">{personalization.content}</Typography>
                </Paper>
              </Grid>
            ))
          : null}
        <SignaturePad />
      </Grid>
    </div>
  );
}
