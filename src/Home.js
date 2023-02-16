import React, { useState } from "react";
import Header from "./Components/Home/Header";
import LoginSignUpForm from "./Components/Home/LoginSignUpForm";
import RegisterForm from "./Components/Home/RegisterForm";
import OutProducts from "./Components/Home/OurProducts";
import WhatWeOffer from "./Components/Home/WhatWeOffer";
import Footer from "./Components/Home/Footer";

const Home = () => {
  const [toggleForm, setToggleForm] = useState(true);

  return (
    <>
      <div className="wrapper">
        <div className="product-with-bg">
          <Header setToggleForm={setToggleForm} />
          <div className="our-product">
            <div className="container-fluid">
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
