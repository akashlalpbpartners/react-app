import React, { useState, useEffect, useContext } from "react";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useFormik } from "formik";
import userContext from "../../Context/userContext";
import Cookies from "js-cookie";

////////////////////////// Start of form validation //////////////////////////

const validationSchemaInput = Yup.object({
  Bank: Yup.number().required("Bank Name is required."),
  Account_holder_name: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Account holder name must not contain a number.")
    .required("Father Name is required."),
  Account_no: Yup.string()
    .min(16, "Account Number must be of 16 digits.")
    .max(16, "Account Number must be of 16 digits.")
    .matches(/^[0-9]+$/, "Account number is not valid")
    .required("Account Number is required."),
  Ifsc_code: Yup.string()
    .min(5, "IFSC Code must be of 5 digit.")
    .max(5, "IFSC Code must be of 5 digit.")
    .matches(/^[0-9]+$/, "IFSC Code is not valid")
    .required("IFSC Code is required."),
  Pan_no: Yup.string()
    .min(6, "Pan Number must be 6 digit.")
    .max(6, "Pan Number must be 6 digit.")
    .matches(/^[0-9]+$/, "Pan Number is not valid")
    .required("Pan Number is required."),
  Pincode: Yup.string()
    .matches(/^[0-9]+$/, "Pincode must be a number")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .required("Pincode is required."),
  Branch_state: Yup.string().required("This Field is required."),
  Branch_address: Yup.string().max(70).required("Address is required."),
});

////////////////////////// End of form validation //////////////////////////

