import React from "react";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Box from "@material-ui/core/Box";

export default function Next({ onButtonClick }) {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Button onClick={onButtonClick}>
        <NavigateNextIcon />
      </Button>
    </Box>
  );
}
