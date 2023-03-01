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
  const [mobileError, setMobileError] = useState("empty");
  const [loanError, setLoanError] = useState("empty");
  const [showAlert, setShowAlert] = useState(false);
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
      const isPresent = [];
      loanLeadDetails.filter((row) => {
        if (row.CustomerMobile === parseInt(values.CustomerMobile))
          isPresent.push(row);
        return 0;
      });
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.Token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          SubProductId: parseInt(props.ToggleSubForm),
          CustomerMobile: parseInt(values.CustomerMobile),
          CityId: values.City,
          LoanAmount: parseInt(values.LoanAmount),
          NetMonthlyIncome: parseInt(values.NetMonthlyIncome),
          EmploymentType: values.EmploymentType,
          FINCode: JSON.parse(Cookies.get("userCookie")).FINCode,
          GrossSales: 0,
          IsPresent: isPresent.length === 0 ? 0 : 1,
        }),
      };
      console.log(requestOptions.body);
      // await fetch(
      //   "http://localhost:3001/product/insertfinancialservices",
      //   requestOptions
      // );
      // formikInput.handleReset();
    },
  });
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

  ////////////////////////// Attribute dictionary //////////////////////////
  const inputField = {
    1: [
      "CustomerMobile",
      "Mobile Number",
      "Enter Mobile Number",
      formikInput.values.CustomerMobile,
      formikInput.touched.CustomerMobile &&
        Boolean(formikInput.errors.CustomerMobile),
      formikInput.touched.CustomerMobile && formikInput.errors.CustomerMobile,
      false,
      [],
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
      "LoanAmount",
      "Loan Amount Required",
      "Enter Loan amount required",
      formikInput.values.LoanAmount,
      formikInput.touched.LoanAmount && Boolean(formikInput.errors.LoanAmount),
      formikInput.touched.LoanAmount && formikInput.errors.LoanAmount,
      false,
      [],
    ],
    4: [
      "NetMonthlyIncome",
      "Net Monthly Income",
      "Enter Net monthly income",
      formikInput.values.NetMonthlyIncome,
      formikInput.touched.NetMonthlyIncome &&
        Boolean(formikInput.errors.NetMonthlyIncome),
      formikInput.touched.NetMonthlyIncome &&
        formikInput.errors.NetMonthlyIncome,
      false,
      [],
    ],
    5: [
      "EmploymentType",
      "Employment Type",
      "Enter Employment type",
      formikInput.values.EmploymentType,
      formikInput.touched.EmploymentType &&
        Boolean(formikInput.errors.EmploymentType),
      formikInput.touched.EmploymentType && formikInput.errors.EmploymentType,
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
            id="my-form"
            onSubmit={formikInput.handleSubmit}
            autoComplete="off"
          >
            <div
              className="tab-pane fade show active"
              id="personal-loan"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row">
                {Object.entries(inputField).map(([key, item]) => (
                  <>
                    <TextField
                      key={key}
                      fullWidth
                      required
                      id={item[0]}
                      select={item[6]}
                      name={item[0]}
                      label={item[1]}
                      placeholder={item[2]}
                      value={item[3]}
                      onChange={formikInput.handleChange}
                      error={item[4]}
                      helperText={item[5]}
                    >
                      <MenuItem value="">
                        <em>{item[1]}</em>
                      </MenuItem>
                      {item[7].map((value, key) => (
                        <MenuItem name={item[1]} key={key} value={value[0]}>
                          {value[1]}
                        </MenuItem>
                      ))}
                    </TextField>
                  </>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="service-footer">
                  <div className="service-footer-btn">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={formikInput.handleReset}
                      form="my-form"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={formikInput.handleSubmit}
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </div>
    </>
  );
};
export default PersonalLoan;
