import React from "react";
import WhatWeOfferList from "../../Data/WhatWeOfferList";

const WhatWeOffer = () => {
  return (
    <>
      <div className="what-we-offer">
        <div className="container-fluid">
          <div className="row text-center">
            <h2 className="heading">What we offer</h2>
          </div>
        </div>
        <div className="offer-cards">
          {WhatWeOfferList.map((offer, key) => {
            return (
              <div className="offer-card" key={key}>
                <div>
                  <img src={offer.imgSrc} alt="" />
                </div>
                <div>
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
