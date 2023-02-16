const FinancialServicesNavbar = (props) => {
  function handleClick(e) {
    // Changing toggle menu state
    props.setToggleSubForm(e.target.id);
    console.log(props.ToggleSubForm)
  }
  return (
    <>
      <ul className="nav second nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              props.ToggleSubForm === "personalloan" ? "active" : ""
            }`}
            id="personalloan"
            type="button"
            onClick={handleClick}
          >
            Personal Loan
          </button>
        </li>
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
            className={`nav-link ${
                props.ToggleSubForm === "homeloan" ? "active" : ""
              }`}
            id="homeloan"
            type="button"
            onClick={handleClick}
          >
            Home Loan
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
            className={`nav-link ${
                props.ToggleSubForm === "businessloan" ? "active" : ""
              }`}
            id="businessloan"
            type="button"
            onClick={handleClick}
          >
            Business Loan
          </button>
        </li>
      </ul>
    </>
  );
};
export default FinancialServicesNavbar;
