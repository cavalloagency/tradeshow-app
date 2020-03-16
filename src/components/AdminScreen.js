import React, { useState, useEffect } from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Button from "@material-ui/core/Button";
import Personalization from "./Admin/Personalization";
import PatientsGrid from "./Admin/PatientsGrid";
import Signout from "./Signout";
import AdBuilding from "./Admin/AdBuilding";
import { filterImage } from "../imageTransformer";
import personalImage from "../assets/images/photo_2020-03-14_10-52-10.jpg";
import Next from "./Next";

export default function AdminScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [templateImage, setTemplateImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedPersonalization, setSelectedPersonalization] = useState(null);

  const [adCreationSteps, setAdCreationSteps] = useState({
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
    stepFive: false
  });

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    setTemplateImage(dataUri);
    const filteredImageUri = filterImage();
    setImageUri(filteredImageUri);
  }

  useEffect(() => {
    setTemplateImage(personalImage);
    const filteredImageUri = filterImage();
    setImageUri(filteredImageUri);
  }, []);

  const moveToNextStep = () => {
    const stepState = { ...adCreationSteps };
    switch (currentStep) {
      case 0: {
        stepState.stepOne = false;
        stepState.stepTwo = true;
        setAdCreationSteps(stepState);
        setCurrentStep(1);
        break;
      }

      case 1: {
        stepState.stepTwo = false;
        stepState.stepThree = true;
        setAdCreationSteps(stepState);
        setCurrentStep(2);
        break;
      }
      case 2: {
        stepState.stepThree = false;
        stepState.stepFour = true;
        setAdCreationSteps(stepState);
        setCurrentStep(3);
        break;
      }
      case 3: {
        stepState.stepFour = false;
        stepState.stepFive = true;
        setAdCreationSteps(stepState);
        setCurrentStep(4);
        break;
      }
      default: {
        return;
      }
    }
  };

  const handleStartAgainClick = () => {
    const stepState = { ...adCreationSteps };
    stepState.stepOne = true;
    stepState.stepTwo = false;
    stepState.stepThree = false;
    stepState.stepFour = false;
    stepState.stepFive = false;
    setAdCreationSteps(stepState);
    setCurrentStep(0);
  };

  // const handleUsePhoto = () => {
  //   const stepState = { ...adCreationSteps };

  //   stepState.stepOne = false;
  //   stepState.stepTwo = true;

  //   setAdCreationSteps(stepState);
  // };

  const handleTakeAnotherPhoto = () => {
    setImageUri(null);
  };

  const stepDisplay = () => {
    const stepState = { ...adCreationSteps };

    if (stepState.stepOne) {
      return (
        <div style={{ height: "100%" }}>
          {imageUri ? (
            <div>
              <img
                src={imageUri}
                style={{ width: "100%", height: "100vh" }}
                alt="userImage"
              />
              {/* <Button onClick={handleUsePhoto}>Use Photo</Button> */}
              <Button onClick={handleTakeAnotherPhoto}>
                Take another photo
              </Button>
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
            style={{ display: "none" }}
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
    <div style={{ height: "100vh", backgroundColor: "lightblue" }}>
      <Signout />
      <Button onClick={handleStartAgainClick}>Start Again</Button>
      {stepDisplay()}
      <Next onButtonClick={moveToNextStep} />
    </div>
  );
}
