import React, { useState, useEffect } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Personalization from "./Admin/Personalization";
import PatientsGrid from "./Admin/PatientsGrid";
import Signout from "./Signout";
import AdBuilding from "./Admin/AdBuilding";

import profileImage from "../../src/assets/images/photo_2020-03-14_10-52-10.jpg";
import { filterImage } from "../imageTransformer";

export default function AdminScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [adCreationSteps, setAdCreationSteps] = useState({
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false
  });

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...

    setImageUri(dataUri);
  }

  const handleUsePhoto = () => {
    const filteredImageUri = filterImage();
    setImageUri(filteredImageUri);

    const stepState = { ...adCreationSteps };

    stepState.stepOne = false;
    stepState.stepTwo = true;

    // setAdCreationSteps(stepState);
  };

  const handleTakeAnotherPhoto = () => {
    setImageUri(null);
  };

  const stepDisplay = () => {
    const stepState = { ...adCreationSteps };

    if (stepState.stepOne) {
      return (
        <div>
          {imageUri ? (
            <div>
              <img src={imageUri} alt="userImage" id="user-image" />
              <button onClick={handleUsePhoto}>Use Photo</button>
              <button onClick={handleTakeAnotherPhoto}>
                Take another photo
              </button>
            </div>
          ) : (
            <Camera
              isFullscreen={false}
              onTakePhotoAnimationDone={handleTakePhoto}
            />
          )}
          {imageUri ? (
            <div style={{ backgroundColor: "lightblue" }}>
              <p>Chromakeyed Image</p>
            </div>
          ) : null}
        </div>
      );
    } else if (stepState.stepTwo) {
      return <PatientsGrid />;
    } else if (stepState.stepThree) {
      return <Personalization />;
    } else if (stepState.stepFour) {
      return <AdBuilding />;
    }
  };

  return (
    <div style={{ backgroundColor: "#ec008c", height: "100vh" }}>
      <Signout />
      <p>{imageUri}</p>
      {stepDisplay()}
      <canvas
        id="myCanvas"
        style={{ display: "none" }}
        // width="1400"
        // height="1400"
        // style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}
