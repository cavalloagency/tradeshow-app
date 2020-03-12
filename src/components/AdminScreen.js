import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { auth } from "../firebase";

export default function AdminScreen() {
  const [imageUri, setImageUri] = useState(null);

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    setImageUri(dataUri);
  }

  const handleTakeAnotherPhoto = () => {
    setImageUri(null);
  };

  return (
    <div>
      <h1>AdminScreen</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
      <div style={{ width: "400px;", height: "400px;" }}>
        {imageUri ? (
          <div>
            <img src={imageUri} alt="userImage" />
            <button>Use Photo</button>
            <button onClick={handleTakeAnotherPhoto}>Take another photo</button>
          </div>
        ) : (
          <Camera onTakePhotoAnimationDone={handleTakePhoto} />
        )}
      </div>
    </div>
  );
}
