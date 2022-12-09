import React,{useState} from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const [res,setRes]=useState(null);

  return (
    <div className="App">
        {!res? (
          <Login setRes={setRes}/>
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
