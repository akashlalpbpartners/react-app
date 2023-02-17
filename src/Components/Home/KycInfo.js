import React from "react";
import Fields from "./InputField";
import userContext from "../../Context/userContext";
import { useFormik } from "formik";
import { useContext } from "react";
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
  const handleSubmit = () => {
    registerKYCInfo();
  };

  async function registerKYCInfo(values) {
    console.log(values);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        CustomerID: 4,
        BankName: values.Bank,
        AccountHolderName: values.Account_holder_name,
        AccountNumber: values.Account_no,
        IfscCode: values.Ifsc_code,
        PanNumber: values.Pan_no,
        Pincode: values.Pincode,
        BranchState: values.Branch_state,
        BranchAddress: values.Branch_address,
      }),
    };
    console.log(requestOptions.body);
    await fetch("http://localhost:3001/details/bankinfo", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
      });
  }
  const context = useContext(userContext);
  const { ab } = context;
  console.log(ab);
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  onSubmit={handleSubmit}
                >
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
