import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const BankInfo2 = () => {
  const selectBank = ["SBI", "HDFC"];
  const selectState = ["Delhi", "Goa", "Gujrat"];

  const placeholder = {
    "Account Holder Name": "Enter name here",
    "Account Number": "Enter here",
    "NEFT IFSC Code": "Enter here",
    "PAN Number": "Enter here",
    Pincode: "110096",
  };
  const [bank, setBank] = useState("");
  const [state, setState] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "banks") setBank(e.target.value);
    else setState(e.target.value);
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
          <FormControl sx={{ m: 1, minWidth: "70ch" }}>
            <InputLabel id="demo-simple-select-helper-label">Bank</InputLabel>
            <Select
              name="banks"
              label="Bank"
              value={bank}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Bank</em>
              </MenuItem>
              {selectBank.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
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
            <InputLabel id="demo-simple-select-helper-label">
              Branch State
            </InputLabel>
            <Select
              name="branch"
              label="Branch State"
              value={state}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>State</em>
              </MenuItem>
              {selectState.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-required"
            label="Branch Address"
            placeholder="Enter here"
          />
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

export default BankInfo2;
