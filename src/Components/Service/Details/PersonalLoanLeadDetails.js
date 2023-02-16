import * as React from "react";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
const PersonalLoanLeadDetails = () => {
  const fetchData = () => {
    console.log("provision to call api");
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "mobileNumber", headerName: "Mobile Number", width: 190 },
    { field: "city", headerName: "City", width: 190 },
    {
      field: "loanAmoutRequired",
      headerName: "Loan Amount Required",
      width: 190,
    },
    {
      field: "netMonthlyIncome",
      headerName: "Net Monthly Income",
      //   description: "This column has a value getter and is not sortable.",
      //   sortable: false,
      width: 190,
      //   valueGetter: (params: GridValueGetterParams) =>
      //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "employmentType",
      headerName: "Employment",
      width: 190,
    },
  ];

  const rows = [
    {
      id: 1,
      mobileNumber: "9999999999",
      city: "Delhi",
      loanAmoutRequired: "100000",
      netMonthlyIncome: "20000",
      employmentType: "Business",
    },
    { id: 2 },
    { id: 3, mobileNumber: "9999999999" },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        <div style={{ height: 260, width: "100%" }}>
          {fetchData()}
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
