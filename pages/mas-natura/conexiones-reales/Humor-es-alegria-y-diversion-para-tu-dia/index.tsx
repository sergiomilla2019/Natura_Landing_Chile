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
import banner from "../../../../public/images/34-BLOG-desktop.png";
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
        Humor es alegría y diversión para tu día
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
        Tiempo de lectura: un minuto.<br/><br/>
        Perfumeria
        <br/><br/>

        ¿El mejor accesorio de todos? ¡El humor! La colección Humor es tu aliada. Fragancias vibrantes que juegan con los sentidos y aportan el espíritu atrevido y animado de los colores. Nos sumamos a las tendencias de la pasarela y del street style, porque tu sabes que ningún look está completo sin un perfume favorito. 
        <br/><br/>
        

        ¿Cuáles son las fragancias de Humor?
        <br/><br/>
        

        Humor Propio es la dulce fragancia llena de personalidad del portafolio de la marca. Tiene una lectura innovadora de la cereza, aportando el lado dulce del almíbar a su composición.
        <br/><br/>
        Por otro lado, Beijo de Humor es una fragancia exclusiva que despierta las ganas de besar. Humor celebra el beso, gesto icónico de amor que conecta, une y todos aman. Este perfume invita a conexiones y momentos más reales, a celebrar el amor y promover más momentos juntos. 
        <br/><br/>
        De los primeros perfumes Natura testeados por la neurociencia* que despiertan la atracción.
        <br/><br/>
        Es Frutal moderado, una mezcla inusual y apasionada de notas de ciruela, con calidez del sándalo y un toque cremoso de cacao. 
        <br/><br/>
        Una dosis extra de humor que garantiza mayor diversión a tu vida. ¿Con ganas de probarla?
        <br/><br/>
        

        Anímate a destacarte con la tendencia: irradia energía, contagia alegría con tu espíritu: tus elecciones hablan de ti. ¡Cuéntale al mundo cómo te sientes! Descubre tu Humor.
        <br/><br/> 

        *Basado en un estudio realizado por la Unidad de Neurociencia de Symrise Aromas y Fragancias LTDA, en Brasil, en el año 2019.
        <br/><br/>
        
        </Typography>
      </Box>
      
    </>
  );
};

export default index;
