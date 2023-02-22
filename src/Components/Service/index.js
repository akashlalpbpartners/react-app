import "./../../styles/servicestyle.css";
import Header from "./ServiceHeader";
import Footer from "./Footer";
import OurServices from "./OurServices";
import FinancialServices from "./FinancialServices";
import RealEstate from "./RealEstate";
import { useState } from "react";
function ServiceIndex() {
  const [toggleMenu, setToggleMenu] = useState("financialservices");
  const [togglePage, setTogglePage] = useState("leadrequest");
  function renderElement(toggleMenu) {
    if (toggleMenu === "financialservices")
      return (
        <FinancialServices
          setToggleMenu={setToggleMenu}
          togglePage={togglePage}
        />
      );
    else
      return (
        <RealEstate setToggleMenu={setToggleMenu} togglePage={togglePage} />
      );
  }

  return (
    <>
      <div className="wrapper">
        <Header setTogglePage={setTogglePage} togglePage={togglePage} />
        <div className="services-with-bg">
          {/* <!-- Start Our Services Section --> */}
          <div className="container-fluid">
            <div className="row" style={{ paddingTop: "3ch" }}>
              <div className="services">
                {
                  <OurServices
                    setToggleMenu={setToggleMenu}
                    toggleMenu={toggleMenu}
                  />
                }
                <div className="tab-content" id="pills-tabContent">
                  {renderElement(toggleMenu)}
                </div>
              </div>
            </div>
          </div>
        </div>
        {<Footer />}
      </div>
      {/* </div> */}
    </>
  );
}
export default ServiceIndex;
