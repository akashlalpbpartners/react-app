import React from "react";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useFormik } from "formik";

////////////////////////// Start of form validation //////////////////////////

const validationSchemaInput = Yup.object({
  Bank: Yup.string().required("Pan Name is required."),
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

const BasicInfo3 = () => {
  ////////////////////////// Using state to store the values //////////////////////////
  const [basicInfoValues, setBasicInfoValues] = React.useState({});

  ////////////////////////// Using custom hook of formik //////////////////////////

  const formikInput = useFormik({
    initialValues: {
      Bank: "",
      Account_holder_name: "",
      Account_no: "",
      Ifsc_code: "",
      Pan_no: "",
      Pincode: "",
      Branch_state: "",
      Branch_address: "",
    },
    validationSchema: validationSchemaInput,
    handleChange: (event) => {
      event.preventDefault();
      console.log(event.target.value);
    },
    onSubmit: (values) => {
      setBasicInfoValues(values);
      console.log(basicInfoValues);
    },
  });
  //   console.log(basicInfoValues);
  ////////////////////////// Attribute dictionary //////////////////////////
  const inputField = {
    1: [
      "Bank",
      "Bank",
      "Bank",
      formikInput.values.Bank,
      formikInput.touched.Bank && Boolean(formikInput.errors.Bank),
      formikInput.touched.Bank && formikInput.errors.Bank,
      true,
      ["SBI", "HDFC"],
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
      ["Delhi", "Goa", "Gujrat"],
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

  async function registerBankInfo() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        BankName: " ",
        AccountHolderName: " ",
        AccountNumber: " ",
        IfscCode: " ",
        PanNumber: " ",
        Pincode: " ",
        BranchState: " ",
        BranchAddress: " ",
      }),
    };
    console.log("hello");
    await fetch("http://localhost:3001/details/basicinfo", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

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
              <MenuItem value="">
                <em>{item[1]}</em>
              </MenuItem>
              {item[7].map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </TextField>
          ))}
          <FormControl sx={{ m: 1, marginRight: "62ch" }}>
            <Button variant="outlined">Previous</Button>
          </FormControl>
          <FormControl sx={{ m: 1, marginLeft: "61ch" }}>
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                registerBankInfo();
              }}
            >
              Next
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default BasicInfo3;
