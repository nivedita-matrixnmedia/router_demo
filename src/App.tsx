import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home";
import Login from "./Screens/Login";
import NavigationHelper from "./Utils/NavigationHelper";
import Registraion from "./Screens/Registration";
import Profile from "./Screens/MyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationHelper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registraion" element={<Registraion/>} />
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
