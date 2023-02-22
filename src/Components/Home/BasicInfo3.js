import React, { useState, useEffect, useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import parse from "date-fns/parse";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import userContext from "../../Context/userContext";
import Cookies from "js-cookie";

//Start of Form validation
const validationSchemaInput = Yup.object({
  Pan_name: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Pan Name must not contain a number.")
    .required("Pan Name is required."),
  Father_name: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Father Name must not contain a number.")
    .required("Father Name is required."),
  Mobile_no: Yup.string()
    .min(10, "Invalid Mobile Number")
    .max(10, "Invalid Mobile Number")
    .matches(/^[789]\d{9}$/, "Phone number is not valid.")
    .required("Phone Number is required."),
  Email: Yup.string().email("Invalid Email").required("Email is required."),
  Pan_no: Yup.string()
    .min(6, "Pan Number must be 6 digit.")
    .max(6, "Pan Number must be 6 digit.")
    .required("Pan Number is required."),
  Dob: Yup.date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, "dd.MM.yyyy", new Date());
      return result;
    })
    .typeError("please enter a valid date.")
    .required("Date of birth is required.")
    .min("01-01-1969", "Date is too early."),
  Address: Yup.string().max(70).required("Address is required."),
  Pincode: Yup.string()
    .matches(/^[0-9]+$/, "Pincode must be a number.")
    .min(6, "Must be exactly 6 digits.")
    .max(6, "Must be exactly 6 digits.")
    .required("Pincode is required."),
  state: Yup.string().required("State is required."),
  city: Yup.string().required("City is required."),
  gst_no: Yup.string().required("This Field is required."),
  msme_no: Yup.string().required("This Field is required."),
});

