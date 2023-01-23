import React from "react";
const BasicInfo = () => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="basic-info"
        role="tabpanel"
        aria-labelledby=""
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter Name here"
                />
                <label htmlFor="floatingInput">Name as per PAN</label>
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
                <label htmlFor="floatingInput">Father’s name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="91787672617"
                />
                <label htmlFor="floatingInput">Mobile Number</label>
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
                <label htmlFor="floatingInput">Email ID</label>
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
                  placeholder="17/02/1990"
                />
                <label htmlFor="floatingInput">Date of Birth</label>
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
                <label htmlFor="floatingInput">Address</label>
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
                <label htmlFor="floatingInput">Pincode</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option selected>Select State</option>
                  <option value="1">Delhi</option>
                  <option value="2">Goa</option>
                  <option value="3">Gujraj</option>
                </select>
                <label htmlFor="floatingSelectGrid">State</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-form-floating mb-4">
                <select
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option selected>Select City</option>
                  <option value="1">Delhi</option>
                  <option value="2">Goa</option>
                  <option value="3">Gujraj</option>
                </select>
                <label htmlFor="floatingSelectGrid">City</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-radio-btn mb-4">
                <h5>GST Number</h5>
                <div className="form-check form-check-inline checked">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    YES
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    NO
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-radio-btn mb-4">
                <h5>MSME number</h5>
                <div className="form-check form-check-inline checked">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                    checked
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    YES
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio4"
                    value="option4"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio4">
                    NO
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
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

export default BasicInfo;
