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
import banner from "../../../../public/images/35-BLOG-desktop.png";
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
        #Autocuidado: los 7 imprescindibles de #Natura
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
        Tiempo de lectura: menos de tres minutos.
        <br/><br/>
          Piel
          <br/><br/>
          A la hora de hablar de belleza no podemos dejar de mencionar la salud de tu cabello, la piel de tu rostro y tu maquillaje favorito (como si fueras una profesional). Eso sí, verte bien tiene un componente fundamental, como es la autoestima, que va acompañada del autocuidado. Las tecnologías de Lumina, Chronos y Una, garantizan lo que estás buscando porque  ofrecen soluciones altamente efectivas y un verdadero tratamiento, así como resultados sorprendentes y comprobados.
          <br/><br/>


          Los 7 #ElegidosNatura para ti y para tu ritual de belleza:
          <br/><br/>


          Un cabello saludable dice mucho
          <br/><br/>


          Si bien sabemos que eres consciente sobre el cuidado del agua como recurso, el baño es un momento clave para relajarse y cuidar de tu cabello. Si quieres un ritual de alta performance, la tecnología del sistema de tratamiento para Cabellos Secos de Natura Lumina es la respuesta. Gracias a la biotecnología Pro-Tela, promueve una reparación profunda, indicado para cabellos con daño moderado.
          <br/><br/>


          Por su parte, el Champú Nutritivo para Cabellos Secos promueve el doble de suavidad e hidratación, además de reparar y fortalecer la fibra capilar #WinWin. La Máscara Reparadora para Cabello Seco es un tratamiento inmediato y progresivo, desde el interior hacia el exterior, reduciendo las puntas abiertas, ya que penetra en el cabello a través de la cutícula, potenciando la restauración de la corteza capilar. 
          <br/><br/>


          Cuida tu piel como se merece
          <br/><br/>


          Dos aspectos que no pueden faltar en tu autocuidado: renovar e hidratar profundamente tu piel. Para lograrlo, nada mejor que la combinación de la naturaleza y de la ciencia. #AliadosNatura: cremas Chronos Antiseñales Día y Noche; y Chronos Acqua Biohidratante Renovador, con su fórmula ligera, refrescante y ultra hidratante que penetra rápidamente. Gracias a su exclusiva tecnología de hidratación activa, prebiótica e inteligente activa los mecanismos de auto hidratación, mantiene el equilibrio de la microbiota (microorganismos que viven en nuestra piel) y repara los niveles de hidratación según las necesidades de cada región del rostro.
          <br/><br/>


          Por su parte, los Antiseñales de Chronos protegen de las agresiones cotidianas a las que tu piel está expuesta, que aceleran el proceso de envejecimiento; además, ofrecen una alta protección solar e hidratación prolongada. En cuanto al caso específico de los Antiseñales Noche de Chronos, cuentan con tecnología Detox Celular, que regenera la piel eliminando las toxinas celulares y repara los daños sufridos a lo largo del día; sin dejar de nutrir e hidratar profundamente. Además, estimula la renovación celular, dando al rostro una textura aterciopelada.
          <br/><br/>


          No te olvides de cuidar tus labios
          <br/><br/>


          Muchas veces no recordamos que es parte importante del cuidado, y con una rutina sencilla vas a poder incorporarlo sin problemas. La clave es optar por los productos adecuados, que permitan mantener la región renovada, hidratada; sin dejar de prevenir el envejecimiento prematuro. En Natura contamos con todas las opciones que buscás de la biodiversidad brasileña y la ciencia dermatológica.
          <br/><br/>


          ¿Por dónde comenzar? Por el Exfoliante Labial, que contiene granos orgánicos que ayudan a eliminar las células muertas, dejándolos más suaves y con su textura más uniforme. Además, cuenta con esferas de masaje que promueven una suave exfoliación y estimulan su renovación celular. Pruébalo y luego nos cuentas. 
          <br/><br/>


          Te recomendamos continuar con el labial ultra hidratante SPF 5 para mantener la hidratación durante todo el día. Restaura la salud de los labios y los nutre en dos horas, ya que conforta, suaviza y acondiciona la región. Te lo garantizamos.  Nutre y restaura la salud de los labios en dos horas.
          <br/><br/>


          Otra opción es el labial Satinado en Aceite. Con colores intensos y un acabado satinado, en una textura inédita con mantequilla de murumuru e infusión con aceites de girasol y nuez, Recupera e hidrata hasta por 24 horas. 
          <br/><br/>


          Bienestar y bellez es posible gracias a #Natura. 
          <br/><br/>

        </Typography>
      </Box>
      
    </>
  );
};

export default index;
