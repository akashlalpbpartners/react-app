import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import Info from "./Info";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
