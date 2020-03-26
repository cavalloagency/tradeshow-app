import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  image: props => ({
    backgroundImage: `url(${props.patient.url})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: theme.spacing(1),
    height: 400,
    "&:hover": {
      opacity: "0.65"
    }
  })
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
      xs={6}
      md={6}
      lg={3}
      xl={3}
      id={patient.id}
      onClick={() => handlePatientClick(patient)}
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
