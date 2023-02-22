import React, { useState, useContext } from "react";
import cloud_upload from "./../../images/cloud-upload.svg";
import axios from "axios";
import userContext from "../../Context/userContext";

const KycInfo = () => {
  const context = useContext(userContext);
  const { user } = context;
  const [panCard, setPanCard] = useState(null);
  const [cancelCheque, setCancelCheque] = useState(null);
  const [addressProof, setAddressProof] = useState(null);
  const [highestEducation, setHighestEducation] = useState(null);
  const [partnerPhoto, setPartnerPhoto] = useState(null);
  const [msmeCertificate, setMsmeCertificate] = useState(null);
  const [gstCertificate, setGstCertificate] = useState(null);
  const [panCardName, setPanCardName] = useState("");
  const [cancelChequeName, setCancelChequeName] = useState("");
  const [addressProofName, setAddressProofName] = useState("");
  const [highestEducationName, setHighestEducationName] = useState("");
  const [partnerPhotoName, setPartnerPhotoName] = useState("");
  const [msmeCertificateName, setMsmeCertificateName] = useState("");
  const [gstCertificateName, setGstCertificateName] = useState("");
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");

  const handleReset = () => {
    setMessage("");
    setMessageStyle("");
    setPanCard(null);
    setPanCardName("");
    setCancelCheque(null);
    setCancelChequeName("");
    setAddressProof(null);
    setAddressProofName("");
    setHighestEducation(null);
    setHighestEducationName("");
    setPartnerPhoto(null);
    setPartnerPhotoName("");
    setMsmeCertificate(null);
    setMsmeCertificateName("");
    setGstCertificate(null);
    setGstCertificateName("");
  };

  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append("CustomerID", user[0].ID);
    formdata.append("PanCard", panCard);
    formdata.append("CancelCheque", cancelCheque);
    formdata.append("AddressProof", addressProof);
    formdata.append("HighestEducation", highestEducation);
    formdata.append("PartnerPhoto", partnerPhoto);
    formdata.append("MSMECertificate", msmeCertificate);
    formdata.append("GSTCertificate", gstCertificate);
    await axios
      .post("http://localhost:3001/details/kycdocuments", formdata)
      .then((response) => {
        handleReset();
        setMessage(response.data.msg);
        setMessageStyle("my-input");
      });
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
          <div id="message" className={messageStyle}>
            {message}
          </div>
          <div className="row">
            <form>
              <div className="col-md-12">
                <input
                  type="file"
                  onChange={(e) => {
                    setPanCardName(e.target.files[0].name);
                    setPanCard(e.target.files[0]);
                  }}
                  id="pancard"
                  hidden
                />
                <label htmlFor="pancard">
                  <img src={cloud_upload} alt="" /> Pan Card
                </label>
                <span
                  id="pan_card_file"
                  className={panCardName ? "my-input m-3" : ""}
                >
                  {panCardName}{" "}
                </span>
              </div>
              <div className="col-md-12">
                <input
                  type="file"
                  id="cancelcheque"
                  onChange={(e) => {
                    setCancelChequeName(e.target.files[0].name);
                    setCancelCheque(e.target.files[0]);
                  }}
                  hidden
                />
                <label htmlFor="cancelcheque">
                  <img src={cloud_upload} alt="" /> Cancel Cheque
                </label>
                <span
                  id="cancel-cheque_file"
                  className={cancelChequeName ? "my-input m-3" : ""}
                >
                  {cancelChequeName}{" "}
                </span>
              </div>
              <div className="col-md-12">
                <input
                  type="file"
                  id="addressproof"
                  onChange={(e) => {
                    setAddressProofName(e.target.files[0].name);
                    setAddressProof(e.target.files[0]);
                  }}
                  hidden
                />
                <label htmlFor="addressproof">
                  <img src={cloud_upload} alt="" /> Address Proof
                </label>
                <span
                  id="address_proof_file"
                  className={addressProofName ? "my-input m-3" : ""}
                >
                  {addressProofName}{" "}
                </span>
              </div>
              <div className="col-md-12">
                <input
                  type="file"
                  id="highesteducation"
                  onChange={(e) => {
                    setHighestEducationName(e.target.files[0].name);
                    setHighestEducation(e.target.files[0]);
                  }}
                  hidden
                />
                <label htmlFor="highesteducation">
                  <img src={cloud_upload} alt="" /> Highest Education
                </label>
                <span
                  id="highest_education_file"
                  className={highestEducationName ? "my-input m-3" : ""}
                >
                  {highestEducationName}{" "}
                </span>
              </div>
              <div className="col-md-12">
                <input
                  type="file"
                  id="partnerphoto"
                  onChange={(e) => {
                    setPartnerPhotoName(e.target.files[0].name);
                    setPartnerPhoto(e.target.files[0]);
                  }}
                  hidden
                />
                <label htmlFor="partnerphoto">
                  <img src={cloud_upload} alt="" /> Partner Photo
                </label>
                <span
                  id="partner_photo_file"
                  className={partnerPhotoName ? "my-input m-3" : ""}
                >
                  {partnerPhotoName}{" "}
                </span>
              </div>
              <div className="col-md-12">
                <input
                  type="file"
                  id="msmecertificate"
                  onChange={(e) => {
                    setMsmeCertificateName(e.target.files[0].name);
                    setMsmeCertificate(e.target.files[0]);
                  }}
                  hidden
                />
                <label htmlFor="msmecertificate">
                  <img src={cloud_upload} alt="" /> MSME Certificate
                </label>
                <span
                  id="msmecertificate_file"
                  className={msmeCertificateName ? "my-input m-3" : ""}
                >
                  {msmeCertificateName}{" "}
                </span>
              </div>
              <div className="col-md-12">
                <input
                  type="file"
                  id="gstcertificate"
                  onChange={(e) => {
                    setGstCertificateName(e.target.files[0].name);
                    setGstCertificate(e.target.files[0]);
                  }}
                  hidden
                />
                <label htmlFor="gstcertificate">
                  <img src={cloud_upload} alt="" /> GST Certificate
                </label>
                <span
                  id="gstcertificate_file"
                  className={gstCertificateName ? "my-input m-3" : ""}
                >
                  {gstCertificateName}{" "}
                </span>
              </div>
              <button
                type="reset"
                className="btn btn-warning m-2"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default KycInfo;
