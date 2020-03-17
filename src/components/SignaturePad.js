import React, { useState, useRef } from "react";
import SignaturePad from "react-signature-canvas";
import Button from "@material-ui/core/Button";
import "../App.css";
import Grid from "@material-ui/core/Grid";

export default function Signature() {
  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url

  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  return (
    <Grid item xl={12} md={12} alignItems="flex-end">
      <SignaturePad
        ref={sigCanvas}
        canvasProps={{
          width: vw,
          height: 200,
          className: "signatureCanvas",
          id: "signature"
        }}
      />
      <Button onClick={clear}>Clear</Button>
    </Grid>
  );
}

/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/
/* {imageURL ? (
        <img
          src={imageURL}
          alt="my signature"
          style={{
            display: "block",
            margin: "0 auto",
            border: "1px solid black",
            width: "150px"
          }}
        />
      ) : null} */
