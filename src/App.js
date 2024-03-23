import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//babel compiles JSX down to React.createElement() calls
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
    }, 3000);
  };

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar title="Piyush" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="contanier my-3">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Welcome" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
