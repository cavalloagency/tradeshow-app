import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Personalization from "./Admin/Personalization";
import PatientsGrid from "./Admin/PatientsGrid";
import Signout from "./Signout";
import AdBuilding from "./Admin/AdBuilding";
import ReactChromakeyedImage from "react-chromakeyed-image";

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
    const stepState = { ...adCreationSteps };

    stepState.stepOne = false;
    stepState.stepTwo = true;

    setAdCreationSteps(stepState);
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
            <div
              style={{
                border: "5px solid black",
                width: "80%",
                margin: "auto",
                alignSelf: "center"
              }}
            >
              <img src={imageUri} alt="userImage" />
              <button onClick={handleUsePhoto}>Use Photo</button>
              <button onClick={handleTakeAnotherPhoto}>
                Take another photo
              </button>
            </div>
          ) : (
            <div
              style={{
                border: "5px solid black",
                width: "80%",
                margin: "auto",
                alignSelf: "center"
              }}
            >
              <Camera
                isFullscreen={false}
                onTakePhotoAnimationDone={handleTakePhoto}
              />
            </div>
          )}
          {imageUri ? (
            <ReactChromakeyedImage
              src={imageUri}
              findColor="#57ff52"
              replaceColor="#00ff001C"
              tolerance={20}
            />
          ) : null}
          <canvas id="c1" width="1920" height="1080"></canvas>
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
    </div>
  );
}
