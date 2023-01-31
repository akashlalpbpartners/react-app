import React, { useState } from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const BasicInfo = () => {
  const placeholder = {
    "Name as per PAN": "Enter Name here",
    "Father’s name": "Enter Name here",
    "Mobile Number": "91787672617",
    "Email ID": "Enter here",
    "PAN Number": "Enter here",
    "Date of Birth": "17/02/1990",
    Address: "Enter here",
    Pincode: "110096",
  };

  const selectFields = [
    ["Delhi", "Goa", "Gujrat"],
    ["Delhi", "Ghaziabad", "Nehru place"],
  ];
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "states") setState(e.target.value);
    else setCity(e.target.value);
  };
  return (
    <>
      <div
        className="container tab-pane "
        id="basic-info"
        role="tabpanel"
        aria-labelledby=""
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "70ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {Object.entries(placeholder).map(([value, key]) => (
            <>
              <TextField
                id="outlined-required"
                label={value}
                defaultValue=""
                placeholder={key}
              />
            </>
          ))}
          <FormControl sx={{ m: 1, minWidth: "70ch" }}>
            <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
            <Select
              name="states"
              label="States"
              value={state}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>State</em>
              </MenuItem>
              {selectFields[0].map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: "70ch" }}>
            <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
            <Select label="City" value={city} onChange={handleChange}>
              <MenuItem value="">
                <em>City</em>
              </MenuItem>
              {selectFields[1].map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, minWidth: "68ch" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              GST Number
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="YES" control={<Radio />} label="YES" />
              <FormControlLabel value="NO" control={<Radio />} label="NO" />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 2 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              MSME Number
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="YES" control={<Radio />} label="YES" />
              <FormControlLabel value="NO" control={<Radio />} label="NO" />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 1, marginRight: "62ch" }}>
            <Button variant="outlined">Previous</Button>
          </FormControl>
          <FormControl sx={{ m: 1, marginLeft: "61ch" }}>
            <Button variant="contained">Next</Button>
          </FormControl>
        </Box>
      </div>
    </>
  );
};

export default BasicInfo;
