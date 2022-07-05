
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showElert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#313161';
      showElert("dark mode has been enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style = '#313161';
      showElert("light mode has been enabled", "Success");
    }

  }





  return (

    <>
    <Router>
      <Navbar title="Text converter" mode={mode} togglemode={togglemode} />
      {/* <Navbar title="taxtConverter"/> */}
      <Alert alert={alert} />
      <div className="container my-5 text-white text-center">
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
             <Textform heading="Enter the text you want to analyse" showElert={showElert} mode={mode} />
          </Route>
          </Switch>
      
      </div>
      </Router>



    </>

  );
}

export default App;
