import React, { useState, useEffect, useContext } from "react";
import userContext from "../../../Context/userContext";
import { DataGrid } from "@mui/x-data-grid";
const PersonalLoanLeadDetails = () => {
  const [loanLeadDetails, setLoanLeadDetails] = useState([]);
  const context = useContext(userContext);
  const { userToken } = context;
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (loanLeadDetails.length === 0) {
      const sub_product_ID = 1;
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      };
      fetch(
        `http://localhost:3001/product/readfinancialservices/${sub_product_ID}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setLoanLeadDetails(data);
        });
    } else {
      setRows(loanLeadDetails);
    }
  }, [loanLeadDetails]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "customer_mobile",
      headerName: "Mobile Number",
      width: 190,
    },
    { field: "city", headerName: "City", width: 190 },
    {
      field: "loan_amount",
      headerName: "Loan Amount Required",
      width: 190,
    },
    {
      field: "net_monthly_income",
      headerName: "Net Monthly Income",
      //   description: "This column has a value getter and is not sortable.",
      //   sortable: false,
      width: 190,
      //   valueGetter: (params: GridValueGetterParams) =>
      //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "employment_type",
      headerName: "Employment",
      width: 190,
    },
  ];

  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        <div style={{ height: 260, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={3}
            rowsPerPageOptions={[3]}
            // checkboxSelection
          />
        </div>
      </div>
    </>
  );
};
export default PersonalLoanLeadDetails;
