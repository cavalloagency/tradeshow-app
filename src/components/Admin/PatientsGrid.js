import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, CssBaseline } from "@material-ui/core";
import { data } from "../../firebase";
import PatientsGridItem from "../PatientsGridItem";

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

export default function PatientsGrid({
  handlePatientClick,
  selectedPatientId
}) {
  const classes = useStyles();

  const [patients, setPatients] = useState(null);

  useEffect(() => {
    data
      .collection("patients")
      .get()
      .then(snapshot => {
        const patients = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });

        setPatients(patients);
      });
  }, []);

  return (
    <div>
      <Typography>Patients Grid</Typography>
      <CssBaseline />
      <Grid container component="main" className={classes.root}>
        {patients
          ? patients.map(patient => (
              <PatientsGridItem
                key={patient.id}
                patient={patient}
                handlePatientClick={handlePatientClick}
                selectedPatientId={selectedPatientId}
              />
            ))
          : null}
      </Grid>
    </div>
  );
}

/* 
 <Grid
          item
          xs={12}
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
          xs={12}
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
          xs={12}
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
          xs={12}
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
*/
