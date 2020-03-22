import React, { useState, useEffect } from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Button from "@material-ui/core/Button";
import Personalization from "./Admin/Personalization";
import PatientsGrid from "./Admin/PatientsGrid";
import Signout from "./Signout";
import AdBuilding from "./Admin/AdBuilding";
import { filterImage } from "../imageTransformer";
import Next from "./Next";
import { makeStyles } from "@material-ui/core/styles";
import personalImage from "../assets/images/photo_2020-03-14_10-52-10.jpg";

const useStyles = makeStyles({
  container: {
    height: "100%",
    maxHeight: "100vh",
    background: "#ad5389" /* fallback for old browsers */,
    background:
      " -webkit-linear-gradient(to right, #ad5389, #3c1053)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #ad5389, #3c1053)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  image: {
    width: "100%",
    height: "-webkit-fill-available",
    objectFit: "contain"
  }
});

export default function AdminScreen() {
  const styles = useStyles();
  const [imageUri, setImageUri] = useState(null);
  const [templateImage, setTemplateImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPatient, setSelectedPatientId] = useState(null);
  const [selectedPersonalization, setSelectedPersonalizationId] = useState(
    null
  );
  const [signature, setSignature] = useState();

  const [adCreationSteps, setAdCreationSteps] = useState({
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
    stepFive: false
  });

  // useEffect(() => {
  //   setTemplateImage(personalImage);
  //   const filteredImageUri = filterImage();
  //   setImageUri(filteredImageUri);
  // }, []);

  function handleTakePhoto(dataUri) {
    setTemplateImage(dataUri);
    const filteredImageUri = filterImage();
    setImageUri(filteredImageUri);
  }

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

  const handleTakeAnotherPhoto = () => {
    setImageUri(null);
  };

  const handlePatientClick = patient => {
    setSelectedPatientId(patient);
  };

  const handlePersonalizationClick = personalization => {
    setSelectedPersonalizationId(personalization);
  };

  const stepDisplay = () => {
    const stepState = { ...adCreationSteps };

    if (stepState.stepOne) {
      return (
        <>
          {imageUri ? (
            <div>
              <img src={imageUri} className={styles.image} alt="userImage" />
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
              isDisplayStartCameraError={false}
            />
          )}
          <img
            src={templateImage}
            style={{ display: "none" }}
            alt="template"
            id="user-image"
          />
          <canvas id="myCanvas" style={{ display: "none" }}></canvas>
        </>
      );
    } else if (stepState.stepTwo) {
      console.log("[SelectedPatientAdmin]", selectedPatient);
      return (
        <PatientsGrid
          handlePatientClick={handlePatientClick}
          selectedPatientId={selectedPatient ? selectedPatient.id : null}
        />
      );
    } else if (stepState.stepThree) {
      console.log("[SelectedPersonalizationAdmin]", selectedPersonalization);
      return (
        <Personalization
          handlePersonalizationClick={handlePersonalizationClick}
          selectedPersonalizationId={
            selectedPersonalization ? selectedPersonalization.id : null
          }
          setSignatureHandler={setSignature}
        />
      );
    } else if (stepState.stepFour) {
      return (
        <AdBuilding
          patient={selectedPatient}
          personalization={selectedPersonalization}
          signature={signature}
          userImage={imageUri}
        />
      );
    }
  };

  return (
    <div className={styles.container}>
      {stepDisplay()}
      <Next onButtonClick={moveToNextStep} />
    </div>
  );
}
