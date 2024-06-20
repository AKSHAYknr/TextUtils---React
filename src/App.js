import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(()=>{
      setAlert(null)
     },2000)
  }

  let toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  return (
    <Router>
      <Navbar tittle = "Text Analyzer" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<div className="container">
            <TextForm heading = "Enter Your Text To Analyze" mode={mode}/>
          </div>}>   
        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
