import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  exact strict path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
