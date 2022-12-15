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
import banner from "../../public/images/consciousBeauty_banner.jpg";
import bannerOrange from "../../public/images/consciousBeauty_bannerOrange.jpg";
import card_1_1 from "../../public/images/consciousBeauty_card_1_1.jpg";
import card_1_2 from "../../public/images/consciousBeauty_card_1_2.jpg";
import card_2 from "../../public/images/consciousBeauty_card_2.jpg";
import card_3_1 from "../../public/images/consciousBeauty_card_3_1.jpg";
import card_3_2 from "../../public/images/consciousBeauty_card_3_2.jpg";
import card_4 from "../../public/images/consciousBeauty_card_4.jpg";
import card_5 from "../../public/images/consciousBeauty_card_5.jpg";
import card_6 from "../../public/images/consciousBeauty_card_6.jpg";
import card_7 from "../../public/images/consciousBeauty_card_7.jpg";

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
      <Form path="/belleza-consciente"/>
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
            <Card sx={{ maxWidth: 300, height: "560px" }}>
              <Box
                position="relative"
                onMouseEnter={() => setcard1(true)}
                onMouseLeave={() => setcard1(false)}
              >
                <Link href="https://www.natura.cl/p/tonico-capilar-pataua-ekos-30ml/73189cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=1">
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
                    Ekos
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
                  href="https://www.natura.cl/p/tonico-capilar-pataua-ekos-30ml/73189cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=1"
                >
                  <Typography className={`${style.cardText}`} variant="body1">
                    Tónico Capilar Ekos Patauá
                  </Typography>
                </Link>
                <Typography
                  sx={{ marginTop: "25px", fontWeight: "700" }}
                  variant="body1"
                  color="#333333"
                >
                  $8.490
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
            <Card sx={{ maxWidth: 300, height: "560px" }}>
              <Box position="relative">
                <Link
                  underline="none"
                  href="https://www.natura.cl/p/jabon-liquido-exfoliante-corporal-ekos-acai-185-ml/97261cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=2"
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
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography color="#777777" variant="body2">
                    Ekos
                  </Typography>
                </Box>
                <Box sx={{ height: "2.625rem", marginTop: "20px" }}>
                  <Link
                    underline="none"
                    href="https://www.natura.cl/p/jabon-liquido-exfoliante-corporal-ekos-acai-185-ml/97261cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=2"
                  >
                    <Typography className={`${style.cardText}`} variant="body1">
                      Jabón líquido exfoliante corporal Ekos Acaí
                    </Typography>
                  </Link>
                </Box>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "30px" }}
                  variant="body1"
                  color="#333333"
                >
                  $6.990
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
            <Card sx={{ maxWidth: 300, height: "560px" }}>
              <Box
                position="relative"
                onMouseEnter={() => setcard3(true)}
                onMouseLeave={() => setcard3(false)}
              >
                <Link href="https://www.natura.cl/p/aceite-trifasico-corporal-maracuya-ekos-200ml/82442cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=3">
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
                    Ekos
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
                  href="https://www.natura.cl/p/aceite-trifasico-corporal-maracuya-ekos-200ml/82442cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=3"
                >
                  <Typography className={`${style.cardText}`} variant="body1">
                    Aceite Trifásico Corporal Ekos Maracuyá
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "25px" }}
                  variant="body1"
                  color="#333333"
                >
                  $12.490
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
            <Card sx={{ maxWidth: 300, height: "560px" }}>
              <Box position="relative">
                <Link href="https://www.natura.cl/p/aceite-de-masaje-ekos-andiroba-100ml/108588cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=4">
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
                    Ekos
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
                <Box sx={{ height: "2.625rem" }}>
                  <Link
                    underline="none"
                    href="https://www.natura.cl/p/aceite-de-masaje-ekos-andiroba-100ml/108588cl?listTitle=manual%20showcase%20-%20productos%20para%20descubrir&list_position=4"
                  >
                    <Typography className={`${style.cardText}`} variant="body1">
                      Aceite de Masaje Ekos Andiroba
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
                    $7.990
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
                <Link href="https://www.natura.cl/a-natura/mas-natura/regalos-con-sentido-elige-mas-consciente">
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
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fregalos-con-sentido-elige-mas-consciente"
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
                    href="https://www.twitter.com/share?text=REGALOS%20CON%20SENTIDO:%20ELIGE%20M%C3%81S%20CONSCIENTE&url=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fregalos-con-sentido-elige-mas-consciente&via=natura_chile"
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
                  href="https://www.natura.cl/a-natura/mas-natura/regalos-con-sentido-elige-mas-consciente"
                >
                  <Typography
                    color="#000"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    className={`${style.card2Text}`}
                    variant="body2"
                  >
                    REGALOS CON SENTIDO: ELIGE MÁS CONSCIENTE
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "25px" }}
                  variant="body2"
                  color="#636363"
                >
                  En cada regalo, un mundo de afectos
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
                    href="https://www.natura.cl/a-natura/mas-natura/regalos-con-sentido-elige-mas-conscientes"
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
                <Link href="https://www.natura.cl/a-natura/mas-natura/ipl-nuestro-compromiso-real-contigo-la-sociedad-y-el-medio-ambiente">
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
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fipl-nuestro-compromiso-real-contigo-la-sociedad-y-el-medio-ambiente"
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
                    href="https://twitter.com/intent/tweet?text=IP&L%3A%20nuestro%20compromiso%20real%20contigo%2C%20la%20sociedad%20y%20el%20medio%20ambiente=&url=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fmas-natura%2Fipl-nuestro-compromiso-real-contigo-la-sociedad-y-el-medio-ambiente&via=natura_chile"
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
                  href="https://www.natura.cl/a-natura/mas-natura/ipl-nuestro-compromiso-real-contigo-la-sociedad-y-el-medio-ambiente"
                >
                  <Typography
                    color="#000"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    className={`${style.card2Text}`}
                    variant="body2"
                  >
                    IP&L: nuestro compromiso real contigo, la sociedad y el
                    medio ambiente
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "15px" }}
                  variant="body2"
                  color="#636363"
                >
                  ¿A dónde estamos, a dónde vamos?
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
                    href="https://www.natura.cl/a-natura/mas-natura/ipl-nuestro-compromiso-real-contigo-la-sociedad-y-el-medio-ambiente"
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
                <Link href="https://www.natura.cl/a-natura/sustentabilidad/7-ideas-para-transformar-tu-rutina-de-belleza">
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
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fsustentabilidad%2F7-ideas-para-transformar-tu-rutina-de-belleza"
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
                    href="https://twitter.com/intent/tweet?text=7%20IDEAS%20PARA%20TRANSFORMAR%20TU%20RUTINA%20DE%20BELLEZA&url=https%3A%2F%2Fwww.natura.cl%2Fa-natura%2Fsustentabilidad%2F7-ideas-para-transformar-tu-rutina-de-belleza&via=natura_chile"
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
                    Sustentabilidad
                  </Typography>
                </Box>
                <Link
                  underline="none"
                  href="https://www.natura.cl/a-natura/sustentabilidad/7-ideas-para-transformar-tu-rutina-de-belleza"
                >
                  <Typography
                    color="#000"
                    sx={{ "&:hover": { textDecoration: "underline" } }}
                    className={`${style.card2Text}`}
                    variant="body2"
                  >
                    7 IDEAS PARA TRANSFORMAR TU RUTINA DE BELLEZA
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontWeight: "bold", marginTop: "15px" }}
                  variant="body2"
                  color="#636363"
                >
                  Más belleza, menos residuos: 7 hábitos en armonía con el
                  planeta
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
                    href="https://www.natura.cl/a-natura/sustentabilidad/7-ideas-para-transformar-tu-rutina-de-belleza"
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
