import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home";
import Login from "./Screens/Login";
import NavigationHelper from "./Utils/NavigationHelper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationHelper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
