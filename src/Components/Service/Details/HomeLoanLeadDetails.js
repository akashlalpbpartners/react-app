import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
const HomeLoanLeadDetails = () => {
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
      city: "Mumbai",
      loanAmoutRequired: "1500000",
      netMonthlyIncome: "40000",
      employmentType: "Teacher",
    },
    { id: 2 },
    { id: 3 },
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
        <div style={{ height: 400, width: "100%" }}>
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
export default HomeLoanLeadDetails;
