import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  image: {
    backgroundImage: `url(https://source.unsplash.com/random)`,
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

export default function PatientsGridItem({
  handlePatientClick,
  selectedPatientId,
  patient
}) {
  const classes = useStyles({ patient });

  return (
    <Grid
      item
      xs={12}
      id={patient.id}
      xl={5}
      onClick={() => handlePatientClick(patient.id)}
      className={`${classes.image}`}
    >
      <Checkbox
        checked={selectedPatientId == patient.id}
        value="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </Grid>
  );
}
