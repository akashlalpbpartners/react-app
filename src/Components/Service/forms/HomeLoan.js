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
    .matches(/^[789]\d{9}$/, "Phone number is not valid.")
    .required("Phone Number is required."),
  City: Yup.string().required("City is required."),
  Loan_amount_required: Yup.string()
    .test(
      "test-name",
      "Loan Amount must be ranged between 1 Lac to 5 Crore",
      function (value) {
        const loan = parseInt(value);
        if (loan <= 50000000 && loan >= 100000) return true;
        else return false;
      }
    )
    .required("Loan amount is required."),
  Net_monthly_income: Yup.string().required("Monthly income is required."),
  Employment_type: Yup.string().required("Employment type is required."),
});

const PersonalLoan = (props) => {
  const context = useContext(userContext);
  const { user, city, empType } = context;
  const [loanLeadDetails, setLoanLeadDetails] = useState([]);

  useEffect(() => {
    if (loanLeadDetails.length === 0) fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanLeadDetails]);
  const Token = JSON.parse(user).Token;
  const fetchLeads = async () => {
    const SubProductId = 2;
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
      Mobile_no: "",
      City: "",
      Loan_amount_required: "",
      Net_monthly_income: "",
      Employment_type: "",
    },
    validationSchema: validationSchemaInput,
    onSubmit: async (values) => {
      const isPresent = [];
      loanLeadDetails.filter((row) => {
        if (row.CustomerMobile === parseInt(values.Mobile_no))
          isPresent.push(row);
      });
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          SubProductId: parseInt(props.ToggleSubForm),
          CustomerMobile: parseInt(values.Mobile_no),
          CityId: values.City,
          LoanAmount: parseInt(values.Loan_amount_required),
          NetMonthlyIncome: parseInt(values.Net_monthly_income),
          EmploymentType: values.Employment_type,
          FINCode: JSON.parse(Cookies.get("userCookie")).FINCode,
          GrossSales: 0,
          IsPresent: isPresent.length === 0 ? 0 : 1,
        }),
      };
      await fetch(
        "http://localhost:3001/product/insertfinancialservices",
        requestOptions
      );
      formikInput.handleReset();
    },
  });

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
      10,
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
      empTypeList,
    ],
  };
  const checkNumber = (e) => {
    if (e.target.name === "Mobile_no") {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength);
      }
    }
  };

  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        <Box
          sx={{
            "& .MuiTextField-root": { m: "0.5ch 1.5ch 3ch", width: "41ch" },
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
              <h1 class="main-heading">Home Loan</h1>
              <div className="row">
                {Object.entries(inputField).map(([key, item]) => (
                  <>
                    <div className="col-md-4">
                      <TextField
                        key={key}
                        fullWidth
                        id={item[0]}
                        select={item[6]}
                        name={item[0]}
                        label={item[1]}
                        placeholder={item[2]}
                        value={item[3]}
                        InputProps={{ inputProps: { maxLength: item[8] } }}
                        onChange={(e) => {
                          checkNumber(e);
                          formikInput.handleChange(e);
                        }}
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
                    </div>
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
