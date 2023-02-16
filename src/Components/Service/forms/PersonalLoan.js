import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const validationSchemaInput = Yup.object({});

const PersonalLoan = (props) => {
  ////////////////////////// Using state to store the values //////////////////////////
  const [initialValues, setInitialValues] = useState({});
  useEffect(() => {
    console.log(initialValues);
  }, [initialValues]);

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
    onSubmit: (values) => {
      setInitialValues(values);
    },
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
      false,
      [],
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
      ["Salaried", "Self Employed", "Business"],
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
                      {item[7].map((value) => (
                        <MenuItem value={value}>{value}</MenuItem>
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