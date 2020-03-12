import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { auth } from "../firebase";

export default function AdminScreen() {
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto", dataUri);
  }

  return (
    <div>
      <h1>AdminScreen</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
      <div style={{ width: "400px;", height: "400px;" }}>
        <Camera onTakePhotoAnimationDone={handleTakePhoto} />
      </div>
    </div>
  );
}
