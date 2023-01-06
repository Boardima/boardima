import * as React from "react";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import ViewPopup from "./ViewPopup";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

function UniDetailCard() {
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });
  const rows = [
    {
      id: 1,
      col1: "Owner1",
      col2: "Address1",
      col3: "077959617",
      col4: "Male",
      col5: "This is a boardim house for boys...",
      col6: "Available",
    },
    {
      id: 2,
      col1: "Owner2",
      col2: "Address2",
      col3: "0712544757",
      col4: "Male",
      col5: "This is a boardim house for boys...",
      col6: "Available",
    },
    {
      id: 3,
      col1: "Owner3",
      col2: "Address3",
      col3: "076884757",
      col4: "Female",
      col5: "This is a boardim house for girl...",
      col6: "Available",
    },
  ];
  const columns = [
    {
      field: "col1",
      headerName: "Owner Name",
      headerClassName: "header-class-name",
      width: 205,
    },
    {
      field: "col2",
      headerName: "Address",
      headerClassName: "header-class-name",
      width: 222,
    },
    {
      field: "col3",
      headerName: "Contact No",
      headerClassName: "header-class-name",
      width: 140,
    },
    {
      field: "col4",
      headerName: "Gender",
      headerClassName: "header-class-name",
      width: 90,
    },
    {
      field: "col5",
      headerName: "Description",
      headerClassName: "header-class-name",
      width: 300,
    },
    {
      field: "col6",
      headerName: "Status",
      headerClassName: "header-class-name",
      width: 90,
    },
    {
      field: "col7",
      headerName: "View",
      headerClassName: "header-class-name",
      headerAlign: "center",
      width: 100,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        console.log(params.row);
        const onClick = (e) => {};
        return <ViewPopup userId={params.row.id} />;
      },
    },
  ];

  return (
    <div style={{ height: 510, width: "100%" }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: () => {
            return (
              <GridToolbarContainer sx={{ justifyContent: "flex-end" }}>
                {/* <GridToolbarExport sx={{color: "#008080"}}/> */}
              </GridToolbarContainer>
            );
          },
        }}
        rows={rows}
        getRowHeight={() => "130px"}
        columns={columns}
        sx={{
          border: "1px solid #FFFFFF",
        }}
      />
    </div>
  );
}

export default UniDetailCard;
