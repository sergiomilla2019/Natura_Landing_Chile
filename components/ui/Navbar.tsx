import { AppBar, Box, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FirstNav } from "./FirstNav";
import { SecondNav } from "./SecondNav";
import { ThirdNav } from "./ThirdNav";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <>
      <AppBar
        sx={{
          background: "#fff",
          position: "fixed",
          width: "100vw",
          zIndex: 11,
          top: 50,
        }}
      >
        <Toolbar
          sx={{
            position: "relative",
            width: "100%",
            padding: "0 !important",
          }}
        >
          <Box
            position="relative"
            sx={{ top: 0, height: "auto", zIndex: "20", width: "100%" }}
          >
            <Box
              position="relative"
              sx={{
                zIndex: "20",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            ></Box>
            {isVisible && <FirstNav />}
            <SecondNav />
            {isVisible && <ThirdNav />}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
