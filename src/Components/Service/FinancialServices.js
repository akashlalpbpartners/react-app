import React from "react";
import FinancialServicesNavbar from "./FinancialServiceNavbar";
import PersonalLoan from "./forms/PersonalLoan";
import PersonalLoanLeadDetails from "./Details/PersonalLoanLeadDetails";
import HomeLoan from "./forms/HomeLoan";
import HomeLoanLeadDetails from "./Details/HomeLoanLeadDetails";
import BusinessLoan from "./forms/BusinessLoan";
import BusinessLoanLeadDetails from "./Details/BusinessLoanLeadDetails";

import { useState } from "react";
const FinancialServices = (props) => {
  const [ToggleSubForm, setToggleSubForm] = useState("1");
  function renderElement(ToggleSubForm) {
    if (ToggleSubForm === "1") {
      if (props.togglePage === "leadrequest") {
        return <PersonalLoan ToggleSubForm={ToggleSubForm} />;
      } else {
        return <PersonalLoanLeadDetails />;
      }
    } else if (ToggleSubForm === "2") {
      if (props.togglePage === "leadrequest") {
        return <HomeLoan ToggleSubForm={ToggleSubForm} />;
      } else {
        return <HomeLoanLeadDetails />;
      }
    } else if (ToggleSubForm === "3") {
      if (props.togglePage === "leadrequest") {
        return <BusinessLoan ToggleSubForm={ToggleSubForm} />;
      } else {
        return <BusinessLoanLeadDetails />;
      }
    }
  }
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="financial-services"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div className="sub-services">
          <FinancialServicesNavbar
            ToggleSubForm={ToggleSubForm}
            setToggleSubForm={setToggleSubForm}
          />

          {renderElement(ToggleSubForm)}
        </div>
      </div>
    </>
  );
};
export default FinancialServices;
