import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import React from "react";
import { FlexBetween } from "./flexBetween";
import {
  ArrowDropDownOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search as SearchIcon,
  SettingsOutlined,
} from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/profile.jpeg";

const Navbar = ({ setIsSideBarOpen, isSideBarOpen, user }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <AppBar sx={{ background: "none", boxShadow: "none", position: "static" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* left side */}
        <FlexBetween gap={"0.5rem"}>
          <IconButton
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius={"9px"}
            gap={"3rem"}
            p={"0.1rem 1.5rem"}
          >
            <InputBase placeholder="search..." />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* right side */}
        <FlexBetween gap={"1rem"}>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            <Button
            
              sx={{
                display: "flex",
                // justifyContent: "space-between",
                // alignItems: "center",
                // textTransform: "none",
                gap: "5px",
                
              }}
            >
              <Box
                component={"img"}
                alt="profile"
                height={"32px"}
                width={"32px"}
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
                src={profileImage}
              />

              <Box>
                {/* <Typography
                  fontWeight={"bold"}
                  fontSize={"0.85rem"}
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography> */}

                {/* <Typography
                  fontSize={"0.75rem"}
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography> */}
              </Box>

              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.secondary[100],
                  fontSize: "30px",
                  mb:"10px"
                }}
              />
            </Button>
            <Menu>

            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
