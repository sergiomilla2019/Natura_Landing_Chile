import { useState } from "react";

import Image from "next/image";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Link,
  Chip,
  IconButton,
} from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import style from "../../styles/ColorExpresion.module.css";

import { Form } from "../../components/form";
import banner from "../../public/images/realConextion_banner.jpg";
import bannerOrange from "../../public/images/CH_MiniBanner_regalo_+_envio.png";
import card_1_1 from "../../public/images/realConextion_Card_1_1.jpg";
import card_1_2 from "../../public/images/realConextion_Card_1_2.jpg";
import card_2_1 from "../../public/images/realConextion_Card_2_1.jpg";
import card_2_2 from "../../public/images/realConextion_Card_2_2.jpg";
import card_3 from "../../public/images/34-BLOG-desktop.png";
import card_4 from "../../public/images/35-BLOG-desktop.png";
import card_5 from "../../public/images/33-BLOG-desktop.png";


const index = () => {
  const [card1, setcard1] = useState(false);
  const [card2, setcard2] = useState(false);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Image
          alt=""
          src={banner}
          style={{ width: "100%", objectFit: "cover", height: "auto" }}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Image
          alt="Mountains"
          src={bannerOrange}
          style={{ width: "100%", objectFit: "cover", height: "auto" }}
        />
      </Box>
      <Form path="/conexiones-reales_v01" />
      <Box
        sx={{ padding: "40px 0", width: "100%", backgroundColor: "#f5f5f5" }}
      >
        <Typography
          textAlign="center"
          className={`${style.orangeLine}`}
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
          variant="h6"
        >
          PRODUCTOS PARA DESCUBRIR
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              margin: "25px 20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <Box
                position="relative"
                onMouseEnter={() => setcard1(true)}
                onMouseLeave={() => setcard1(false)}
              >
                <Link href="https://www.natura.cl/p/mascarilla-exfoliante-reductora-de-poros-faces-50ml/85003cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=1">
                  <Image
                    style={{
                      display: card1 ? "none" : "block",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_1_1}
                  />
                  <Image
                    style={{
                      display: card1 ? "block" : "none",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_1_2}
                  />
                </Link>
                <Box
                  sx={{
                    top: "0",
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                    padding: "1rem",
                  }}
                  position="absolute"
                >
                  <IconButton size="large">
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
              <CardContent sx={{ height: "200px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography color="#777777" variant="body2">
                    FACES
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconButton size="large">
                      <StarIcon sx={{ color: "#ffb74d" }} />
                    </IconButton>
                    <Typography color="#777777" variant="body2">
                      4.0
                    </Typography>
                  </Box>
                </Box>
                <Link
                  underline="none"
                  href="https://www.natura.cl/p/mascarilla-exfoliante-reductora-de-poros-faces-50ml/85003cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=1"
                >
                  <Typography
                    sx={{ fontWeight: "700" }}
                    className={`${style.cardText}`}
                    variant="body1"
                  >
                    Máscara Facial Exfoliante Reductora de Poros Natura Faces
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "25px" }}
                  variant="body1"
                  color="#333333"
                >
                  $5.990
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  sx={{
                    margin: "0 10px",
                    borderColor: "#f93",
                    color: "#333333",
                    fontWeight: "bold",
                    "&:hover": { borderColor: "rgb(255,124,52)" },
                  }}
                  variant="outlined"
                  href="https://www.natura.cl/p/mascarilla-exfoliante-reductora-de-poros-faces-50ml/85003cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=1"
                >
                  COMPRAR
                </Button>
              </CardActions>
            </Card>
          </Box>
          <Box
            sx={{
              margin: "25px 20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <Box
                position="relative"
                onMouseEnter={() => setcard2(true)}
                onMouseLeave={() => setcard2(false)}
              >
                <Link href="https://www.natura.cl/p/hidratante-facial-aclarador-fps-15-piel-oleosa-faces-50ml/91821cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=3">
                  <Image
                    style={{
                      display: card2 ? "none" : "block",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_2_1}
                  />
                  <Image
                    style={{
                      display: card2 ? "block" : "none",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_2_2}
                  />
                </Link>
                <Box
                  sx={{
                    top: "0",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "1rem",
                  }}
                  position="absolute"
                >
                  <Chip
                    label="Vegano"
                    sx={{ background: "rgb(125, 229, 37)", color: "#fff" }}
                  />
                  <IconButton size="large">
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
              <CardContent sx={{ height: "200px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography color="#777777" variant="body2">
                    FACES
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconButton size="large">
                      <StarIcon sx={{ color: "#ffb74d" }} />
                    </IconButton>
                    <Typography color="#777777" variant="body2">
                      4.5
                    </Typography>
                  </Box>
                </Box>
                <Link
                  underline="none"
                  href="https://www.natura.cl/p/hidratante-facial-aclarador-fps-15-piel-oleosa-faces-50ml/91821cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=3"
                >
                  <Typography className={`${style.cardText}`} variant="body1">
                    Hidratante Facial Piel Normal a Seca Faces
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "25px" }}
                  variant="body1"
                  color="#333333"
                >
                  $5.990
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  sx={{
                    margin: "0 10px",
                    borderColor: "#f93",
                    color: "#333333",
                    fontWeight: "bold",
                    "&:hover": { borderColor: "rgb(255,124,52)" },
                  }}
                  variant="outlined"
                  href="https://www.natura.cl/p/hidratante-facial-aclarador-fps-15-piel-oleosa-faces-50ml/91821cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=3"
                >
                  COMPRAR
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Box>

      <Box sx={{ padding: "40px 0", width: "100%" }}>
        <Typography
          textAlign="center"
          className={`${style.orangeLine}`}
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
          variant="h5"
        >
          #IDEASPARACOMPARTIR
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              margin: "40px 30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 375, minHeight: "30rem", boxShadow: "none" }}>
              <Box position="relative">
                <Link href="mas-natura/conexiones-reales/Humor-es-alegria-y-diversion-para-tu-dia">
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_3}
                  />
                </Link>
                <Box
                  sx={{
                    top: "0",
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                    padding: "2rem",
                  }}
                  position="absolute"
                >
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fmeditacion-5-desafios-comunes-y-como-superarlos"
                    sx={{
                      border: ".5px solid #fff",
                      padding: "8px",
                      cursor: "pointer",
                      "&:hover": { background: "rgba(255,255,255,.4)" },
                    }}
                  >
                    <FacebookIcon sx={{ color: "#fff" }} />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.twitter.com/share?text=MEDITACI%C3%93N:%205%20DESAF%C3%8DOS%20COMUNES%20Y%20C%C3%93MO%20SUPERARLOS&url=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fmeditacion-5-desafios-comunes-y-como-superarlos&via=natura_chile"
                    sx={{
                      border: ".5px solid #fff",
                      padding: "8px",
                      cursor: "pointer",
                      "&:hover": { background: "rgba(255,255,255,.4)" },
                    }}
                  >
                    <TwitterIcon sx={{ color: "#fff" }} />
                  </Link>
                </Box>
              </Box>
              <CardContent sx={{ height: "200px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <Typography color="#777777" variant="body2">
                    Más Natura
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  href="mas-natura/conexiones-reales/Humor-es-alegria-y-diversion-para-tu-dia"
                >
                  <Typography
                    color="#000"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    className={`${style.card2Text}`}
                    variant="body2"
                  >
                    Humor es alegría y diversión para tu día
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "25px" }}
                  variant="body2"
                  color="#636363"
                >
                  
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "20px" }}
                  variant="body2"
                  color="#b4b4b4"
                >
                  22/12/2022
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    cursor: "pointer",
                    marginTop: "5px",
                  }}
                >
                  <Link
                    href="mas-natura/conexiones-reales/Humor-es-alegria-y-diversion-para-tu-dia"
                    underline="none"
                    sx={{
                      color: "#4a90e2",
                      marginRight: "5px",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Lea más
                  </Link>
                  <ArrowForwardIcon
                    fontSize="small"
                    sx={{ color: "#4a90e2" }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              margin: "40px 30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 375, minHeight: "30rem", boxShadow: "none" }}>
              <Box position="relative">
                <Link href="mas-natura/conexiones-reales/Autocuidado-los-7-imprescindibles-de-Natura">
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_4}
                  />
                </Link>
                <Box
                  sx={{
                    top: "0",
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                    padding: "2rem",
                  }}
                  position="absolute"
                >
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fpiel%2Fpaso-a-paso-para-una-rutina-de-skincare"
                    sx={{
                      border: ".5px solid #fff",
                      padding: "8px",
                      cursor: "pointer",
                      "&:hover": { background: "rgba(255,255,255,.4)" },
                    }}
                  >
                    <FacebookIcon sx={{ color: "#fff" }} />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://twitter.com/share?text=PASO%20A%20PASO%20PARA%20UNA%20RUTINA%20DE%20SKINCARE&url=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fpiel%2Fpaso-a-paso-para-una-rutina-de-skincare&via=natura_chile"
                    sx={{
                      border: ".5px solid #fff",
                      padding: "8px",
                      cursor: "pointer",
                      "&:hover": { background: "rgba(255,255,255,.4)" },
                    }}
                  >
                    <TwitterIcon sx={{ color: "#fff" }} />
                  </Link>
                </Box>
              </Box>
              <CardContent sx={{ height: "200px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <Typography color="#777777" variant="body2">
                    Piel
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  href="mas-natura/conexiones-reales/Autocuidado-los-7-imprescindibles-de-Natura"
                >
                  <Typography
                    color="#000"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    className={`${style.card2Text}`}
                    variant="body2"
                  >
                    #Autocuidado: los 7 imprescindibles de #Natura
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "15px" }}
                  variant="body2"
                  color="#636363"
                >
                  Los 7 #ElegidosNatura para ti y para tu ritual de belleza.
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "20px" }}
                  variant="body2"
                  color="#b4b4b4"
                >
                  29/11/2022
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    cursor: "pointer",
                    marginTop: "5px",
                  }}
                >
                  <Link
                    href="mas-natura/conexiones-reales/Autocuidado-los-7-imprescindibles-de-Natura"
                    underline="none"
                    sx={{
                      color: "#4a90e2",
                      marginRight: "5px",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Lea más
                  </Link>
                  <ArrowForwardIcon
                    fontSize="small"
                    sx={{ color: "#4a90e2" }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              marginTop: "40px 30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 375, minHeight: "30rem", boxShadow: "none" }}>
              <Box position="relative">
                <Link href="mas-natura/conexiones-reales/Cabellos-tenidos-la-clave-de-los-3-pasos-en-la-rutina-de-cuidados">
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_5}
                  />
                </Link>
                <Box
                  sx={{
                    top: "0",
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                    padding: "2rem",
                  }}
                  position="absolute"
                >
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fmeditacion-natura-conoce-nuestra-app-para-meditar"
                    sx={{
                      border: ".5px solid #fff",
                      padding: "8px",
                      cursor: "pointer",
                      "&:hover": { background: "rgba(255,255,255,.4)" },
                    }}
                  >
                    <FacebookIcon sx={{ color: "#fff" }} />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://twitter.com/share?text=MEDITACI%C3%93N%20NATURA:%20CONOCE%20NUESTRA%20APP%20PARA%20MEDITAR&url=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fmeditacion-natura-conoce-nuestra-app-para-meditar&via=natura_chile"
                    sx={{
                      border: ".5px solid #fff",
                      padding: "8px",
                      cursor: "pointer",
                      "&:hover": { background: "rgba(255,255,255,.4)" },
                    }}
                  >
                    <TwitterIcon sx={{ color: "#fff" }} />
                  </Link>
                </Box>
              </Box>
              <CardContent sx={{ height: "200px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <Typography color="#777777" variant="body2">
                    Más Natura
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  href="mas-natura/conexiones-reales/Cabellos-tenidos-la-clave-de-los-3-pasos-en-la-rutina-de-cuidados"
                >
                  <Typography
                    color="#000"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    className={`${style.card2Text}`}
                    variant="body2"
                  >
                    Cabellos teñidos: la clave de los 3 pasos en la rutina de cuidados
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "15px" }}
                  variant="body2"
                  color="#636363"
                >
                  #Cabello
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "20px" }}
                  variant="body2"
                  color="#b4b4b4"
                >
                  29/11/2022
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    cursor: "pointer",
                    marginTop: "5px",
                  }}
                >
                  <Link
                    href="mas-natura/conexiones-reales/Cabellos-tenidos-la-clave-de-los-3-pasos-en-la-rutina-de-cuidados"
                    underline="none"
                    sx={{
                      color: "#4a90e2",
                      marginRight: "5px",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Lea más
                  </Link>
                  <ArrowForwardIcon
                    fontSize="small"
                    sx={{ color: "#4a90e2" }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default index;
