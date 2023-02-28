import React, { useState, useEffect, useContext } from "react";
import userContext from "../../../Context/userContext";
import { DataGrid} from '@mui/x-data-grid';
import { Box } from "@mui/system";
import Cookies from "js-cookie";
const PersonalLoanLeadDetails = () => {
  const [loanLeadDetails, setLoanLeadDetails] = useState([]);
  const context = useContext(userContext);
  const { city, empType } = context;
  const [rows, setRows] = useState([]);
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
          Id: 1,
          SubProductId: 1,
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
        },{
          Id: 2,
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
        },{
          Id: 3,
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
      ];
      setLoanLeadDetails(data);
    } else {
      setRows(
        loanLeadDetails.map(function(row) {
         
          return {
            id: row.Id,
            customer_mobile:row.CustomerMobile,
            city_id: city[row.CityId].City,
            loan_amount: row.LoanAmount,
            net_monthly_income: row.NetMonthlyIncome,
            employment_type: empType[row.EmploymentType].EmploymentType,
            is_present: row.IsPresent,
          };
        })
      );
    }
  }, [loanLeadDetails]);

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
  ];
  function NumberFormat(props) {
    const  MobileNumber  = props.value;
    return (MobileNumber.toString().replace(/(\d{6})$/, "XXXXXX"));
  }
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
            
        </Box>
      </div>
    </>
  );
};
export default PersonalLoanLeadDetails;
