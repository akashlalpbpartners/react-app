import React, { useState, useEffect } from "react";
const FinancialServicesNavbar = (props) => {
  // const [prodlist, setProdlist] = useState([]);
  // useEffect(() => {
  //   loadSubProduct();
  // }, [prodlist]);
  // const loadSubProduct = async () => {
  //   await fetch(
  //     `http://localhost:3001/product/readsubproducts/${props.ToggleSubForm}`,
  //     {
  //       method: "POST",
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setProdlist(data));
  // };
  function handleClick(e) {
    // Changing toggle menu state
    props.setToggleSubForm(e.target.id);
  }

  return (
    <>
      <ul className="nav nav-pills flex-column" id="pills-tab" role="tablist">
        {/* {Object.entries(subProdArray).map(([value, key]) => {
          console.log("hello");
        })} */}
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              // props.ToggleSubForm === value.id ? "active" : ""
              props.ToggleSubForm === "1" ? "active" : ""
              }`}
            id="1"
            type="button"
            onClick={handleClick}
          >
            {/* {value.name} */}
            <i class="fa fa-home" aria-hidden="true"></i> Personal Loan
          </button>
        </li>
        {/* })} */}
        {/* <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
                props.ToggleSubForm === "creditcard" ? "active" : ""
              }`}
            id="creditcard"
            type="button"
            onClick={handleClick}
          >
            Credit Card
          </button>
        </li> */}
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${props.ToggleSubForm === "2" ? "active" : ""
              }`}
            id="2"
            type="button"
            onClick={handleClick}
          >
            <i class="fa fa-home" aria-hidden="true"></i> Home Loan
          </button>
        </li>
        {/* <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
                props.ToggleSubForm === "microloan" ? "active" : ""
              }`}
            id="microloan"
            type="button"
            onClick={handleClick}
          >
            Micro Loan
          </button>
        </li> */}
        {/* <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
                props.ToggleSubForm === "education" ? "active" : ""
              }`}
            id="education"
            type="button"
            onClick={handleClick}
          >
            Education
          </button>
        </li> */}
        {/* <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
                props.ToggleSubForm === "mutualfunds" ? "active" : ""
              }`}
            id="mutualfunds"
            type="button"
            onClick={handleClick}
          >
            Mutual Funds
          </button>
        </li> */}
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${props.ToggleSubForm === "3" ? "active" : ""
              }`}
            id="3"
            type="button"
            onClick={handleClick}
          >
            <i class="fa fa-home" aria-hidden="true"></i> Business Loan
          </button>
        </li>
      </ul>
    </>
  );
};
export default FinancialServicesNavbar;
