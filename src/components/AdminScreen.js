import React, { useState, useEffect } from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Personalization from "./Admin/Personalization";
import PatientsGrid from "./Admin/PatientsGrid";
import Signout from "./Signout";
import AdBuilding from "./Admin/AdBuilding";
import { filterImage } from "../imageTransformer";

export default function AdminScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [templateImage, setTemplateImage] = useState(null);

  const [adCreationSteps, setAdCreationSteps] = useState({
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false
  });

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...

    setTemplateImage(dataUri);
    const filteredImageUri = filterImage();
    setImageUri(filteredImageUri);
  }

  const handleUsePhoto = () => {
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
            <div style={{ width: "80%", height: "80%" }}>
              <img src={imageUri} alt="userImage" />
              <button onClick={handleUsePhoto}>Use Photo</button>
              <button onClick={handleTakeAnotherPhoto}>
                Take another photo
              </button>
            </div>
          ) : (
            <Camera
              isFullscreen={true}
              onTakePhotoAnimationDone={handleTakePhoto}
              imageType={IMAGE_TYPES.PNG}
              imageCompression={0.97}
              isMaxResolution={true}
              idealResolution={{ width: 1920, height: 1080 }}
            />
          )}
          <img
            src={templateImage}
            style={{ width: "80%", height: "80%", display: "none" }}
            alt="template"
            id="user-image"
          />
          <canvas id="myCanvas" style={{ display: "none" }}></canvas>
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
    <div style={{ height: "100vh" }}>
      <Signout />
      <p>Test Message</p>
      {stepDisplay()}
    </div>
  );
}
