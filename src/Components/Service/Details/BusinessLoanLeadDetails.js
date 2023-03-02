import React, { useState, useEffect, useContext } from "react";
import userContext from "../../../Context/userContext";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Cookies from "js-cookie";

const PersonalLoanLeadDetails = () => {
  const [loanLeadDetails, setLoanLeadDetails] = useState([]);
  const context = useContext(userContext);
  const { user, city, empType } = context;
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (loanLeadDetails.length === 0) fetchLeads();
    else {
      setRows(
        loanLeadDetails.map(function (row) {
          return {
            Id: row.Id,
            FINCode: row.FINCode,
            CustomerMobile: row.CustomerMobile,
            CityId: city[row.CityId - 1].City,
            LoanAmount: row.LoanAmount,
            NetMonthlyIncome: row.NetMonthlyIncome,
          };
        })
      );
    }
  }, [loanLeadDetails]);
  const Token = JSON.parse(user).Token;
  const fetchLeads = async () => {
    const SubProductId = 3;
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
  const columns = [
    { field: "Id", headerName: "Id", width: 90 },
    { field: "FINCode", headerName: "FINCode", width: 150 },
    {
      field: "CustomerMobile",
      headerName: "Mobile Number",
      width: 190,
    },
    {
      field: "CityId",
      headerName: "City",
      width: 180,
    },
    {
      field: "LoanAmount",
      headerName: "Loan Amount Required",
      width: 190,
    },
    {
      field: "GrossSales",
      headerName: "Gross Sale",
      width: 190,
    },
  ];
  return (
    <>
      <div className="container tab-content" id="pills-tabContent">
        <Box
          container
          style={{ height: 260, width: "100%", margin: "0 0 5ch 0" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row.Id + row.FINCode}
          />
        </Box>
      </div>
    </>
  );
};
export default PersonalLoanLeadDetails;
