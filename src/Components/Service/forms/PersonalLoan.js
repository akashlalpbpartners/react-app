import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Check from "../../Home/checkUtility";
import userContext from "../../../Context/userContext";

const validationSchemaInput = Yup.object({
  CustomerMobile: Yup.number().required("Phone Number is required."),
  City: Yup.number().required("City is required."),
  LoanAmount: Yup.number().required("Loan amount is required."),
  NetMonthlyIncome: Yup.number().required("Monthly income is required."),
  EmploymentType: Yup.number().required("Employment type is required."),
});

const PersonalLoan = (props) => {
  const context = useContext(userContext);
  const { user, city, empType } = context;
  const [loanLeadDetails, setLoanLeadDetails] = useState([]);
  const [flag, setFlag] = useState(0);
  const [error, setError] = useState({
    firstNo: "",
    loanAmount: "",
  });
  const [otp, setOtp] = useState("");
  const [disableOn, setDisableOn] = useState(true);
  const [toggleShow, setToggleShow] = useState(false);

  useEffect(() => {
    if (loanLeadDetails.length === 0) fetchLeads();
    if (toggleShow === true) setInputField(otp);
  }, [loanLeadDetails]);
  const Token = JSON.parse(user).Token;
  const fetchLeads = async () => {
    const SubProductId = 1;
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `http://localhost:3001/product/readfinancialservices/${SubProductId}/${
        JSON.parse(Cookies.get("userCookie")).FINCode
      }`,
      requestOptions
    );
    const result = await response.json();
    setLoanLeadDetails(result);
    return result;
  };

  const cityList = [];
  Object.entries(city).map(([key, value]) => {
    return cityList.push([value.Id, value.City]);
  });
  const empTypeList = [];
  Object.entries(empType).map(([key, value]) => {
    return empTypeList.push([value.Id, value.EmploymentType]);
  });

  const formikInput = useFormik({
    initialValues: {
      CustomerMobile: "",
      City: "",
      LoanAmount: "",
      NetMonthlyIncome: "",
      EmploymentType: "",
    },
    validationSchema: validationSchemaInput,
    onSubmit: async (values) => {
      console.log("hello");
      // const isPresent = [];
      // loanLeadDetails.filter((row) => {
      //   if (row.CustomerMobile === parseInt(values.CustomerMobile))
      //     isPresent.push(row);
      //   return 0;
      // });
      // const requestOptions = {
      //   method: "POST",
      //   headers: {
      //     Authorization: `Bearer ${Token}`,
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     SubProductId: parseInt(props.ToggleSubForm),
      //     CustomerMobile: parseInt(values.CustomerMobile),
      //     CityId: values.City,
      //     LoanAmount: parseInt(values.LoanAmount),
      //     NetMonthlyIncome: parseInt(values.NetMonthlyIncome),
      //     EmploymentType: values.EmploymentType,
      //     FINCode: JSON.parse(Cookies.get("userCookie")).FINCode,
      //     GrossSales: 0,
      //     IsPresent: isPresent.length === 0 ? 0 : 1,
      //   }),
      // };
      // await fetch(
      //   "http://localhost:3001/product/insertfinancialservices",
      //   requestOptions
      // );
      // formikInput.handleReset();
    },
  });
  const handleMobileNumber = (e) => {
    let firstNumber = e.target.value[0];
    if (firstNumber < 5) setError("first");
    else setError("");
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  const handleLoanAmount = (e) => {
    if (e.target.value.length > e.target.maxLength) setError("Invalid Amount");
    else setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isPresent = [];
    loanLeadDetails.filter((row) => {
      if (row.CustomerMobile === parseInt(e.target[0].value))
        isPresent.push(row);
      return 0;
    });
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        SubProductId: parseInt(props.ToggleSubForm),
        CustomerMobile: parseInt(e.target[0].value),
        CityId: parseInt(e.target[1].value),
        LoanAmount: parseInt(e.target[2].value),
        NetMonthlyIncome: parseInt(e.target[3].value),
        EmploymentType: parseInt(e.target[4].value),
        FINCode: JSON.parse(Cookies.get("userCookie")).FINCode,
        GrossSales: 0,
        IsPresent: isPresent.length === 0 ? 0 : 1,
      }),
    };
    // await fetch(
    //   "http://localhost:3001/product/insertfinancialservices",
    //   requestOptions
    // );
    console.log(flag);
    e.target.reset();
    console.log(requestOptions.body);
  };

  const otpField = {
    1: ["field-1"],
    2: ["field-2"],
    3: ["field-3"],
    4: ["field-4"],
    5: ["field-5"],
    6: ["field-6"],
  };

  const setInputField = (otp) => {
    for (let i = 0; i < 6; i++) {
      if (i < otp.length)
        document.getElementById(`field-${i + 1}`).value = otp[i];
      else document.getElementById(`field-${i + 1}`).value = "";
    }
    let nextfield = "";
    if (otp.length <= 6) {
      if (otp.length !== 6)
        nextfield = document.querySelector(`input[id=field-${otp.length + 1}]`);
      else nextfield = document.querySelector(`input[id=field-${otp.length}]`);
    }
    if (nextfield === "null") return;
    nextfield.focus();
  };

  const handleChangeOtp = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.key === "Backspace") {
      setOtp(otp.substring(0, otp.length - 1));
    }
    if (
      otp.length <= 5 &&
      (e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "0")
    ) {
      let str = otp + e.key;
      setOtp(str);
      if (otp.length === 5) setDisableOn(false);
    }
  };
  ////////////////////////// Attribute dictionary //////////////////////////
  const inputField = {
    1: [
      "Mobile_no",
      "Mobile Number",
      "Enter Mobile Number",
      formikInput.values.Mobile_no,
      formikInput.touched.Mobile_no && Boolean(formikInput.errors.Mobile_no),
      formikInput.touched.Mobile_no && formikInput.errors.Mobile_no,
      false,
      [],
      formikInput.handleMobile,
    ],
    2: [
      "City",
      "City",
      "Enter City",
      formikInput.values.City,
      formikInput.touched.City && Boolean(formikInput.errors.City),
      formikInput.touched.City && formikInput.errors.City,
      true,
      cityList,
    ],
    3: [
      "Loan_amount_required",
      "Loan Amount Required",
      "Enter Loan amount required",
      formikInput.values.Loan_amount_required,
      formikInput.touched.Loan_amount_required &&
        Boolean(formikInput.errors.Loan_amount_required),
      formikInput.touched.Loan_amount_required &&
        formikInput.errors.Loan_amount_required,
      false,
      [],
      // handleLoanAmount,
    ],
    4: [
      "Net_monthly_income",
      "Net Monthly Income",
      "Enter Net monthly income",
      formikInput.values.Net_monthly_income,
      formikInput.touched.Net_monthly_income &&
        Boolean(formikInput.errors.Net_monthly_income),
      formikInput.touched.Net_monthly_income &&
        formikInput.errors.Net_monthly_income,
      false,
      [],
    ],
    5: [
      "Employment_type",
      "Employment Type",
      "Enter Employment type",
      formikInput.values.Employment_type,
      formikInput.touched.Employment_type &&
        Boolean(formikInput.errors.Employment_type),
      formikInput.touched.Employment_type && formikInput.errors.Employment_type,
      true,
      empTypeList,
    ],
  };

  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        <Box
          sx={{
            "& .MuiTextField-root": { m: "0.5ch 1.5ch 3ch", width: "40ch" },
          }}
          id="personal-info"
          role="tabpanel"
          aria-labelledby=""
        >
          <form
            className="container"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div
              className="tab-pane fade show active "
              id="personal-loan"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row">
                <div className="col-md-4">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="CustomerMoblie"
                      name="CustomerMoblie"
                      placeholder="Mobile Number"
                      maxLength={10}
                      onChange={handleMobileNumber}
                      onKeyDown={(evt) =>
                        ["e", "E", "+", "-"].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label htmlFor="floatingInput">Mobile Number</label>
                    {error === "first" ? (
                      <small className="invalid error_messages">
                        Invalid Mobile Number
                      </small>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="form-floating mb-3">
                    <select class="form-select" id="City" name="City" required>
                      <option selected>City</option>
                      {cityList.map((value, key) => (
                        <option name="City" key={key} value={value[0]}>
                          {value[1]}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="floatingInput">City</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="LoanAmount"
                      name="LoanAmount"
                      placeholder="Loan Amount"
                      maxLength={7}
                      onChange={handleLoanAmount}
                      onKeyDown={(evt) =>
                        ["e", "E", "+", "-"].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label htmlFor="loan_amount">Loan Amount</label>
                    {error === "Invalid Amount" ? (
                      <small className="invalid error_messages">
                        Invalid Loan Amount
                      </small>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="NetMonthlyIncome"
                      name="NetMonthlyIncome"
                      onChange={handleMobileNumber}
                      onKeyDown={(evt) =>
                        ["e", "E", "+", "-"].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label htmlFor="floatingInput">Net Monthly Income</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="form-floating mb-3">
                    <select
                      required
                      class="form-select"
                      id="EmploymentType"
                      name="EmploymentType"
                      aria-label="Default select example"
                    >
                      <option selected>Employment Type</option>
                      {empTypeList.map((value, key) => (
                        <option
                          name="EmploymentType"
                          key={key}
                          value={value[0]}
                        >
                          {value[1]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="service-footer">
                  <div className="service-footer-btn">
                    <button
                      type="reset"
                      className="btn btn-outline-secondary"
                      form="my-form"
                      onClick={() => {
                        setError("");
                      }}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Verify Lead
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6>Please enter the otp</h6>
              <div className="otp-number">
                <ul>
                  {Object.entries(otpField).map(([key, value]) => (
                    <li key={key}>
                      <input
                        id={value[0]}
                        type="number"
                        className="form-control"
                        maxLength={1}
                        onInput={(e) => {
                          Check.maxLengthCheck(e);
                        }}
                        onKeyUp={handleChangeOtp}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PersonalLoan;
