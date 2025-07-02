import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Progressbar } from './components/progressbar/Progressbar';
import { Personalinformation } from './components/personalinformation/Personalinformation';
import { Previewanddownload } from './components/previewanddownload/Previewanddownload';
import { Templateselection } from './components/templateselection/Templateselection';
import { Experience } from './components/experience/Experience';

function App() {
  return (
    <div>
    <Header/>
    <Progressbar/>
    <Experience/>
    <Personalinformation/>
    <Previewanddownload/>
    <Templateselection/>

    </div>
  );
  
}

export default App;
