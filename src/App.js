import "./App.css";
import TextArea from "./components/TextArea";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#032242";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    
    <BrowserRouter>
      <Routes>
    <Navbar title={"Text Utils"} mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
        <Route  path="/" element={<TextArea
            heading={"Enter text here"}
            mode={mode}
            toggleMode={toggleMode}
            showAlert={showAlert}
          />} />
        <Route path="about/*" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
