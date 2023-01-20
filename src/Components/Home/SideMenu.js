import React from "react";
const SideMenu = () => {
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
          id=""
          data-bs-toggle="pill"
          data-bs-target="#basic-info"
          type="button"
          role="tab"
          aria-controls="v-pills-basic"
          aria-selected="true"
        >
          Basic Information <span>*</span>
        </button>
        <button
          className="nav-link"
          id=""
          data-bs-toggle="pill"
          data-bs-target="#bank-info"
          type="button"
          role="tab"
          aria-controls="v-pills-bank"
          aria-selected="false"
        >
          Bank Information <span>*</span>
        </button>
        <button
          className="nav-link"
          id=""
          data-bs-toggle="pill"
          data-bs-target="#kyc-doc"
          type="button"
          role="tab"
          aria-controls="v-pills-kyc"
          aria-selected="false"
        >
          KYC Documents <span>*</span>
        </button>
      </div>
    </>
  );
};

export default SideMenu;
