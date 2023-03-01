import React, { useState, useEffect, useContext } from "react";
import userContext from "../../../Context/userContext";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Cookies from "js-cookie";
const PersonalLoanLeadDetails = () => {
  const [loanLeadDetails, setLoanLeadDetails] = useState([]);
  const context = useContext(userContext);
  const { city, empType } = context;
  const [rows, setRows] = useState([]);
  const subproduct = [
    { SubProductId: 1, docId: "1p", SubProductName: "PersonalLoan" },
    { SubProductId: 2, docId: "2h", SubProductName: "HomeLoan" },
    { SubProductId: 3, docId: "3b", SubProductName: "BusinessLoan" },
  ];
  const [filterValue, setFilterValue] = useState([]);

  useEffect(() => {
    if (loanLeadDetails.length === 0) {
      // const sub_product_ID = 1;
      // const requestOptions = {
      //   method: "POST",
      //   headers: {
      //     Authorization: `Bearer ${
      //       JSON.parse(Cookies.get("userCookie")).Token
      //     }`,
      //     "Content-Type": "application/json",
      //   },
      // };
      // fetch(
      //   `http://localhost:3001/product/readfinancialservices/${sub_product_ID}/${
      //     JSON.parse(Cookies.get("userCookie")).CustomerID
      //   }`,
      //   requestOptions
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setLoanLeadDetails(data);
      //   });
      const data = [
        {
          Id: 11,
          SubProductId: 2,
          CustomerMobile: 9090909091,
          CityId: 1,
          LoanAmount: 0,
          NetMonthlyIncome: 0,
          EmploymentType: 1,
          FINCode: 0,
          GrossSales: 0,
          IsPresent: 1,
          IsActive: 1,
          CreatedAt: "2023-02-28T12:24:16.000Z",
          UpdatedAt: "2023-02-28T12:24:16.000Z",
        },
        {
          Id: 21,
          SubProductId: 1,
          CustomerMobile: 4758475498,
          CityId: 1,
          LoanAmount: 0,
          NetMonthlyIncome: 0,
          EmploymentType: 1,
          FINCode: 0,
          GrossSales: 0,
          IsPresent: 1,
          IsActive: 1,
          CreatedAt: "2023-02-28T12:24:16.000Z",
          UpdatedAt: "2023-02-28T12:24:16.000Z",
        },
        {
          Id: 31,
          SubProductId: 3,
          CustomerMobile: 7834687490,
          CityId: 1,
          LoanAmount: 0,
          NetMonthlyIncome: 0,
          EmploymentType: 1,
          FINCode: 0,
          GrossSales: 0,
          IsPresent: 1,
          IsActive: 1,
          CreatedAt: "2023-02-28T12:24:16.000Z",
          UpdatedAt: "2023-02-28T12:24:16.000Z",
        },
      ];
      setLoanLeadDetails(data);
    } else {
      setRows(
        loanLeadDetails.map(function(row) {
          return {
            id: row.Id,
            customer_mobile: row.CustomerMobile,
            city_id: city[row.CityId].City,
            loan_amount: row.LoanAmount,
            net_monthly_income: row.NetMonthlyIncome,
            employment_type: empType[row.EmploymentType].EmploymentType,
            is_present: row.IsPresent,
            sub_product_id: row.SubProductId,
          };
        })
      );
    }
  }, [loanLeadDetails]);
  useEffect(() => {
    setRows(
      loanLeadDetails
        .filter((row) => filterValue.includes(row.SubProductId))
        .map(function(detail) {
          return {
            id: detail.Id,
            customer_mobile: detail.CustomerMobile,
            city_id: city[detail.CityId].City,
            loan_amount: detail.LoanAmount,
            net_monthly_income: detail.NetMonthlyIncome,
            employment_type: empType[detail.EmploymentType].EmploymentType,
            is_present: detail.IsPresent,
            sub_product_id: detail.SubProductId,
          };
        })
    );
    if(filterValue.length===0)
    {
      setRows(loanLeadDetails.map(function(row) {
        return {
          id: row.Id,
          customer_mobile: row.CustomerMobile,
          city_id: city[row.CityId].City,
          loan_amount: row.LoanAmount,
          net_monthly_income: row.NetMonthlyIncome,
          employment_type: empType[row.EmploymentType].EmploymentType,
          is_present: row.IsPresent,
          sub_product_id: row.SubProductId,
        }}))
      
    }
  }, [filterValue]);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "customer_mobile",
      headerName: "Mobile Number",
      width: 190,
      valueGetter: NumberFormat,
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
    {
      field: "sub_product_id",
      hide: true,
      type: "number",
    },
  ];
  function NumberFormat(props) {
    const MobileNumber = props.value;
    return MobileNumber.toString().replace(/(\d{6})$/, "XXXXXX");
  }

  const handleFilterChange = (event) => {
    let checkbox = document.getElementById(event.target.id);
    if (checkbox.checked) {
      if (!filterValue.includes(parseInt(event.target.value)))
        setFilterValue([...filterValue, parseInt(event.target.value)]);
    } else {
      if (filterValue.includes(parseInt(event.target.value)))
        setFilterValue(
          filterValue.filter((value) => value !== parseInt(event.target.value))
        );
    }
  };
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
          />

          {subproduct.map((obj) => (
            <label key={obj.SubProductId}>
              <input
                type="checkbox"
                id={obj.docId}
                value={obj.SubProductId}
                onChange={handleFilterChange}
              />
              {obj.SubProductName}
            </label>
          ))}
        </Box>
      </div>
    </>
  );
};
export default PersonalLoanLeadDetails;
