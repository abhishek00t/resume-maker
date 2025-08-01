import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { Progressbar } from "./components/progressbar/Progressbar";
import { Personalinformation } from "./components/personalinformation/Personalinformation";
import { Previewanddownload } from "./components/previewanddownload/Previewanddownload";
import { Templateselection } from "./components/templateselection/Templateselection";
import { Experience } from "./components/experience/Experience";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Modalpopup } from "./components/utils/Modalpopup";

function App() {
  const [showExperience, setShowExperience] = useState(false);
  const [showPersonalInformation, setShowPersonalInformation] = useState(true);
  const [showPreviewAndDownload, setShowPreviewAndDownload] = useState(false);
  const [templateSelection, setShowTemplateSelection] = useState(false);
  const [stepNumber, setStepNumber] = useState(1);
  const [userDetail, setUserDetail] = useState({});
  const [showPopup, setPopup] = useState(false);
  const [templateName, setTemplateName] = useState("");
  return (
    <div>
      <Header />
      {templateName}
      <Progressbar stepNumber={stepNumber} />
      <div style={{ display: showExperience ? "block" : "none" }}>
        {" "}
        <Experience
          userDetail={userDetail}
          setUserDetail={setUserDetail}
          setStepNumber={setStepNumber}
          currentStep={setShowExperience}
          nextStep={setShowTemplateSelection}
          previousStep={setShowPersonalInformation}
        />
      </div>
      <div style={{ display: showPersonalInformation ? "block" : "none" }}>
        {" "}
        <Personalinformation
          setUserDetail={setUserDetail}
          setStepNumber={setStepNumber}
          currentStep={setShowPersonalInformation}
          nextStep={setShowExperience}
        />
      </div>
      <div style={{ display: showPreviewAndDownload ? "block" : "none" }}>
        <Previewanddownload
          userDetail={userDetail}
          setStepNumber={setStepNumber}
          currentStep={setShowPreviewAndDownload}
          previouStep={setShowTemplateSelection}
          stepNumber={stepNumber}
          template={templateName}
        />
      </div>
      <div style={{ display: templateSelection ? "block" : "none" }}>
        <Templateselection
          setStepNumber={setStepNumber}
          currentStep={setShowTemplateSelection}
          nextStep={setShowPreviewAndDownload}
          previousStep={setShowExperience}
          setTemplateName={setTemplateName}
        />
      </div>
      <Analytics />
      {showPopup && (
        <Modalpopup
          setPopup={setPopup}
          showPopup={showPopup}
          warning={"an error occured"}
        />
      )}
    </div>
  );
}

export default App;
