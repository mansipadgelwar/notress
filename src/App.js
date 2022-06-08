import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import {
  Archive,
  Home,
  Trash,
  Label,
  Logout,
  Login,
  Signup,
  LandingPage,
} from "./pages";
import { useAuth } from "./context";

function App() {
  const { isAuthorized } = useAuth();

  return (
    <div className="App">
      {isAuthorized && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/label" element={<Label />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
