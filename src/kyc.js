import Header from "./Components/Home/Header";
import Footer from "./Components/Home/Footer";

const Kyc = () => {
  return (
    <>
      <div className="wrapper">
        <div className="product-with-bg">
          <Header />
          <div id="kycForm">
            <div className="d-flex align-items-start">
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
              <div className="tab-content" id="v-pills-tabContent">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2 className="heading pt-4 pb-2">Complete your KYC</h2>
                  </div>
                </div>
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
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
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
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
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
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio3"
                            >
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
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio4"
                            >
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
                          <label htmlFor="floatingInput">
                            Account Holder Name
                          </label>
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
                          <label htmlFor="floatingSelectGrid">
                            Branch State
                          </label>
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
                <div
                  className="tab-pane fade"
                  id="kyc-doc"
                  role="tabpanel"
                  aria-labelledby=""
                >
                  <div className="container custom-choose-file">
                    <div className="row">
                      <div className="col-md-12">
                        <input type="file" id="pan-card" hidden />
                        <label htmlFor="pan-card">
                          <img src="assets/images/cloud-upload.svg" alt="" />{" "}
                          Pan Card
                        </label>
                        <span id="file-chosen">
                          <img src="assets/images/attachment.svg" alt="" />{" "}
                          Uploaded PAN card.png{" "}
                          <img src="assets/images/close.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="file" id="pan-card" hidden />
                        <label htmlFor="pan-card">
                          <img src="assets/images/cloud-upload.svg" alt="" />{" "}
                          Cancel Cheque
                        </label>
                        <span id="file-chosen" className="hide">
                          <img src="assets/images/attachment.svg" alt="" /> No
                          file choosen{" "}
                          <img src="assets/images/close.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="file" id="pan-card" hidden />
                        <label htmlFor="pan-card">
                          <img src="assets/images/cloud-upload.svg" alt="" />{" "}
                          Address Proof
                        </label>
                        <span id="file-chosen" className="hide">
                          <img src="assets/images/attachment.svg" alt="" /> No
                          file choosen{" "}
                          <img src="assets/images/close.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="file" id="pan-card" hidden />
                        <label htmlFor="pan-card">
                          <img src="assets/images/cloud-upload.svg" alt="" />{" "}
                          Highest Education
                        </label>
                        <span id="file-chosen" className="hide">
                          <img src="assets/images/attachment.svg" alt="" /> No
                          file choosen{" "}
                          <img src="assets/images/close.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="file" id="pan-card" hidden />
                        <label htmlFor="pan-card">
                          <img src="assets/images/cloud-upload.svg" alt="" />{" "}
                          Partner Photo
                        </label>
                        <span id="file-chosen" className="hide">
                          <img src="assets/images/attachment.svg" alt="" /> No
                          file choosen{" "}
                          <img src="assets/images/close.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="file" id="pan-card" hidden />
                        <label htmlFor="pan-card">
                          <img src="assets/images/cloud-upload.svg" alt="" />{" "}
                          MSME Certificate
                        </label>
                        <span id="file-chosen" className="hide">
                          <img src="assets/images/attachment.svg" alt="" /> No
                          file choosen{" "}
                          <img src="assets/images/close.svg" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="file" id="pan-card" hidden />
                        <label htmlFor="pan-card">
                          <img src="assets/images/cloud-upload.svg" alt="" />{" "}
                          GST Certificate
                        </label>
                        <span id="file-chosen" className="hide">
                          <img src="assets/images/attachment.svg" alt="" /> No
                          file choosen{" "}
                          <img src="assets/images/close.svg" alt="" />
                        </span>
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
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Kyc;
