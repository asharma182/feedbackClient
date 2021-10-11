import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Nav } from './navigations/nav';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from './routes'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes />
      </Router>
    </div>
  );
}

export default App;