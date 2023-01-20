import React from "react";
const KycInfo = () => {
  return (
    <>
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
                <img src="assets/images/cloud-upload.svg" alt="" /> Pan Card
              </label>
              <span id="file-chosen">
                <img src="assets/images/attachment.svg" alt="" /> Uploaded PAN
                card.png <img src="assets/images/close.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="file" id="pan-card" hidden />
              <label htmlFor="pan-card">
                <img src="assets/images/cloud-upload.svg" alt="" /> Cancel
                Cheque
              </label>
              <span id="file-chosen" className="hide">
                <img src="assets/images/attachment.svg" alt="" /> No file
                choosen <img src="assets/images/close.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="file" id="pan-card" hidden />
              <label htmlFor="pan-card">
                <img src="assets/images/cloud-upload.svg" alt="" /> Address
                Proof
              </label>
              <span id="file-chosen" className="hide">
                <img src="assets/images/attachment.svg" alt="" /> No file
                choosen <img src="assets/images/close.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="file" id="pan-card" hidden />
              <label htmlFor="pan-card">
                <img src="assets/images/cloud-upload.svg" alt="" /> Highest
                Education
              </label>
              <span id="file-chosen" className="hide">
                <img src="assets/images/attachment.svg" alt="" /> No file
                choosen <img src="assets/images/close.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="file" id="pan-card" hidden />
              <label htmlFor="pan-card">
                <img src="assets/images/cloud-upload.svg" alt="" /> Partner
                Photo
              </label>
              <span id="file-chosen" className="hide">
                <img src="assets/images/attachment.svg" alt="" /> No file
                choosen <img src="assets/images/close.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="file" id="pan-card" hidden />
              <label htmlFor="pan-card">
                <img src="assets/images/cloud-upload.svg" alt="" /> MSME
                Certificate
              </label>
              <span id="file-chosen" className="hide">
                <img src="assets/images/attachment.svg" alt="" /> No file
                choosen <img src="assets/images/close.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="file" id="pan-card" hidden />
              <label htmlFor="pan-card">
                <img src="assets/images/cloud-upload.svg" alt="" /> GST
                Certificate
              </label>
              <span id="file-chosen" className="hide">
                <img src="assets/images/attachment.svg" alt="" /> No file
                choosen <img src="assets/images/close.svg" alt="" />
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
    </>
  );
};

export default KycInfo;
