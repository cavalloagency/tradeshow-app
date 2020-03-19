import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";
import Button from "@material-ui/core/Button";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  clear: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center"
  }
});

export default function Signature({ onSignatureEnd }) {
  const styles = useStyles();
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();

  const save = () => {
    const canvas = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    onSignatureEnd(canvas);
  };

  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  return (
    <>
      <Grid item xl={11} md={11}>
        <SignaturePad
          ref={sigCanvas}
          canvasProps={{
            width: vw,
            height: 200,
            className: "signatureCanvas",
            id: "signature"
          }}
          onEnd={save}
        />
      </Grid>
      <Grid item xl={1} md={1} className={styles.clear}>
        <Button onClick={clear}>
          <Typography variant="h6">Clear</Typography>
        </Button>
      </Grid>
    </>
  );
}
