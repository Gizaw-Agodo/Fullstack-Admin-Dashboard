import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/header";
import React from "react";
import { useGetAdminsQuery } from "state/api";

const Admins = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();

  const columns = [
    {
      field: "_id",
      headerName: "Id",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.3,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.5,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.3,

    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 0.5,

    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.3,

    },
  ];

  return (
    <Box p={"1.5rem 2.5rem"}>
      <Header title="Admins" subtitle={"List of admins"} />
      <Box
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Admins;
