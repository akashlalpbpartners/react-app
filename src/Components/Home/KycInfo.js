import React from "react";
import Fields from "./InputField";
const KycInfo = () => {
  const uploadOption = {
    "Pan Card": [
      "assets/images/cloud-upload.svg",
      "show",
      "assets/images/attachment.svg",
      "Uploaded PAN card.png",
      "assets/images/close.svg",
    ],
    "Cancel Cheque": [
      "assets/images/cloud-upload.svg",
      "hide",
      "assets/images/attachment.svg",
      "No file choosen",
      "assets/images/close.svg",
    ],
    "Address Proof": [
      "assets/images/cloud-upload.svg",
      "hide",
      "assets/images/attachment.svg",
      "No file choosen",
      "assets/images/close.svg",
    ],
    "Highest Education": [
      "assets/images/cloud-upload.svg",
      "hide",
      "assets/images/attachment.svg",
      "No file choosen",
      "assets/images/close.svg",
    ],
    "Partner Photo": [
      "assets/images/cloud-upload.svg",
      "hide",
      "assets/images/attachment.svg",
      "No file choosen",
      "assets/images/close.svg",
    ],
    "MSME Certificate": [
      "assets/images/cloud-upload.svg",
      "hide",
      "assets/images/attachment.svg",
      "No file choosen",
      "assets/images/close.svg",
    ],
    "GST Certificate": [
      "assets/images/cloud-upload.svg",
      "hide",
      "assets/images/attachment.svg",
      "No file choosen",
      "assets/images/close.svg",
    ],
  };
  return (
    <>
      <div
        className="tab-pane fade"
        id="kyc-doc"
        role="tabpanel"
        aria-labelledby=""
      >
        <div className="container custom-choose-file">
          {Object.entries(uploadOption).map(([value, key]) => (
            <>
              <Fields.UploadField
                img={key[0]}
                labelText={value}
                className={key[1]}
                attchedImg={key[2]}
                markerText={key[3]}
                closeImg={key[4]}
              />
            </>
          ))}
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
