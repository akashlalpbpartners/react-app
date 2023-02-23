import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import userContext from "../../../Context/userContext";

const validationSchemaInput = Yup.object({
  Mobile_no: Yup.string()
    .min(10, "Invalid Mobile Number")
    .max(10, "Invalid Mobile Number")
    .matches(/^[789]\d{9}$/, "Phone number is not valid.")
    .required("Phone Number is required."),
  City: Yup.string().required("City is required."),
  Loan_amount_required: Yup.string().required("Loan amount is required."),
  Net_monthly_income: Yup.string().required("Monthly income is required."),
  Employment_type: Yup.string().required("Employment type is required."),
});

const PersonalLoan = (props) => {
  ////////////////////////// Using state to store the values //////////////////////////
  const context = useContext(userContext);
  const [empType, setEmpType] = useState([]);
  const [loanLeadDetails, setLoanLeadDetails] = useState([]);
  const [rows, setRows] = useState([]);
  const { city, userToken } = context;
  useEffect(() => {
    loadEmpType();
    if (loanLeadDetails.length === 0) {
      const sub_product_ID = 2;
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      };
      fetch(
        `http://localhost:3001/product/readfinancialservices/${sub_product_ID}/${
          JSON.parse(Cookies.get("userCookie")).CustomerID
        }`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setLoanLeadDetails(data);
        });
    } else {
      setRows(loanLeadDetails);
    }
  }, [loanLeadDetails]);

  const loadEmpType = async () => {
    await fetch("http://localhost:3001/employmenttype/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setEmpType(data));
  };

  const cityList = [];
  Object.entries(city).map(([key, value]) => {
    return cityList.push([value.id, value.city]);
  });

  ////////////////////////// Using custom hook of formik //////////////////////////
  const formikInput = useFormik({
    initialValues: {
      Mobile_no: "",
      City: "",
      Loan_amount_required: "",
      Net_monthly_income: "",
      Employment_type: "",
    },
    validationSchema: validationSchemaInput,
    onSubmit: async (values) => {
      const isPresent = rows.filter(
        (row) => row.customer_mobile === values.Mobile_no
      );
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sub_product_id: parseInt(props.ToggleSubForm),
          customer_mobile: values.Mobile_no,
          city_id: values.City,
          loan_amount: values.Loan_amount_required,
          net_monthly_income: values.Net_monthly_income,
          employment_type: values.Employment_type,
          created_by: JSON.parse(Cookies.get("userCookie")).CustomerID,
          is_present: isPresent.length === 0 ? 0 : 1,
        }),
      };
      await fetch(
        "http://localhost:3001/product/insertfinancialservices",
        requestOptions
      );
    },
  });
  const empList = [];
  Object.entries(empType).map(([key, value]) => {
    return empList.push([value.id, value.EmploymentType]);
  });
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
      empList,
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
