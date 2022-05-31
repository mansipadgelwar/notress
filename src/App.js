import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags/:tagId" element={<Label />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        {/* <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
