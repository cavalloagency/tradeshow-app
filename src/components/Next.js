import React from "react";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function Next({ onButtonClick }) {
  return (
    <div>
      <Button onClick={onButtonClick}>
        <NavigateNextIcon />
      </Button>
    </div>
  );
}
