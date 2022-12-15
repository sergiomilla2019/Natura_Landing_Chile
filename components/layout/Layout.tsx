import React, { FC, PropsWithChildren, useEffect, useState } from "react";

import { useTheme, useMediaQuery, Box } from "@mui/material";

import { Footer } from "../footer";
import { FooterMobile } from "../footer/FooterMobile";
import { Navbar } from "../ui/Navbar";
import { NavMobile, TopNav } from "../ui";

interface Props {
  title: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

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
      <TopNav />
      {matchesLG ? <Navbar /> : <NavMobile />}

      {matchesLG ? (
        <Box sx={{ paddingTop: isVisible ? "calc(140px + 6.25rem)" : "185px" }}>
          {children}
        </Box>
      ) : (
        <Box>
          {children}
        </Box>
      )}

      {matchesLG ? <Footer /> : <FooterMobile />}
    </>
  );
};
