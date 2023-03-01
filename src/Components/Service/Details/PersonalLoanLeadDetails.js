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
            CityId: city[row.CityId].City,
            LoanAmount: row.LoanAmount,
            NetMonthlyIncome: row.NetMonthlyIncome,
          };
        })
      );
    }
  }, [loanLeadDetails]);
  const Token = JSON.parse(user).Token;
  const fetchLeads = async () => {
    const SubProductId = 1;
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
  // setRows(
  //   loanLeadDetails.map(function (row) {
  //     return {
  //       id: row.Id,
  //       customer_mobile: row.CustomerMobile,
  //       city_id: city[row.CityId].city,
  //       loan_amount: row.LoanAmount,
  //       net_monthly_income: row.NetMonthlyIncome,
  //       employment_type: empType[row.EmploymentType].EmploymentType,
  //       is_present: row.IsPresent,
  //     };
  //   })
  // );
  // const row = [];
  // Object.entries(loanLeadDetails).map(([key, value]) => {
  //   row.push({
  //     id: row.Id,
  //     customer_mobile: row.CustomerMobile,
  //     city_id: 1,
  //     loan_amount: row.LoanAmount,
  //     net_monthly_income: row.NetMonthlyIncome,
  //     employment_type: 1,
  //     is_present: row.IsPresent,
  //   });
  // });
  // useEffect(() => {
  //   if (loanLeadDetails.length === 0) {
  //   } else {
  //
  //   }
  // }, [loanLeadDetails]);
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
      field: "NetMonthlyIncome",
      headerName: "Net Monthly Income",
      width: 190,
    },
  ];
  // const column = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "firstName",
  //     headerName: "First name",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "lastName",
  //     headerName: "Last name",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 110,
  //     editable: true,
  //   },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
  // ];
  // const row = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];
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
