import React from "react";

const InputField = (props) => {
  return (
    <div className="col-md-6">
      <div className="pb-form-floating mb-4">
        <input
          type={props.type}
          className={props.className}
          id={props.id}
          placeholder={props.placeholder}
        />
        <label htmlFor={props.htmlFor}>{props.labelText}</label>
      </div>
    </div>
  );
};

const SelectField = (props) => {
  return (
    <div className="col-md-6">
      <div className="pb-form-floating mb-4">
        <select className={props.className} id={props.id}>
          <option selected>{props.selectedValue}</option>
          {props.option.map((value, key) => (
            <option value={key}>{value}</option>
          ))}
        </select>
        <label htmlFor={props.htmlFor}>{props.labelText}</label>
      </div>
    </div>
  );
};
const RadioField = (props) => {
  return (
    <div className="col-md-6">
      <div className="custom-radio-btn mb-4">
        <h5>{props.heading}</h5>
        <div className="form-check form-check-inline checked">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id={props.id1}
            value={props.value1}
            checked
          />
          <label className="form-check-label" htmlFor={props.htmlFor1}>
            YES
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id={props.id2}
            value={props.value2}
          />
          <label className="form-check-label" htmlFor={props.htmlFor2}>
            NO
          </label>
        </div>
      </div>
    </div>
  );
};

const Functions = {
  InputField,
  SelectField,
  RadioField,
};
export default Functions;