const BasicInfo3 = (props) => {
  ////////////////////////// Using state to store the values //////////////////////////
  const context = useContext(userContext);
  const { user, state, city, fetchBankInfo } = context;
  const [basicDetails, setBasicDetails] = useState(
    JSON.parse(localStorage.getItem("UserDetails"))
  );
  const [selectState, setSelectState] = useState();
  const [selectCity, setSelectCity] = useState([]);

  useEffect(() => {
    setSelectState(basicDetails.State);
    const cities = city.filter(function (key) {
      return key.state_id === parseInt(selectState);
    });
    const filteredCities = [];
    Object.entries(cities).map(([key, value]) => {
      return filteredCities.push([value.id, value.city]);
    });
    setSelectCity(filteredCities);
  }, [selectState, selectCity, user]);

  const states = [];
  Object.entries(state).map(([key, value]) => {
    return states.push([value.id, value.state]);
  });
  ////////////////////////// Using custom hook of formik //////////////////////////

  const formikInput = useFormik({
    initialValues: {
      Pan_name: basicDetails.Username === " " ? "" : basicDetails.Username,
      Father_name:
        basicDetails.FatherName === " " ? "" : basicDetails.FatherName,
      Mobile_no:
        basicDetails.MobileNumber === " " ? "" : basicDetails.MobileNumber,
      Email: basicDetails.EmailId === " " ? "" : basicDetails.EmailId,
      Pan_no: basicDetails.PanNumber === " " ? "" : basicDetails.PanNumber,
      Dob: basicDetails.DOB === " " ? "" : basicDetails.DOB,
      Address: basicDetails.Address === " " ? "" : basicDetails.Address,
      Pincode:
        basicDetails.Pincode === " " || basicDetails.Pincode === null
          ? ""
          : basicDetails.Pincode,
      state: basicDetails.State,
      city: basicDetails.City,
      gst_no: basicDetails.GSTNumber === " " ? "" : basicDetails.GSTNumber,
      msme_no: basicDetails.MSMENumber === " " ? "" : basicDetails.MSMENumber,
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
          Username: values.Pan_name,
          FatherName: values.Father_name,
          MobileNumber: values.Mobile_no,
          EmailId: values.Email,
          PanNumber: values.Pan_no,
          DOB: values.Dob,
          Address: values.Address,
          Pincode: values.Pincode,
          State: values.state,
          City: values.city,
          GSTNumber: parseInt(values.gst_no),
          MSMENumber: parseInt(values.msme_no),
        }),
      };
      await fetch(
        "http://localhost:3001/details/updatebasicinfo",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("UserDetails", JSON.stringify(data));
        });
      props.setToggleMenu("bank-info");
    },
  });

  function handleSelect(e) {
    if (e.target.getAttribute("name") === "State")
      setSelectState(e.currentTarget.dataset.value);
  }
  ////////////////////////// Attribute dictionary //////////////////////////
  const inputField = {
    1: [
      "Pan_name",
      "Name as per PAN",
      "Enter Name here",
      formikInput.values.Pan_name,
      formikInput.touched.Pan_name && Boolean(formikInput.errors.Pan_name),
      formikInput.touched.Pan_name && formikInput.errors.Pan_name,
      false,
      [],
    ],
    2: [
      "Father_name",
      "Father’s name",
      "Enter Name here",
      formikInput.values.Father_name,
      formikInput.touched.Father_name &&
        Boolean(formikInput.errors.Father_name),
      formikInput.touched.Father_name && formikInput.errors.Father_name,
      false,
      [],
    ],
    3: [
      "Mobile_no",
      "Mobile Number",
      "91787672617",
      formikInput.values.Mobile_no,
      formikInput.touched.Mobile_no && Boolean(formikInput.errors.Mobile_no),
      formikInput.touched.Mobile_no && formikInput.errors.Mobile_no,
      false,
      [],
    ],
    4: [
      "Email",
      "Email ID",
      "Enter here",
      formikInput.values.Email,
      formikInput.touched.Email && Boolean(formikInput.errors.Email),
      formikInput.touched.Email && formikInput.errors.Email,
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
      "Dob",
      "Date of Birth",
      "17/02/1990",
      formikInput.values.Dob,
      formikInput.touched.Dob && Boolean(formikInput.errors.Dob),
      formikInput.touched.Dob && formikInput.errors.Dob,
      false,
      [],
    ],
    7: [
      "Address",
      "Address",
      "Enter here",
      formikInput.values.Address,
      formikInput.touched.Address && Boolean(formikInput.errors.Address),
      formikInput.touched.Address && formikInput.errors.Address,
      false,
      [],
    ],
    8: [
      "Pincode",
      "Pincode",
      "110096",
      formikInput.values.Pincode,
      formikInput.touched.Pincode && Boolean(formikInput.errors.Pincode),
      formikInput.touched.Pincode && formikInput.errors.Pincode,
      false,
      [],
    ],
    9: [
      "state",
      "State",
      "state",
      formikInput.values.state,
      formikInput.touched.state && Boolean(formikInput.errors.state),
      formikInput.touched.state && formikInput.errors.state,
      true,
      states,
    ],
    10: [
      "city",
      "City",
      "city",
      formikInput.values.city,
      formikInput.touched.city && Boolean(formikInput.errors.city),
      formikInput.touched.city && formikInput.errors.city,
      true,
      selectCity,
    ],
  };

  ////////////////////////// Radio Button Attribute //////////////////////////

  const radioButton = {
    1: [
      "GST Number",
      "gst_no",
      formikInput.values.gst_no,
      formikInput.touched.gst_no && Boolean(formikInput.errors.gst_no),
      formikInput.touched.gst_no && formikInput.errors.gst_no,
    ],
    2: [
      "MSME Number",
      "msme_no",
      formikInput.values.msme_no,
      formikInput.touched.msme_no && Boolean(formikInput.errors.msme_no),
      formikInput.touched.msme_no && formikInput.errors.msme_no,
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
              key={key}
              fullWidth
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
                <MenuItem
                  name={item[1]}
                  key={key}
                  value={value[0]}
                  onClick={handleSelect}
                >
                  {value[1]}
                </MenuItem>
              ))}
            </TextField>
          ))}
          {Object.entries(radioButton).map(([key, item]) => (
            <FormControl sx={{ m: 2, minWidth: "68ch" }} key={key}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                {item[0]}
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name={item[1]}
                value={item[2]}
                onChange={formikInput.handleChange}
              >
                <FormControlLabel value={1} control={<Radio />} label="YES" />
                <FormControlLabel value={0} control={<Radio />} label="NO" />
              </RadioGroup>
              {item[4] && (
                <small className="text-danger">
                  <React.Fragment>{item[4]}</React.Fragment>
                </small>
              )}
            </FormControl>
          ))}

          <FormControl sx={{ m: 1, marginRight: "62ch" }}>
            <Button variant="outlined">Previous</Button>
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

export default BasicInfo3;
