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

import style from "../../../../styles/ColorExpresion.module.css";

//import { FormGracias } from "../../components/form";
import banner from "../../../../public/images/23-BLOG-desktop.png";
import bannerOrange from "../../../../public/images/CH_MiniBanner_regalo_+_envio.png";
import card_1_1 from "../../../../public/images/consciousBeauty_card_1_1.jpg";
import card_1_2 from "../../../../public/images/consciousBeauty_card_1_2.jpg";
import card_2 from "../../../../public/images/consciousBeauty_card_2.jpg";
import card_3_1 from "../../../../public/images/consciousBeauty_card_3_1.jpg";
import card_3_2 from "../../../../public/images/consciousBeauty_card_3_2.jpg";
import card_4 from "../../../../public/images/consciousBeauty_card_4.jpg";
import card_5 from "../../../../public/images/5_BLOG_desktop_0.png";
import card_6 from "../../../../public/images/6_BLOG_desktop.png";
import card_7 from "../../../../public/images/sn_BLOG_desktop.png";

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
      
      <Box
        sx={{ 
        width: "100%",
        p: "30px", 
        display: "flex",
        justifyContent: "center"
      }}
      >
        <Typography variant="h5" gutterBottom>
        TrendAlert: verano natural, lo que tus labios van a querer llevar
        </Typography>
      </Box>
      <Box
        sx={{  
        width: "100%",
        p: "30px", 
        display: "flex",
        justifyContent: "center"
      }}
      >
        <Typography variant="body1" gutterBottom>
        Tiempo de lectura: menos de dos minutos.
        <br/><br/>

La libertad para expresarte es un sí y en materia de #maquillaje tienes muchas alas para probar, para elegir y para decidir qué es lo mejor que va contigo. Pensar en verano es pensar en alegría, felicidad, disfrute y espontaneidad. 
<br/><br/>

Queremos contarte algunas de las #tendencias con respecto a labiales esta temporada. Nuestros productos prometen acompañarte para que vivas este verano natural acorde a tu estilo. Como su nombre lo indica, busca priorizar el color natural de la piel, y la sensación de estar bronceada y luminosa por las horas al aire libre y al sol (por supuesto, siempre con protección).
<br/><br/>

¿Qué vamos a ver? 
<br/><br/>

El uso del color carne para dar a tus labios la sensación de volumen, que ya se viene usando. La clave es definir los bordes por fuera con un color más oscuro (para “agrandarlos”), y en el centro aplicar un tono más claro para generar un degradé y potenciar el volumen. El efecto mate y la textura aterciopelada también serán protagonistas. Recuerda que la clave es priorizar el look natural, que se funde sin dificultades con tu propia piel. 
<br/><br/>

En sintonía con este estilo que veremos desfilar durante los meses de verano, tres colores no pueden faltar en tus básicos de temporada: nude, tierra y rosa. 
<br/><br/>

#Recordatorio: tu estilo y cómo decidís llevarlo habla de ti. Destaca tu belleza, lo que te hace única y especial. ¿Qué vas a expresar con tu maquillaje de verano? ¡Cuéntanos!
<br/><br/>

        </Typography>
      </Box>
      
    </>
  );
};

export default index;
