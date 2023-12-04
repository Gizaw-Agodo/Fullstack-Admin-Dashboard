import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/navbar";
import SideBar from "components/sideBar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "state/api";

const Layout = () => {
  const isNoneMobile = useMediaQuery("(min-width:600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const { userId } = useSelector((state) => state.global);
  const {data} = useGetUserQuery(userId);
  

  return (
    <Box display={isNoneMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
        isNoneMobile={isNoneMobile}
        drawerWidth={"250px"}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        user = {data || {}}
      />

      <Box flexGrow={1}>
        <Navbar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          user = {data || {}}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
