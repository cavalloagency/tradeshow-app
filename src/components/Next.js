import React from "react";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    left: 0,
    bottom: "50px",
    position: "relative"
  }
});

export default function Next({ onButtonClick }) {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Button onClick={onButtonClick}>
        Next
        <NavigateNextIcon />
      </Button>
    </Box>
  );
}
