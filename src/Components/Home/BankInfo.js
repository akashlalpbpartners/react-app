import React from "react";
import Field from "./InputField";
const bankInfo = () => {
  const selectBank = ["SBI", "HDFC"];
  const selectState = ["Delhi", "Goa", "Gujrat"];

  const placeholder = {
    "Account Holder Name": "Enter name here",
    "Account Number": "Enter here",
    "NEFT IFSC Code": "Enter here",
    "PAN Number": "Enter here",
    Pincode: "110096",
  };
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
            <Field.SelectField
              className={"form-select"}
              id={"floatingSelectGrid"}
              selectedValue={"Punjab national bank"}
              option={selectBank}
              htmlFor={"floatingSelectGrid"}
              labelText={"Bank Name"}
            />
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
            <Field.SelectField
              className={"form-select"}
              id={"floatingSelectGrid"}
              selectedValue={"Gurugram"}
              option={selectState}
              htmlFor={"floatingSelectGrid"}
              labelText={"Branch State"}
            />
            <Field.InputField
              type={"text"}
              className={"form-control"}
              id={"floatingInput"}
              placeholder={"Enter here"}
              htmlFor={"floatingInput"}
              labelText={"Branch Address"}
            />
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
