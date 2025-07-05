import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Progressbar } from './components/progressbar/Progressbar';
import { Personalinformation } from './components/personalinformation/Personalinformation';
import { Previewanddownload } from './components/previewanddownload/Previewanddownload';
import { Templateselection } from './components/templateselection/Templateselection';
import { Experience } from './components/experience/Experience';
import { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const[showExperience,setShowExperience]=useState(false)
  const[showPersonalInformation,setShowPersonalInformation]=useState(true)
  const[showPreviewAndDownload,setShowPreviewAndDownload]=useState(false)
  const[templateSelection,setShowTemplateSelection]=useState(false)
  const[stepNumber,setStepNumber]=useState(1)
  return (
    <div>
    <Header/>
    <Progressbar stepNumber={stepNumber}/>
    {showExperience && <Experience setStepNumber={setStepNumber} currentStep={setShowExperience} nextStep={setShowTemplateSelection} previousStep={setShowPersonalInformation}/>}
    
    {showPersonalInformation  && <Personalinformation currentStep={setShowPersonalInformation} nextStep={setShowExperience}/>}
    {showPreviewAndDownload &&<Previewanddownload currentStep={setShowPreviewAndDownload} previouStep={setShowTemplateSelection}/>}
    {templateSelection && <Templateselection currentStep={setShowTemplateSelection} nextStep={setShowPreviewAndDownload} previousStep={setShowExperience}/>}
    
    </div>
  );
  
}

export default App;
