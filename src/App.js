import React, { useContext } from "react";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import Info from "./Info";
import ServiceIndex from "./Components/Service/index";
import userContext from "./Context/userContext";
function App() {
  const context = useContext(userContext);
  const { userToken } = context;
  return (
    <>
      <Routes>
        <Route path="/" element={userToken ? <ServiceIndex /> : <Home />} />
        <Route path="/info" element={userToken ? <Info /> : <Home />} />
        <Route
          path="/service"
          element={userToken ? <ServiceIndex /> : <Home />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
