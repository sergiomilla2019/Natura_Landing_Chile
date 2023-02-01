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
import banner from "../../public/images/expresionColorBanner.png";
import bannerOrange from "../../public/images/expresionColorBannerOrange.jpg";
import card_1_1 from "../../public/images/expresionColorCard1_1.jpg";
import card_1_2 from "../../public/images/expresionColorCard1_2.jpg";
import card_2 from "../../public/images/expresionColorCard2_1.jpg";
import card_3_1 from "../../public/images/expresionColorCard3_1.jpg";
import card_3_2 from "../../public/images/expresionColorCard3_2.jpg";
import card_4_1 from "../../public/images/expresionColorCard4_1.jpg";
import card_4_2 from "../../public/images/expresionColorCard4_2.jpg";
import card_5 from "../../public/images/23-BLOG-desktop.png";
import card_6 from "../../public/images/18-BLOG-desktop.png";
import card_7 from "../../public/images/21--BLOG-desktop.png";

const index = () => {
  const [card1, setcard1] = useState(false);
  const [card3, setcard3] = useState(false);
  const [card4, setcard4] = useState(false);

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
      <Form path="/expresion-de-color" />
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
              margin: "25px 5px",
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
                <Link href="https://www.natura.cl/p/labial-cremoso-faces-3%2C5g/3699cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=1%3Fcolor%3DRosa%20Crush">
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
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "1rem",
                  }}
                  position="absolute"
                >
                  <Chip
                    label="Lleva 2 y paga 1"
                    sx={{ background: "rgb(234, 110, 200)", color: "#fff" }}
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
                      5.0
                    </Typography>
                  </Box>
                </Box>
                <Link
                  underline="none"
                  href="https://www.natura.cl/p/labial-cremoso-faces-3%2C5g/3699cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=1%3Fcolor%3DRosa%20Crush"
                >
                  <Typography className={`${style.cardText}`} variant="body1">
                    Labial Cremoso Natura Faces
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "25px" }}
                  variant="body1"
                  color="#333333"
                >
                  $3.990
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
                  href="https://www.natura.cl/p/labial-cremoso-faces-3%2C5g/3699cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=1%3Fcolor%3DRosa%20Crush"
                >
                  COMPRAR
                </Button>
              </CardActions>
            </Card>
          </Box>
          <Box
            sx={{
              margin: "25px 5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <Box position="relative">
                <Link
                  underline="none"
                  href="https://www.natura.cl/p/repuesto-shampoo-reestructurante-cabello-quimicamente-danado-lumina-300ml/86940cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=2"
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_2}
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
                    LUMINA
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
                <Box sx={{ height: "2.625rem" }}>
                  <Link
                    underline="none"
                    href="https://www.natura.cl/p/repuesto-shampoo-reestructurante-cabello-quimicamente-danado-lumina-300ml/86940cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=2"
                  >
                    <Typography className={`${style.cardText}`} variant="body1">
                      Repuesto Shampoo reestructurante Cabello Químicamente
                      Dañado
                    </Typography>
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Typography
                    sx={{
                      marginTop: "15px",
                      textDecoration: "line-through",
                      marginRight: "5px",
                    }}
                    variant="body1"
                    color="#777777"
                  >
                    $4.990
                  </Typography>
                  <Chip
                    size="small"
                    label="-20%"
                    sx={{
                      background: "rgb(244, 171, 52)",
                      color: "rgb(51, 51, 51)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  color="#333333"
                >
                  $3.990
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
                  href="https://www.natura.cl/p/repuesto-shampoo-reestructurante-cabello-quimicamente-danado-lumina-300ml/86940cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=2"
                >
                  COMPRAR
                </Button>
              </CardActions>
            </Card>
          </Box>
          <Box
            sx={{
              margin: "25px 5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <Box
                position="relative"
                onMouseEnter={() => setcard3(true)}
                onMouseLeave={() => setcard3(false)}
              >
                <Link href="https://www.natura.cl/p/hidratante-facial-aclarador-fps-15-piel-oleosa-faces-50ml/91821cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=3">
                  <Image
                    style={{
                      display: card3 ? "none" : "block",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_3_1}
                  />
                  <Image
                    style={{
                      display: card3 ? "block" : "none",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_3_2}
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
                    Hidratante Facial Piel Mixta a Oleosa Natura Faces
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
          <Box
            sx={{
              margin: "25px 5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <Box
                position="relative"
                onMouseEnter={() => setcard4(true)}
                onMouseLeave={() => setcard4(false)}
              >
                <Link href="https://www.natura.cl/p/mascara-de-pestana-incolora-faces-7ml/67647cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=4">
                  <Image
                    style={{
                      display: card4 ? "none" : "block",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_4_1}
                  />
                  <Image
                    style={{
                      display: card4 ? "block" : "none",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_4_2}
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
                    label="Lleva 2 y paga 1"
                    sx={{ background: "rgb(234, 110, 200)", color: "#fff" }}
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
                    LUMINA
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
                      3.0
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ height: "2.625rem" }}>
                  <Link
                    underline="none"
                    href="https://www.natura.cl/p/mascara-de-pestana-incolora-faces-7ml/67647cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=4"
                  >
                    <Typography className={`${style.cardText}`} variant="body1">
                      Máscara Fantástica Incolora Natura Faces
                    </Typography>
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Typography
                    sx={{
                      marginTop: "15px",
                      textDecoration: "line-through",
                      marginRight: "5px",
                    }}
                    variant="body1"
                    color="#777777"
                  >
                    $4.990
                  </Typography>
                  <Chip
                    size="small"
                    label="-30%"
                    sx={{
                      background: "rgb(244, 171, 52)",
                      color: "rgb(51, 51, 51)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  color="#333333"
                >
                  $3.490
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
                  href="https://www.natura.cl/p/mascara-de-pestana-incolora-faces-7ml/67647cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=4"
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
                <Link href="mas-natura/expresion-de-color/TrendAlert-verano-natural-lo-que-tus-labios-van-a-querer-llevar">
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
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmaquillaje%2Fsuaves-dimensiones"
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
                    href="https://twitter.com/share?text=SUAVES%20DIMENSIONES&url=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmaquillaje%2Fsuaves-dimensiones&via=natura_chile"
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
                    Maquillaje
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  href="mas-natura/expresion-de-color/TrendAlert-verano-natural-lo-que-tus-labios-van-a-querer-llevar"
                >
                  <Typography
                    color="#000"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    className={`${style.card2Text}`}
                    variant="body2"
                  >
                    #TRENDALERT: VERANO NATURAL, LO QUE TUS LABIOS VAN A QUERER LLEVAR
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "25px" }}
                  variant="body2"
                  color="#636363"
                >
                  La libertad para expresarte es un sí y en materia de #maquillaje
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "20px" }}
                  variant="body2"
                  color="#b4b4b4"
                >
                  21/12/2022
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
                    href="mas-natura/expresion-de-color/TrendAlert-verano-natural-lo-que-tus-labios-van-a-querer-llevar"
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
                <Link href="mas-natura/expresion-de-color/TeamGanador-Chronos-Acqua-Biohidratante-Renovador-y-Cremas-Anti-Senales">
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_6}
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
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fluz-azul-que-es-y-como-proteger-la-piel-de-sus-efectos"
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
                    href="https://twitter.com/share?text=LUZ%20AZUL:%20QU%C3%89%20ES%20Y%20C%C3%93MO%20PROTEGER%20LA%20PIEL%20DE%20SUS%20EFECTOS&url=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fluz-azul-que-es-y-como-proteger-la-piel-de-sus-efectos&via=natura_chile"
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
                  href="mas-natura/expresion-de-color/TeamGanador-Chronos-Acqua-Biohidratante-Renovador-y-Cremas-Anti-Senales"
                >
                  <Typography
                    color="#000"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    className={`${style.card2Text}`}
                    variant="body2"
                  >
                    TeamGanador: Chronos Acqua Biohidratante Renovador y Cremas Anti-Señales
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "15px" }}
                  variant="body2"
                  color="#636363"
                >
                  ¿Cuál es el secreto de una rutina de belleza exitosa?
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
                    href="mas-natura/expresion-de-color/TeamGanador-Chronos-Acqua-Biohidratante-Renovador-y-Cremas-Anti-Senales"
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
                <Link href="mas-natura/expresion-de-color/Hidratacion-de-la-piel-los-mitos-y-las-verdades-que-tienes-que-saber">
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="card1"
                    src={card_7}
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
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmaquillaje%2Fcomo-comprar-maquillaje-por-internet-sin-errores"
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
                    href="https://twitter.com/intent/tweet?text=C%C3%93MO%20COMPRAR%20MAQUILLAJE%20POR%20INTERNET%20SIN%20ERRORES&url=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmaquillaje%2Fcomo-comprar-maquillaje-por-internet-sin-errores&via=natura_chile"
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
                    Hidratación
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  href="mas-natura/expresion-de-color/Hidratacion-de-la-piel-los-mitos-y-las-verdades-que-tienes-que-saber"
                >
                  <Typography
                    color="#000"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    className={`${style.card2Text}`}
                    variant="body2"
                  >
                    Hidratación de la piel: los mitos y las verdades que tienes que saber
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "15px" }}
                  variant="body2"
                  color="#636363"
                >
                  #RompamosMitos: qué sí y que no con respecto a la hidratación de la piel.
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
                    href="mas-natura/expresion-de-color/Hidratacion-de-la-piel-los-mitos-y-las-verdades-que-tienes-que-saber"
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
