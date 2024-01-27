import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';
import Dashboard from "./Components/Dashboard/Dashboard.js";

function App() {
  const [user, SetUser] = useState({
    loggedIn: false,
    seller: true,
    balance: 100,
    
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={user.loggedIn}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          {user.seller ? (<Route path="dashboard" element={<Dashboard />} />) : <></>}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
