import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';
import Detailtwo from './components/Detailtwo';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/detail2' element={<Detailtwo />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
