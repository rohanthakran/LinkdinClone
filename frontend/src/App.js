import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';
import Login from './components/Login';
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import Message from "./components/Messaging/Message";
import Mynetwork from "./components/Network/Mynetwork";
import Notification from "./components/Notification/Notification";
import Signin from "./components/Signin/Signin";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} ></Route>
          <Route  exact path='/home' element={<Home/>} > </Route>
          <Route  exact path='/mynetwork' element={<Mynetwork/>} > </Route>
          <Route  exact path='/mymessage' element={<Message/>} > </Route>
          <Route  exact path='/myjobs' element={<Jobs/>} > </Route>
          <Route  exact path='/mynotication' element={<Notification/>} > </Route>
          <Route  exact path='/signin' element={<Signin/>} > </Route>
          <Route  exact path='/myprofile' element={<Profile/>} > </Route>



        </Routes>
      </Router>
    </div>
  );
}

export default App;
