import React from "react";
import { auth } from "../firebase";
import Button from "@material-ui/core/Button";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

export default function Signout() {
  return (
    <>
      <Button onClick={() => auth.signOut()}>
        Sign Out <PowerSettingsNewIcon />
      </Button>
    </>
  );
}
