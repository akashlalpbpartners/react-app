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
  const subproduct = [
    { SubProductId: 1, docId: "1p", SubProductName: "PersonalLoan" },
    { SubProductId: 2, docId: "2h", SubProductName: "HomeLoan" },
    { SubProductId: 3, docId: "3b", SubProductName: "BusinessLoan" },
  ];
  const [filterValue, setFilterValue] = useState([]);

  useEffect(() => {
    if (loanLeadDetails.length === 0) {
      fetchLeads();
      
      // const data = [
      //   {
      //     Id: 11,
      //     SubProductId: 2,
      //     CustomerMobile: 9090909091,
      //     CityId: 1,
      //     LoanAmount: 0,
      //     NetMonthlyIncome: 0,
      //     EmploymentType: 1,
      //     FINCode: 0,
      //     GrossSales: 0,
      //     IsPresent: 1,
      //     IsActive: 1,
      //     CreatedAt: "2023-02-28T12:24:16.000Z",
      //     UpdatedAt: "2023-02-28T12:24:16.000Z",
      //   },
      //   {
      //     Id: 21,
      //     SubProductId: 1,
      //     CustomerMobile: 4758475498,
      //     CityId: 1,
      //     LoanAmount: 0,
      //     NetMonthlyIncome: 0,
      //     EmploymentType: 1,
      //     FINCode: 0,
      //     GrossSales: 0,
      //     IsPresent: 1,
      //     IsActive: 1,
      //     CreatedAt: "2023-02-28T12:24:16.000Z",
      //     UpdatedAt: "2023-02-28T12:24:16.000Z",
      //   },
      //   {
      //     Id: 31,
      //     SubProductId: 3,
      //     CustomerMobile: 7834687490,
      //     CityId: 1,
      //     LoanAmount: 0,
      //     NetMonthlyIncome: 0,
      //     EmploymentType: 1,
      //     FINCode: 0,
      //     GrossSales: 0,
      //     IsPresent: 1,
      //     IsActive: 1,
      //     CreatedAt: "2023-02-28T12:24:16.000Z",
      //     UpdatedAt: "2023-02-28T12:24:16.000Z",
      //   },
      // ];
      // setLoanLeadDetails(data);
    } else {
      setRows(
        loanLeadDetails.map(function(detail) {
          return {
            Id: detail.Id,
            FINCode:detail.FINCode,
            CustomerMobile: detail.CustomerMobile,
            CityId: city[detail.CityId].City,
            LoanAmount: detail.LoanAmount,
            NetMonthlyIncome: detail.NetMonthlyIncome,
            employment_type: empType[detail.EmploymentType].EmploymentType,
            is_present: detail.IsPresent,
            sub_product_id: detail.SubProductId,
          }
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
      `http://localhost:3001/product/readallfinancialservices/${
        JSON.parse(Cookies.get("userCookie")).FINCode
      }`,
      requestOptions
    );
    const result = await response.json();
    setLoanLeadDetails(result);
    return result;
  };
  useEffect(() => {
    setRows(
      loanLeadDetails
        .filter((row) => filterValue.includes(row.SubProductId))
        .map(function(detail) {
          return {
            Id: detail.Id,
            FINCode:detail.FINCode,
            CustomerMobile: detail.CustomerMobile,
            CityId: city[detail.CityId].City,
            LoanAmount: detail.LoanAmount,
            NetMonthlyIncome: detail.NetMonthlyIncome,
            employment_type: empType[detail.EmploymentType].EmploymentType,
            is_present: detail.IsPresent,
            sub_product_id: detail.SubProductId,
          }
        })
    );
    if(filterValue.length===0)
    {
      setRows(loanLeadDetails.map(function(row) {
        return {
          Id: row.Id,
          FINCode:row.FINCode,
          CustomerMobile: row.CustomerMobile,
          CityId: city[row.CityId].City,
          LoanAmount: row.LoanAmount,
          NetMonthlyIncome: row.NetMonthlyIncome,
          employment_type: empType[row.EmploymentType].EmploymentType,
          is_present: row.IsPresent,
          sub_product_id: row.SubProductId,
        }}))
      
    }
  }, [filterValue]);
  const columns = [
    { field: "Id", headerName: "Id", width: 90 },
    { field: "FINCode", headerName: "FINCode", width: 150 },
    {
      field: "CustomerMobile",
      headerName: "Mobile Number",
      width: 190,
      valueGetter: NumberFormat,
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
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row.Id + row.FINCode}
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
