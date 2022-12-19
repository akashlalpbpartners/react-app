import React from 'react'
import Header from './Components/Home/Header';
import LoginSignUpForm from './Components/Home/LoginSignUpForm';
import OutProducts from './Components/Home/OurProducts';
import WhatWeOffer from './Components/Home/WhatWeOffer';
import Footer from './Components/Home/Footer';

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <div className="product-with-bg">
                    <Header />
                    <div className="our-product">
                        <div className="container-fluid">
                            <div className="row row-reverse">
                                <OutProducts />
                                <LoginSignUpForm />
                            </div>
                        </div>
                    </div>
                </div>

                <WhatWeOffer />
                <Footer />

            </div>
        </>
    )
}

export default Home;