import React, { useState, useEffect, useContext } from "react";
import cloud_upload from "./../../images/cloud-upload.svg";
import axios from "axios";
import userContext from "../../Context/userContext";
import Cookies from "js-cookie";

const KycInfo = () => {
  const context = useContext(userContext);
  const { fetchKycInfo } = context;

  const [panCard, setPanCard] = useState(null);
  const [cancelCheque, setCancelCheque] = useState(null);
  const [addressProof, setAddressProof] = useState(null);
  const [highestEducation, setHighestEducation] = useState(null);
  const [partnerPhoto, setPartnerPhoto] = useState(null);
  const [msmeCertificate, setMsmeCertificate] = useState(null);
  const [gstCertificate, setGstCertificate] = useState(null);
  const [kycInfoValues, setKycInfoValues] = useState(
    JSON.parse(localStorage.getItem("KycDetails"))
  );
  const [panCardName, setPanCardName] = useState(
    kycInfoValues.length === 0 || kycInfoValues[0].PanCard === null
      ? ""
      : kycInfoValues[0].PanCard.split("/").pop()
  );
  const [cancelChequeName, setCancelChequeName] = useState(
    kycInfoValues.length === 0 || kycInfoValues[0].CancelCheque === null
      ? ""
      : kycInfoValues[0].CancelCheque.split("/").pop()
  );
  const [addressProofName, setAddressProofName] = useState(
    kycInfoValues.length === 0 || kycInfoValues[0].AddressProof === null
      ? ""
      : kycInfoValues[0].AddressProof.split("/").pop()
  );
  const [highestEducationName, setHighestEducationName] = useState(
    kycInfoValues.length === 0 || kycInfoValues[0].HighestEducation === null
      ? ""
      : kycInfoValues[0].HighestEducation.split("/").pop()
  );
  const [partnerPhotoName, setPartnerPhotoName] = useState(
    kycInfoValues.length === 0 || kycInfoValues[0].PartnerPhoto === null
      ? ""
      : kycInfoValues[0].PartnerPhoto.split("/").pop()
  );
  const [msmeCertificateName, setMsmeCertificateName] = useState(
    kycInfoValues.length === 0 || kycInfoValues[0].MSMECertificate === null
      ? ""
      : kycInfoValues[0].MSMECertificate.split("/").pop()
  );
  const [gstCertificateName, setGstCertificateName] = useState(
    kycInfoValues.length === 0 || kycInfoValues[0].GSTCertificate === null
      ? ""
      : kycInfoValues[0].GSTCertificate.split("/").pop()
  );
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");
  useEffect(() => {
    // setKycInfoValues(JSON.parse(localStorage.getItem("KycDetails")));
    setPanCardName(
      kycInfoValues.length === 0
        ? ""
        : kycInfoValues[0].PanCard.split("/").pop()
    );
    setCancelChequeName(
      kycInfoValues.length === 0
        ? ""
        : kycInfoValues[0].CancelCheque.split("/").pop()
    );
    setAddressProofName(
      kycInfoValues.length === 0
        ? ""
        : kycInfoValues[0].AddressProof.split("/").pop()
    );
    setHighestEducationName(
      kycInfoValues.length === 0
        ? ""
        : kycInfoValues[0].HighestEducation.split("/").pop()
    );
    setPartnerPhotoName(
      kycInfoValues.length === 0
        ? ""
        : kycInfoValues[0].PartnerPhoto.split("/").pop()
    );
    setMsmeCertificateName(
      kycInfoValues.length === 0
        ? ""
        : kycInfoValues[0].MSMECertificate.split("/").pop()
    );
    setGstCertificateName(
      kycInfoValues.length === 0
        ? ""
        : kycInfoValues[0].GSTCertificate.split("/").pop()
    );
  }, [kycInfoValues]);
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${JSON.parse(Cookies.get("userCookie")).Token}`,
    },
  };
  if (kycInfoValues.length !== 0) {
    fetch(`${kycInfoValues[0].PanCard}`, requestOptions)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        setPanCard(blob);
      });
  }
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
    formdata.append(
      "CustomerID",
      JSON.parse(Cookies.get("userCookie")).CustomerID
    );
    formdata.append("PanCard", panCard);
    formdata.append("CancelCheque", cancelCheque);
    formdata.append("AddressProof", addressProof);
    formdata.append("HighestEducation", highestEducation);
    formdata.append("PartnerPhoto", partnerPhoto);
    formdata.append("MSMECertificate", msmeCertificate);
    formdata.append("GSTCertificate", gstCertificate);
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(Cookies.get("userCookie")).Token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    await axios
      .post("http://localhost:3001/details/kycdocuments", formdata, config)
      .then((response) => {
        // handleReset();
        setMessage(response.data.msg);
        setMessageStyle("my-input");
        fetchKycInfo(JSON.parse(Cookies.get("userCookie")).CustomerID);
      })
      .catch((error) => {
        console.error(error);
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
