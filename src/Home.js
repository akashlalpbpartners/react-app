import React, { useState } from "react";
import HeaderHome from "./Components/Home/HeaderHome";
import LoginSignUpForm from "./Components/Home/LoginSignUpForm";
import RegisterForm from "./Components/Home/RegisterForm";
import OutProducts from "./Components/Home/OurProducts";
import WhatWeOffer from "./Components/Home/WhatWeOffer";
import Footer from "./Components/Home/Footer";
import { Container } from "@mui/material";

const Home = () => {
  const [toggleForm, setToggleForm] = useState(true);

  return (
    <>
      <div className="wrapper">
        <div className="product-with-bg">
          <HeaderHome setToggleForm={setToggleForm} />
          <div className="our-product banner-bg">
            <div className="container">
              <div className="row row-reverse">
                <OutProducts />
                {toggleForm === true ? <LoginSignUpForm /> : <RegisterForm />}
              </div>
            </div>
          </div>
        </div>

        <WhatWeOffer />
        <Footer />
      </div>
    </>
  );
};

export default Home;
