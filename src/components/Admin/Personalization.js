import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, CssBaseline } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Checkbox from "@material-ui/core/Checkbox";

import SignaturePad from "../SignaturePad";
import { data } from "../../firebase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100%"
  },
  paper: {
    cursor: "pointer",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px gray",
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  media: {
    height: 140
  },
  signature: {
    display: "flex",
    alignContent: "flex-end",
    color: "gray"
  },
  signatureText: {
    color: "lightgray"
  }
}));

export default function Personalization({
  handlePersonalizationClick,
  selectedPersonalizationId,
  setSignatureHandler
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
    <div className={classes.root}>
      <Grid container spacing={0}>
        <CssBaseline />
        {/* <Grid container component="main" className={classes.root}> */}
        {personalizations
          ? personalizations.map(personalization => (
              <Grid
                item
                xs={12}
                id={personalization.id}
                xl={6}
                onClick={() => handlePersonalizationClick(personalization)}
                className={`${classes.image}`}
              >
                <Card className={classes.paper}>
                  <CardActions>
                    <Checkbox
                      checked={selectedPersonalizationId == personalization.id}
                      value="primary"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </CardActions>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="body1">
                        {personalization.content}
                      </Typography>
                    </CardContent>
                    <CardMedia className={classes.media} title="logo">
                      <img
                        src={personalization.logoUrl}
                        alt="logo"
                        height="140"
                      />
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          : null}
        <Grid item xl={12} className={classes.signature}>
          <SignaturePad onSignatureEnd={setSignatureHandler} />
        </Grid>
        <Grid item xl={12} className={classes.signatureText}>
          <Typography variant="h4">Signature</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
