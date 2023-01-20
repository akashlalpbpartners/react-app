import Header from "./Components/Home/Header";
import Footer from "./Components/Home/Footer";
import BasicInfo from "./Components/Home/BasicInfo";
import BankInfo from "./Components/Home/BankInfo";
import KycInfo from "./Components/Home/KycInfo";
import SideMenu from "./Components/Home/SideMenu";

const Info = () => {
  return (
    <>
      <div className="wrapper">
        <div className="product-with-bg">
          <Header />
          <div id="kycForm">
            <div className="d-flex align-items-start">
              <SideMenu/>
              <div className="tab-content" id="v-pills-tabContent">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2 className="heading pt-4 pb-2">Complete your KYC</h2>
                  </div>
                </div>
                <BasicInfo/>
                <BankInfo/>
                <KycInfo/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Info;
