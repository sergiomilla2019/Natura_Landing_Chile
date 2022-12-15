import { AppBar, Box, Link, Toolbar } from "@mui/material";

import style from "../../styles/Nav.module.css";

export const ThirdNav = () => {
  return (
    <>
      <Box sx={{ background: "#fff", position: "inherit", padding: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            margin: "0 auto",
            width: "100%",
            maxWidth: "75rem",
            justifyContent: "space-between",
            boxShadow: "none !important",
          }}
        >
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/promociones/promociones"
            >
              PROMOCIONES
            </Link>
          </Box>
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/navidad"
            >
              NAVIDAD 🎄
            </Link>
          </Box>
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/cuidados-diarios"
            >
              CUIDADOS DIARIOS
            </Link>
          </Box>
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/perfumeria"
            >
              PERFUMERÍA
            </Link>
          </Box>
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/maquillaje"
            >
              MAQUILLAJE
            </Link>
          </Box>
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/cabello"
            >
              CABELLO
            </Link>
          </Box>
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/rostro"
            >
              ROSTRO
            </Link>
          </Box>
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/veganos"
            >
              VEGANOS
            </Link>
          </Box>
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/repuestos"
            >
              REPUESTOS
            </Link>
          </Box>
          <Box>
            <Link
              sx={{ color: "#000", "&:hover": { color: "#f4ab34" } }}
              underline="none"
              href="https://www.natura.cl/c/outlet"
            >
              OUTLET
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
