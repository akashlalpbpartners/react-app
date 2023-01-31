import React from "react";
import Field from "./InputField";
const BasicInfo = () => {
  const placeholder = {
    "Name as per PAN": "Enter Name here",
    "Father’s name": "Enter Name here",
    "Mobile Number": "91787672617",
    "Email ID": "Enter here",
    "PAN Number": "Enter here",
    "Date of Birth": "17/02/1990",
    Address: "Enter here",
    Pincode: "110096",
  };

  const selectFields = {
    State: ["Delhi", "Goa", "Gujrat"],
    City: ["Delhi", "Goa", "Gujrat"],
  };
  const radioHeading = {
    "GST Number": [
      "inlineRadio1",
      "inlineRadio2",
      "option1",
      "option2",
      "inlineRadio1",
      "inlineRadio2",
    ],
    "MSME Number": [
      "inlineRadio1",
      "inlineRadio2",
      "option1",
      "option2",
      "inlineRadio1",
      "inlineRadio2",
    ],
  };
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
            {Object.entries(placeholder).map(([value, key]) => (
              <>
                <Field.InputField
                  type={"text"}
                  className={"form-control"}
                  id={"floatingInput"}
                  placeholder={key}
                  htmlFor={"floatingInput"}
                  labelText={value}
                />
              </>
            ))}
            {Object.entries(selectFields).map(([value, key]) => (
              <>
                <Field.SelectField
                  className={"form-select"}
                  id={"floatingSelectGrid"}
                  selectedValue={value}
                  option={key}
                  htmlFor={"floatingSelectGrid"}
                  labelText={value}
                />
              </>
            ))}
            {Object.entries(radioHeading).map(([value, key]) => (
              <>
                <Field.RadioField
                  heading={value}
                  id1={key[0]}
                  id2={key[1]}
                  value1={key[2]}
                  value2={key[3]}
                  htmlFor1={key[4]}
                  htmlFor2={key[5]}
                />
              </>
            ))}
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
