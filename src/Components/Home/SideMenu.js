import React from "react";
const SideMenu = (props) => {
  function handleClick(e) {
    props.setToggleMenu(e.target.id);
    console.log(props.toggleMenu);
  }
  return (
    <>
      <div
        className="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link active"
          id="basic-info"
          data-bs-toggle="pill"
          // data-bs-target="#basic-info"
          type="button"
          role="tab"
          // aria-controls="v-pills-basic"
          // aria-selected="true"
          onClick={handleClick}
        >
          Basic Information <span>*</span>
        </button>
        <button
          className="nav-link"
          id="bank-info"
          data-bs-toggle="pill"
          // data-bs-target="#bank-info"
          type="button"
          role="tab"
          // aria-controls="v-pills-bank"
          // aria-selected="true"
          onClick={handleClick}
        >
          Bank Information <span>*</span>
        </button>
        <button
          className="nav-link"
          id="kyc-doc"
          data-bs-toggle="pill"
          // data-bs-target="#kyc-doc"
          type="button"
          role="tab"
          // aria-controls="v-pills-kyc"
          // aria-selected="true"
          onClick={handleClick}
        >
          KYC Documents <span>*</span>
        </button>
      </div>
    </>
  );
};

export default SideMenu;
