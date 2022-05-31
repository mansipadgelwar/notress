import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Archive, Home, Trash, Label } from "./pages";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/label" element={<Label />} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
