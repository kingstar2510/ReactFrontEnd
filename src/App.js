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
import Detailthree from './components/Detailthree';
import Detailfour from './components/Detailfour';
import Register from './components/Register';
import Detailfive from './components/Detailfive';
import Detailsix from './components/Detailsix';
import Detailseven from './components/Detailseven';
import Detail8 from './components/Detail8';
import Detail9 from './components/Detail9';
import Detail10 from './components/Detail10';
import Detail11 from './components/Detail11';
import Detail12 from './components/Detail12';
import Detail13 from './components/Detail13';
import Detail14 from './components/Detail14';
import Detail15 from './components/Details15';
import Detail16 from './components/Detail16';
import NewLogin from './components/NewLogin';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/newLogin' element ={<NewLogin />} />
        <Route path='/detail2' element={<Detailtwo />} />
        <Route path='/detail3' element={<Detailthree />} />
        <Route path = '/detail4' element = {<Detailfour />} />
        <Route path='/register' element ={<Register />} />
        <Route path='/detail5' element={<Detailfive />} />
        <Route path='/detail6' element={<Detailsix />} />
        <Route path='/detail7' element={<Detailseven />} />
        <Route path='/detail8' element={<Detail8 />} />
        <Route path='/detail9' element={<Detail9 />} />
        <Route path='/detail10' element={<Detail10 />} />
        <Route path='/detail11' element={<Detail11 />} />
        <Route path='/detail12' element ={<Detail12 />} /> 
        <Route path='/detail13' element= {<Detail13 />} />
        <Route path='/detail14' element= {<Detail14 />} />
        <Route path='/detail15' element = {<Detail15 />} />
        <Route path='/detail16' element ={<Detail16 />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
