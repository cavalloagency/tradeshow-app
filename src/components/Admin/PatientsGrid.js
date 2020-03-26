import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { data } from "../../firebase";
import PatientsGridItem from "../PatientsGridItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    margin: "auto",
    padding: theme.spacing(2)
  }
}));

export default function PatientsGrid({
  handlePatientClick,
  selectedPatientId
}) {
  const classes = useStyles();

  const [patients, setPatients] = useState(null);
  console.log("[SelectedPatient]", selectedPatientId);

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
    <>
      <Grid container className={classes.root} spacing={0}>
        <CssBaseline />
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
    </>
  );
}
