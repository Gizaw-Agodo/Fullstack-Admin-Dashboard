import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/header";
import React from "react";
import { useGetCustomersQuery } from "state/api";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
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
    <Box m={"1.5rem 2.5rem"}>
      <Header title={"Customers"} subtitle={"List of customers"} />
      <Box height={"75vh"}>
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

export default Customers;
