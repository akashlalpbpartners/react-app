import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import Kyc from "./kyc";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
