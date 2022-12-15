import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Link,
} from "@mui/material";

import style from "../../styles/ColorExpresion.module.css";

export const Form = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "35px",
          fontWeight: "bold",
          padding: '25px 0'
        }}
      >
        <Typography sx={{ fontWeight: '700' }} className={`${style.orangeLine}`} variant="h6">
          LOS PRODUCTOS QUE BUSCABAS, CON EL DESCUENTO QUE QUERÍAS
        </Typography>
        <Container>
          <Box sx={{ marginTop: "40px" }}>
            <form>
              <Typography align="left" variant="body2">
                NOMBRE
              </Typography>
              <TextField
                sx={{ marginBottom: "25px" }}
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <Typography align="left" variant="body2">
                APELLIDO
              </Typography>
              <TextField
                sx={{ marginBottom: "25px" }}
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <Typography align="left" variant="body2">
                E-MAIL
              </Typography>
              <TextField
                sx={{ marginBottom: "25px" }}
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <Typography align="left" variant="body2">
                FECHA DE NACIMIENTO
              </Typography>
              <TextField
                sx={{ marginBottom: "25px" }}
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <FormControlLabel
                sx={{ marginBottom: "25px", width: "100%" }}
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#f93",
                      "&.Mui-checked": {
                        color: "#f93",
                      },
                    }}
                  />
                }
                label="Deseo recibir promociones y noticias de Natura por e-mail y SMS"
              />
              <FormControlLabel
                sx={{ marginBottom: "25px", width: "100%" }}
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#f93",
                      "&.Mui-checked": {
                        color: "#f93",
                      },
                    }}
                  />
                }
                label="Confirmo ser mayor de 18 años y estoy de acuerdo con la Política de Privacidad y Condiciones de Uso."
              />
              <Box
                sx={{ width: "100%", display: "flex", justifyContent: "start" }}
              >
                <Button
                  sx={{
                    background: "#f93",
                    fontSize: "1rem",
                    "&:hover": { background: "rgb(255,124,52)" },
                  }}
                  variant="contained"
                >
                  QUIERO MI DESCUENTO
                </Button>
              </Box>
              <Box sx={{ width: "100%", marginTop: "25px" }}>
                <Typography align="right" variant="body2">
                  Al registrarme, acepto la{" "}
                  <Link target="_blank" underline="none" href="https://www.natura.cl/politicas-de-privacidad">
                    Política de privacidad
                  </Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
};
