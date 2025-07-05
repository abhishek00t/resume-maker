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

function App() {
  const [showExperience, setShowExperience] = useState(false);
  const [showPersonalInformation, setShowPersonalInformation] = useState(true);
  const [showPreviewAndDownload, setShowPreviewAndDownload] = useState(false);
  const [templateSelection, setShowTemplateSelection] = useState(false);
  const [stepNumber, setStepNumber] = useState(1);
  return (
    <div>
      <Header />
      <Progressbar stepNumber={stepNumber} />
      <div style={{ display: showExperience ? "block" : "none" }}>
        {" "}
        <Experience
          setStepNumber={setStepNumber}
          currentStep={setShowExperience}
          nextStep={setShowTemplateSelection}
          previousStep={setShowPersonalInformation}
        />
      </div>
      <div style={{ display: showPersonalInformation ? "block" : "none" }}>
        {" "}
        <Personalinformation
          setStepNumber={setStepNumber}
          currentStep={setShowPersonalInformation}
          nextStep={setShowExperience}
        />
      </div>
      <div style={{ display: showPreviewAndDownload ? "block" : "none" }}>
        <Previewanddownload
          setStepNumber={setStepNumber}
          currentStep={setShowPreviewAndDownload}
          previouStep={setShowTemplateSelection}
        />
      </div>
      <div style={{ display: templateSelection ? "block" : "none" }}>
        <Templateselection
          setStepNumber={setStepNumber}
          currentStep={setShowTemplateSelection}
          nextStep={setShowPreviewAndDownload}
          previousStep={setShowExperience}
        />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
