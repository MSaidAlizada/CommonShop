import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
