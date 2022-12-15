import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";

import iconCar from "../../public/images/CarNabIcon.png";

export const TopNav = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "1rem",
          backgroundImage:
            "linear-gradient(to right, rgb(105, 205, 52), rgb(102, 204, 204))",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 410,
        }}
      >
        <Container sx={{ position: "relative" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "700", marginRight: "10px" }}
              color="#000"
            >
              ¡Tienes envío GRATIS agregando Regalos a tu carrito! 🚚
            </Typography>
          </Box>
          <Box
            position="absolute"
            sx={{
              top: "-20px",
              right: "-60px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              style={{ maxWidth: "36px", objectFit: "contain" }}
              alt="Icono Auto"
              src={iconCar}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};
