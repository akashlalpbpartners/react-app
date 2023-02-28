import React, { useState, useEffect, useContext } from "react";
import userContext from "../../../Context/userContext";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Cookies from "js-cookie";

const PersonalLoanLeadDetails = () => {
  const [loanLeadDetails, setLoanLeadDetails] = useState([]);
  const context = useContext(userContext);
  const { city } = context;
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (loanLeadDetails.length === 0) {
      const sub_product_ID = 3;
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${
            JSON.parse(Cookies.get("userCookie")).Token
          }`,
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
      setRows(
        loanLeadDetails.map(function (row) {
          return {
            id: row.id,
            customer_mobile: row.customer_mobile,
            city_id: city[row.city_id].city,
            loan_amount: row.loan_amount,
            net_monthly_income: row.net_monthly_income,
            employment_type: row.employment_type,
            is_present: row.is_present,
          };
        })
      );
    }
  }, [loanLeadDetails]);
  console.log(rows);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "customer_mobile",
      headerName: "Mobile Number",
      width: 190,
    },
    {
      field: "city_id",
      headerName: "City",
      width: 200,
    },
    {
      field: "loan_amount",
      headerName: "Loan Amount Required",
      width: 190,
    },
    {
      field: "net_monthly_income",
      headerName: "Net Monthly Income",
      width: 190,
    },
    {
      field: "employment_type",
      headerName: "Employment",
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
            pageSize={3}
            rowsPerPageOptions={[3]}
            getRowClassName={(params) => {
              if (params.row.is_present === 1) return "Rejected";
            }}
          />
        </Box>
      </div>
    </>
  );
};
export default PersonalLoanLeadDetails;
