import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';
import Dashboard from "./Components/Dashboard/Dashboard.js";

function App() {
  const [user, SetUser] = useState({
    loggedIn: true,
    seller: false,
    balance: 100,
    
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={user.loggedIn}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
