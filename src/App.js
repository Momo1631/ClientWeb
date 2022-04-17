import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import msb from "./components/msb.component";
import medtech from "./components/medtech.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br />
      
      <Route path="/check"  component={ medtech } />
      <Route path="/check"  component={ msb } />
      </div>
    </Router>
  );
}

export default App;
