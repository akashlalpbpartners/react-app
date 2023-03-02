import React from "react";
import FinancialServicesNavbar from "./FinancialServiceNavbar";
import PersonalLoan from "./forms/PersonalLoan";
import PersonalLoanLeadDetails from "./Details/PersonalLoanLeadDetails";
import HomeLoan from "./forms/HomeLoan";
import BusinessLoan from "./forms/BusinessLoan";

import { useState } from "react";
const FinancialServices = (props) => {
  const [ToggleSubForm, setToggleSubForm] = useState("1");

  function renderElement(ToggleSubForm) {
    if (
      JSON.parse(localStorage.getItem("UserDetails")).FINCode !== "ADMIN@PBPTNR"
    ) {
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
          return <PersonalLoanLeadDetails />;
        }
      } else if (ToggleSubForm === "3") {
        if (props.togglePage === "leadrequest") {
          return <BusinessLoan ToggleSubForm={ToggleSubForm} />;
        } else {
          return <PersonalLoanLeadDetails />;
        }
      }
    } else {
      return <PersonalLoanLeadDetails />;
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
        {JSON.parse(localStorage.getItem("UserDetails")).FINCode !==
        "ADMIN@PBPTNR" ? (
          <>
            {props.togglePage === "leadrequest" ? (
              <>
                <div className="sub-services d-flex align-items-start">
                  <FinancialServicesNavbar
                    ToggleSubForm={ToggleSubForm}
                    setToggleSubForm={setToggleSubForm}
                  />
                  {renderElement(ToggleSubForm)}
                </div>
              </>
            ) : (
              <>
                <div className="sub-services d-flex align-items-start p-0">
                  {renderElement(ToggleSubForm)}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="sub-services d-flex align-items-start p-0">
              {renderElement(ToggleSubForm)}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default FinancialServices;
