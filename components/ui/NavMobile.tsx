import { FC, useState } from "react";

import Image from "next/image";

import {
  AppBar,
  Box,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import logoNatura from "../../public/images/LogoNatura.png";

export const NavMobile = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, ["left"]: open });
    };

  const list = () => (
    <Box
      sx={{ width: "100vw", background: "#f5f5f5" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        position="relative"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          background: "#fff",
          padding: "1rem",
          marginBottom: "30px",
        }}
      >
        <Image
          style={{ marginRight: "53px" }}
          alt="logo natura"
          height={54}
          width={72}
          src={logoNatura}
        />
        <IconButton
          sx={{ position: "absolute", top: "15%", right: "3%" }}
          onClick={toggleDrawer(false)}
        >
          <CloseOutlinedIcon sx={{ color: "#b4b4b4", fontSize: "50px" }} />
        </IconButton>
      </Box>
      <Box></Box>
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          background: "#fff !important",
          padding: "1rem",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
        position="static"
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuOutlinedIcon sx={{ color: "#000", fontSize: "35px" }} />
            </IconButton>
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {list()}
            </SwipeableDrawer>
          </Box>
          <Box>
            <Image
              style={{ height: "auto" }}
              alt="logo natura"
              width={60}
              src={logoNatura}
            />
          </Box>
          <Box>
            <Box sx={{ display: "flex" }}>
              <IconButton>
                <PersonOutlinedIcon sx={{ color: "#000", fontSize: "32px" }} />
              </IconButton>
              <IconButton>
                <SearchOutlinedIcon sx={{ color: "#000", fontSize: "32px" }} />
              </IconButton>
              <IconButton>
                <ShoppingBagOutlinedIcon
                  sx={{ color: "#f4ab34", fontSize: "32px" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
