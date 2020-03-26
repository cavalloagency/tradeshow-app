import React from "react";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonText: {
    position: "absolute",
    right: 15,
    bottom: 15,
    backgroundColor: "rgba(255,255,255,0.6)",
    color: "black"
  }
});

export default function Next({ onButtonClick }) {
  const styles = useStyles();
  return (
    <Button
      className={styles.buttonText}
      onClick={onButtonClick}
      endIcon={<NavigateNextIcon color="action" />}
    >
      Next
    </Button>
  );
}
