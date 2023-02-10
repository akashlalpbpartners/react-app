import React from "react";
const SideMenu = (props) => {
  function handleClick(e) {
    // Changing toggle menu state
    props.setToggleMenu(e.target.id);
  }
  return (
    <>
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab">
        <button
          className={`nav-link ${
            props.toggleMenu === "basic-info" ? "active" : ""
          }`}
          id="basic-info"
          type="button"
          onClick={handleClick}
        >
          Basic Information <span>*</span>
        </button>
        <button
          className={`nav-link ${
            props.toggleMenu === "bank-info" ? "active" : ""
          }`}
          id="bank-info"
          type="button"
          onClick={handleClick}
        >
          Bank Information <span>*</span>
        </button>
        <button
          className={`nav-link ${
            props.toggleMenu === "kyc-doc" ? "active" : ""
          }`}
          id="kyc-doc"
          type="button"
          onClick={handleClick}
        >
          KYC Documents <span>*</span>
        </button>
      </div>
    </>
  );
};

export default SideMenu;
