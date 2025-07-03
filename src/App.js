import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Progressbar } from './components/progressbar/Progressbar';
import { Personalinformation } from './components/personalinformation/Personalinformation';
import { Previewanddownload } from './components/previewanddownload/Previewanddownload';
import { Templateselection } from './components/templateselection/Templateselection';
import { Experience } from './components/experience/Experience';
import { useState } from 'react';

function App() {
  const[showExperience,setShowExperience]=useState(false)
  const[showPersonalInformation,setShowPersonalInformation]=useState(true)
  const[showPreviewAndDownload,setShowPreviewAndDownload]=useState(false)
  const[templateSelection,setShowTemplateSelection]=useState(false)
  return (
    <div>
    <Header/>
    <Progressbar/>
    {showExperience && <Experience/>}
    
    {showPersonalInformation  && <Personalinformation currentStep={setShowPersonalInformation} nextStep={setShowExperience}/>}
    {showPreviewAndDownload &&<Previewanddownload/>}
    {templateSelection && <Templateselection/>}

    </div>
  );
  
}

export default App;
