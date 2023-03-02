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
    {
      SubProductId: 1,
      docId: "1p",
      SubProductName: "PersonalLoan",
      ListName: "Personal Loan",
    },
    {
      SubProductId: 2,
      docId: "2h",
      SubProductName: "HomeLoan",
      ListName: "Home Loan",
    },
    {
      SubProductId: 3,
      docId: "3b",
      SubProductName: "BusinessLoan",
      ListName: "Business Loan",
    },
  ];
  const [filterValue, setFilterValue] = useState([]);

  useEffect(() => {
    if (loanLeadDetails.length === 0) fetchLeads();
    setRows(
      loanLeadDetails.map(function (detail) {
        return {
          Id: detail.Id,
          FINCode: detail.FINCode,
          Name: detail.Name,
          CustomerMobile: detail.CustomerMobile,
          CityId: city[detail.CityId - 1].City,
          LoanAmount: detail.LoanAmount,
          NetMonthlyIncome: detail.NetMonthlyIncome,
          employment_type: empType[detail.EmploymentType].EmploymentType,
          is_present: detail.IsPresent,
          sub_product_id: subproduct[detail.SubProductId - 1].ListName,
        };
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanLeadDetails]);
  const Token = JSON.parse(user).Token;
  const fetchLeads = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    };
    var response;
    if (
      JSON.parse(localStorage.getItem("UserDetails")).FINCode !== "ADMIN@PBPTNR"
    ) {
      response = await fetch(
        `http://localhost:3001/product/readallfinancialservices/${JSON.parse(Cookies.get("userCookie")).FINCode
        }`,
        requestOptions
      );
    } else {
      response = await fetch(
        `http://localhost:3001/product/readfinancialservices`,
        requestOptions
      );
    }
    const result = await response.json();
    setLoanLeadDetails(result);
    return result;
  };
  useEffect(() => {
    setRows(
      loanLeadDetails
        .filter((row) => filterValue.includes(row.SubProductId))
        .map(function (detail) {
          return {
            Id: detail.Id,
            FINCode: detail.FINCode,
            Name: detail.Name,
            CustomerMobile: detail.CustomerMobile,
            CityId: city[detail.CityId].City,
            LoanAmount: detail.LoanAmount,
            NetMonthlyIncome: detail.NetMonthlyIncome,
            employment_type: empType[detail.EmploymentType].EmploymentType,
            is_present: detail.IsPresent,
            sub_product_id: detail.SubProductId,
          };
        })
    );
    if (filterValue.length === 0) {
      setRows(
        loanLeadDetails.map(function (row) {
          return {
            Id: row.Id,
            FINCode: row.FINCode,
            Name: row.Name,
            CustomerMobile: row.CustomerMobile,
            CityId: city[row.CityId].City,
            LoanAmount: row.LoanAmount,
            NetMonthlyIncome: row.NetMonthlyIncome,
            employment_type: empType[row.EmploymentType].EmploymentType,
            is_present: row.IsPresent,
            sub_product_id: row.SubProductId,
          };
        })
      );
    }
  }, [filterValue]);
  var col = [];
  if (
    JSON.parse(localStorage.getItem("UserDetails")).FINCode !== "ADMIN@PBPTNR"
  ) {
    col = [
      { field: "Id", headerName: "Id", width: 90 },
      {
        field: "Name",
        headerName: "Name",
        width: 180,
      },
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
        headerName: "Loan Amount",
        width: 190,
      },
      {
        field: "sub_product_id",
        headerName: "Product",
        width: 150,
      },
    ];
  } else {
    col = [
      { field: "Id", headerName: "Id", width: 90 },
      {
        field: "Name",
        headerName: "Name",
        width: 180,
      },
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
        field: "FINCode",
        headerName: "FINCode",
        width: 190,
      },
      {
        field: "sub_product_id",
        headerName: "Product",
        width: 150,
      },
    ];
  }

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
      <div className="container">
        <div className="tab-content" id="pills-tabContent">

          <h1 className="main-heading">
            <span>Lead Details</span>
          </h1>

          <div className="filterdiv">
            <div className="left">
              {subproduct.map((obj) => (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={obj.docId}
                    value={obj.SubProductId}
                    onChange={handleFilterChange}
                  />
                  <label className="form-check-label" id={obj.docId} key={obj.SubProductId}>
                    {obj.SubProductName}
                  </label>
                </div>
              ))}
            </div>
            <div className="right">
              <div className="search">
                <input className="form-control" placeholder="Search ..." />
                <i class="fa fa-search" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <Box
            container
            style={{ height: 300, width: "100%", margin: "0 0 5ch 0" }}
          >
            <DataGrid
              rows={rows}
              columns={col}
              pageSize={5}
              rowsPerPageOptions={[5]}
              getRowId={(row) => row.Id + row.FINCode}
            />


          </Box>
        </div>
      </div>
    </>
  );
};
export default PersonalLoanLeadDetails;
