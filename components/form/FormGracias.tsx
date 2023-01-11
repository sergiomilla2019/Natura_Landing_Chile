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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

import { useForm } from "react-hook-form";

import { AxiosResponse } from "axios";

import style from "../../styles/ColorExpresion.module.css";
import tesloApi from "../../api/tesloApi";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  path: string;
}

type FormData = {
  email: string;
  comentario: string;
};

export const FormGracias = ({ path }: Props) => {
  const router = useRouter();
  //const [fecha, setfecha] = useState<Dayjs | null>(null);
  const { email } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const OnSendData = async (data: FormData) => {
    const { comentario } = data;
    console.log({ comentario, email }, "<--data--")

    try {
      const response = await fetch(`/api/${path}`, {
        method: "POST",
        body: JSON.stringify({
          email,
          comentario,
        }),
      }); 
      console.log(response);
      //window.location.assign("https://www.natura.cl/");
    } catch (error) {
      console.log("Front error: ", error);
    }

    //  try {
    //    const response: AxiosResponse = await tesloApi.post(path, {
    //      email,
    //      nombre,
    //      apellido,
    //      fecha,
    //      check1,
    //      check2,
    //      utm_medium,
    //      utm_source,
    //    });
    //    console.log(response);
    //  } catch (error) {
    //    console.log("Front error: ",error);
    //  }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "35px",
          fontWeight: "bold",
          padding: "25px 0",
          justifyContent:"center"
        }}
      >
        <Typography
          sx={{ fontWeight: "700", color: "#f93" }}
          variant="h5"
        >
          Conocer tu experiencia Natura nos ayuda a brindarte cada día lo mejor
        </Typography>
        <Typography
          sx={{ fontWeight: "700", color: "black" }}
          className={`${style.orangeLine}`}
          variant="h6"
        >
          Te invitamos a dejar tus comentarios y/o sugerencias aquí.<br />
          Tu opinión es muy importante para nosotros.
        </Typography>
        <Container>
          <Box sx={{ marginTop: "40px" }}>
            <form onSubmit={handleSubmit(OnSendData)}>
              
              <TextField
                sx={{ marginBottom: "25px", }}
                fullWidth
                id="nombre"
                variant="outlined"
                placeholder="Escriba su comentario"
                multiline
                rows={4}
                {...register("comentario", {
                  required: "Este campo es requerido...",
                })}
                required
              />
              
              
              <Box
                sx={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <Button
                  type="submit"
                  sx={{
                    background: "#f93",
                    fontSize: "1rem",
                    "&:hover": { background: "rgb(255,124,52)" },
                  }}
                  variant="contained"
                >
                  ENVIAR
                </Button>
              </Box>
              <Box sx={{ width: "100%", marginTop: "25px" }}>
                <Typography align="right" variant="body2">
                  Al registrarme, acepto la
                  <Link
                    target="_blank"
                    underline="none"
                    href="https://www.natura.cl/politicas-de-privacidad"
                  >
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