const BankInfo3 = (props) => {
  ////////////////////////// Using state to store the values //////////////////////////
  const [bankInfoValues, setBankInfoValues] = useState(
    JSON.parse(localStorage.getItem("BankDetails"))
  );
  const context = useContext(userContext);
  const { user, state } = context;

  const formikInput = useFormik({
    initialValues: {
      Bank: bankInfoValues.length === 0 ? "" : bankInfoValues.BankName,
      Account_holder_name:
        bankInfoValues.length === 0 ? "" : bankInfoValues.AccountHolderName,
      Account_no:
        bankInfoValues.length === 0 ? "" : bankInfoValues.AccountNumber,
      Ifsc_code: bankInfoValues.length === 0 ? "" : bankInfoValues.IfscCode,
      Pan_no: bankInfoValues.length === 0 ? "" : bankInfoValues.PanNumber,
      Pincode: bankInfoValues.length === 0 ? "" : bankInfoValues.Pincode,
      Branch_state:
        bankInfoValues.length === 0 ? 1 : bankInfoValues.BranchState,
      Branch_address:
        bankInfoValues.length === 0 ? "" : bankInfoValues.BranchAddress,
    },
    validationSchema: validationSchemaInput,
    onSubmit: async (values) => {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${
            JSON.parse(Cookies.get("userCookie")).Token
          }`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CustomerID: JSON.parse(Cookies.get("userCookie")).CustomerID,
          BankName: values.Bank,
          AccountHolderName: values.Account_holder_name,
          AccountNumber: values.Account_no,
          IfscCode: values.Ifsc_code,
          PanNumber: values.Pan_no,
          Pincode: values.Pincode,
          BranchState: values.Branch_state,
          BranchAddress: values.Branch_address,
        }),
      };
      await fetch("http://localhost:3001/details/bankinfo", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("BankDetails", JSON.stringify(data));
        });
      props.setToggleMenu("kyc-doc");
    },
  });

  const states = [];
  Object.entries(state).map(([key, value]) => {
    return states.push([value.id, value.state]);
  });

  const inputField = {
    1: [
      "Bank",
      "Bank",
      "Bank",
      formikInput.values.Bank,
      formikInput.touched.Bank && Boolean(formikInput.errors.Bank),
      formikInput.touched.Bank && formikInput.errors.Bank,
      true,
      [
        [1, "Bank of Baroda"],
        [2, "Bank of Maharashtra"],
        [3, "Canara Bank"],
        [4, "Central Bank of India"],
        [5, "Indian Bank"],
        [6, "Indian Overseas Bank"],
        [7, "Punjab and Sind Bank"],
        [8, "Punjab National Bank"],
        [9, "State Bank of India"],
        [10, "UCO Bank"],
        [11, "Union Bank of India"],
        [12, "Axis Bank"],
        [13, "Bandhan Bank"],
        [14, "CSB Bank"],
        [15, "City Union Bank"],
        [16, "DCB Bank"],
        [17, "Dhanlaxmi Bank"],
        [18, "Federal Bank"],
        [19, "HDFC Bank"],
        [20, "ICICI Bank"],
        [21, "IDBI Bank"],
        [22, "IDFC First Bank"],
        [23, "IndusInd Bank"],
        [24, "Jammu & Kashmir Bank"],
        [25, "Karnataka Bank"],
        [26, "Karur Vysya Bank"],
        [27, "Kotak Mahindra Bank"],
        [28, "Nainital Bank"],
        [29, "RBL Bank"],
        [30, "South Indian Bank"],
        [31, "Tamilnad Mercantile Bank"],
        [32, "Yes Bank"],
        [33, "Bank of India"],
      ],
    ],
    2: [
      "Account_holder_name",
      "Account Holder Name",
      "Enter name here",
      formikInput.values.Account_holder_name,
      formikInput.touched.Account_holder_name &&
        Boolean(formikInput.errors.Account_holder_name),
      formikInput.touched.Account_holder_name &&
        formikInput.errors.Account_holder_name,
      false,
      [],
    ],
    3: [
      "Account_no",
      "Account Number",
      "5555000000005555",
      formikInput.values.Account_no,
      formikInput.touched.Account_no && Boolean(formikInput.errors.Account_no),
      formikInput.touched.Account_no && formikInput.errors.Account_no,
      false,
      [],
    ],
    4: [
      "Ifsc_code",
      "IFSC Code",
      "Enter here",
      formikInput.values.Ifsc_code,
      formikInput.touched.Ifsc_code && Boolean(formikInput.errors.Ifsc_code),
      formikInput.touched.Ifsc_code && formikInput.errors.Ifsc_code,
      false,
      [],
    ],
    5: [
      "Pan_no",
      "PAN Number",
      "Enter here",
      formikInput.values.Pan_no,
      formikInput.touched.Pan_no && Boolean(formikInput.errors.Pan_no),
      formikInput.touched.Pan_no && formikInput.errors.Pan_no,
      false,
      [],
    ],
    6: [
      "Pincode",
      "Pincode",
      "110011",
      formikInput.values.Pincode,
      formikInput.touched.Pincode && Boolean(formikInput.errors.Pincode),
      formikInput.touched.Pincode && formikInput.errors.Pincode,
      false,
      [],
    ],
    7: [
      "Branch_state",
      "Branch State",
      "State",
      formikInput.values.Branch_state,
      formikInput.touched.Branch_state &&
        Boolean(formikInput.errors.Branch_state),
      formikInput.touched.Branch_state && formikInput.errors.Branch_state,
      true,
      states,
    ],
    8: [
      "Branch_address",
      "Branch Address",
      "Enter here",
      formikInput.values.Branch_address,
      formikInput.touched.Branch_address &&
        Boolean(formikInput.errors.Branch_address),
      formikInput.touched.Branch_address && formikInput.errors.Branch_address,
      false,
      [],
    ],
  };

  return (
    <>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "70ch" },
        }}
        id="basic-info"
        role="tabpanel"
        aria-labelledby=""
      >
        <form
          className="container"
          onSubmit={formikInput.handleSubmit}
          autoComplete="off"
        >
          {Object.entries(inputField).map(([key, item]) => (
            <TextField
              fullWidth
              required
              select={item[6]}
              id={item[0]}
              name={item[0]}
              label={item[1]}
              placeholder={item[2]}
              value={item[3]}
              onChange={formikInput.handleChange}
              error={item[4]}
              helperText={item[5]}
            >
              <MenuItem value={item[1]}>
                <em>{item[1]}</em>
              </MenuItem>
              {item[7].map((value, key) => (
                <MenuItem name={item[1]} key={key} value={value[0]}>
                  {value[1]}
                </MenuItem>
              ))}
            </TextField>
          ))}
          <FormControl sx={{ m: 1, marginRight: "62ch" }}>
            <Button
              variant="outlined"
              onClick={() => {
                props.setToggleMenu("basic-info");
              }}
            >
              Previous
            </Button>
          </FormControl>
          <FormControl sx={{ m: 1, marginLeft: "61ch" }}>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default BankInfo3;
