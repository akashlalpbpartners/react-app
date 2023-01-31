import React from "react";
import Field from "./InputField";
const BasicInfo = () => {
  const placeholder = [
    "Enter Name here",
    "Enter Name here",
    "91787672617",
    "Enter here",
    "Enter here",
    "17/02/1990",
    "Enter here",
    "110096",
  ];
  const labelText = [
    "Name as per PAN",
    "Father’s name",
    "Mobile Number",
    "Email ID",
    "PAN Number",
    "Date of Birth",
    "Address",
    "pincode",
  ];

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
    "MSME Number": ["YES", "NO"],
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
            {placeholder.map((value, key) => (
              <>
                <Field.InputField
                  type={"text"}
                  className={"form-control"}
                  id={"floatingInput"}
                  placeholder={value}
                  htmlFor={"floatingInput"}
                  labelText={labelText[key]}
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
