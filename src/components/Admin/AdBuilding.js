import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
    width: "100%"
  },
  container: {
    height: "100%"
  },
  leftContainer: {
    height: "100%",
    background: "#ad5389" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #3c1053, #ad5389)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #3c1053, #ad5389)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  rightContainer: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-end",
    height: "100%",
    background: "#ADA996" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  images: {
    objectFit: "contain",
    width: "100%",
    height: "auto"
  },
  logoImage: {
    width: "200px",
    height: "fit-content"
  },
  userImage: {
    position: "absolute",
    height: "100%",
    objectFit: "contain"
  },
  personalization: {
    height: "fit-content",
    padding: "16px",
    flexFlow: "column",
    display: "flex",
    margin: 0,
    boxSizing: "border-box",
    width: "50%",
    position: "relative"
  },
  signature: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    position: "relative"
  }
});

export default function AdBuilding({
  userImage,
  signature,
  patient,
  personalization
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xl={6} className={classes.leftContainer}>
          <img className={classes.images} alt="patient" src={patient.url} />
        </Grid>
        <Grid container xl={6} className={classes.rightContainer}>
          <img className={classes.userImage} alt="user" src={userImage} />
          <Grid item className={classes.signature}>
            <img alt="signature" src={signature} />
          </Grid>
          <Grid item className={classes.personalization}>
            <Typography variant={"body1"}>{personalization.content}</Typography>
            <img
              width="200"
              height="200"
              className={classes.logoImage}
              alt="personalization"
              src={personalization.logoUrl}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
