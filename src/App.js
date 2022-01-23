import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { Alerts } from './components/Alerts';
import React, { useState } from 'react';
import { About } from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alertMssg, setalertMssg] = useState(null);

  function handleModeChange(m) {
    setmode(m);

    m==="dark"?document.body.classList.remove("light-mode"):document.body.classList.remove("dark-mode")
    document.body.classList.add(`${m}-mode`)
  }
  function textConversionHandle(m) {
    console.log("Text conversion called")
    setalertMssg({ "show": m.show, "mssg": m.mssg })
    setTimeout(() => {
      setalertMssg({ "show": false, "mssg": "" })
    }, 1500);
  }

  return (<>
    {/* onModeChange={setmode(e.target.value)} */}
    <Router>
    <Navbar mode={mode} onModeChange={handleModeChange} title="Text Utilities" />
      <Routes>
        <Route exact path="/" element={<> 
        <Alerts show={alertMssg?.show}>{alertMssg?.mssg}</Alerts>
        <TextForm mode={mode} onTextConversion={textConversionHandle} heading="Enter your text to Analyze"></TextForm>
          </>}>
        </Route>
        <Route exact path="/about" element={<About mode={mode}/>}>
        </Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
