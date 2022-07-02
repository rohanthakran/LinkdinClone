import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import React, {useEffect} from "react"
import {useDispatch } from "react-redux"
import { loadUser } from './Actions/User';
function App() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(loadUser())
    console.log("The effect")
  },[])
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
