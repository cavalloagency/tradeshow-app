import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "90vh"
  },
  container: {
    height: "100%"
  },
  leftContainer: {
    height: "100%",
    backgroundColor: "lightgreen"
  },
  rightContainer: {
    height: "100%",
    backgroundColor: "lightyellow"
  },
  images: {
    objectFit: "contain",
    width: "100%",
    height: "auto"
  }
});

export default function AdBuilding({
  userImage,
  signature,
  patient,
  personalization
}) {
  const classes = useStyles();
  console.log("[props]", { userImage, signature, patient, personalization });
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xl={6} className={classes.leftContainer}>
          <img className={classes.images} alt="patient" src={patient.url} />
        </Grid>
        <Grid item xl={6} className={classes.rightContainer}>
          <div>
            <img className={classes.images} alt="user" src={userImage} />
          </div>
          <div>
            <img alt="signature" src={signature} />
          </div>
          <div>
            <Typography variant={"body1"}>{personalization.content}</Typography>
            <img
              className={classes.images}
              alt="personalization"
              src={personalization.logoUrl}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
