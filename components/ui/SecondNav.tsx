import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import style from "../../styles/Nav.module.css";

import logoNatura from "../../public/images/LogoNatura.png";
import Image from "next/image";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#bbbbbb",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#bbbbbb ",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#bbbbbb ",
    },
    "&:hover fieldset": {
      borderColor: "#f4ab34",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f4ab34",
    },
  },
});

export const SecondNav = () => {
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          background: "#fff !important",
          padding: "1rem",
          position: "sticky",
          top: 50,
          zIndex: 11,
          boxShadow: "none !important",
        }}
        position="static"
      >
        <Box
          sx={{
            display: "flex",
            margin: "0 auto",
            width: "100%",
            maxWidth: "75rem",
          }}
        >
          <Box
            sx={{
              width: "75%",
              display: "flex",
              alignItems: "center",
              paddingRight: "28px",
            }}
          >
            <Image
              style={{ marginRight: "53px" }}
              alt="logo natura"
              height={54}
              width={72}
              src={logoNatura}
            />
            <Box sx={{ width: "100%" }}>
              <CssTextField
                fullWidth
                id="inputSearch"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          <Box
            className="myAcountNav"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "15rem",
              cursor: "pointer",
            }}
          >
            <AccountCircleOutlinedIcon
              sx={{ color: "#000", paddingRight: "1rem", fontSize: "50px" }}
            />
            <Box>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "14px" }}
                color="rgb(51, 51, 51)"
                variant="body1"
              >
                Mi cuenta
              </Typography>
              <Typography sx={{ fontSize: "12px" }} color="rgb(51, 51, 51)">
                Iniciar sesión o registrarse
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ paddingRight: "1.25rem" }} size="large">
              <FavoriteBorderOutlinedIcon
                sx={{
                  fontSize: "35px",
                  color: "#000",
                }}
              />
            </IconButton>
            <IconButton size="large">
              <ShoppingBagOutlinedIcon
                sx={{ fontSize: "35px", color: "#f4ab34" }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
