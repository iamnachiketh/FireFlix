import React,{useState} from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {
  Routes,
  Route
} from "react-router-dom";
import ProfileScreen from './screens/ProfileScreen';
import Router from './Router';
import { useNavigate } from 'react-router-dom';
import Login from './screens/Login';

function App() {
  const [res,setRes]=useState(false);
  const navigate=useNavigate();
  return (
    <div className="App">
        {!res? (
          <Login/>
        ):(
          <Routes>
          <Route  path="/" element={<HomeScreen />}>
          </Route>
          <Route path='/profile' element={<ProfileScreen/>}>
            </Route> 
         </Routes>
        ) }
    </div>
  );
}

export default App;
