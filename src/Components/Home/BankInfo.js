import React from "react";
const bankInfo = () => {
  return (
    <>
      <div
        className="tab-pane fade"
        id="bank-info"
        role="tabpanel"
        aria-labelledby=""
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option selected>Punjab national bank</option>
                  <option value="1">SBI</option>
                  <option value="2">HDFC</option>
                </select>
                <label htmlFor="floatingSelectGrid">Bank Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter name here"
                />
                <label htmlFor="floatingInput">Account Holder Name</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter here"
                />
                <label htmlFor="floatingInput">Account Number</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter here"
                />
                <label htmlFor="floatingInput">NEFT IFSC Code</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter here"
                />
                <label htmlFor="floatingInput">PAN Number</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="110096"
                />
                <label htmlFor="floatingInput">Pin Code</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option selected>Gurugram</option>
                  <option value="1">Delhi</option>
                  <option value="2">Goa</option>
                  <option value="3">Gujrat</option>
                </select>
                <label htmlFor="floatingSelectGrid">Branch State</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter here"
                />
                <label htmlFor="floatingInput">Branch Address</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button type="button" className="btn btn-primary">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default bankInfo;
