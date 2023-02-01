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
import banner from "../../../../public/images/12-BLOG-desktop.png";
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
        Haz la diferencia: seis motivos para decirle sí a los envases reutilizables
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
        Tiempo de lectura: dos minutos.
        <br/><br/>
Podemos contarte más de seis razones clave para decirle no al plástico y sí a los envases reciclados, recargables y reciclables. Sabemos que son tan contundentes que cuando termines de leer este artículo vas a tener tu decisión tomada: marcar la diferencia con acciones.
<br/><br/>
#AlertaRoja: números que alarman
<br/><br/>
El 40% de todo el plástico consumido en el mundo son envases plásticos que no se reciclan. ¿Sabes qué es lo malo?  La mitad se descarta después del primer uso. De este 40%, sólo un 9% continúa su ciclo de vida gracias al reciclaje. Como tú, podemos hacernos una imagen de esta cifra por demás impresionante. ¿Sabías que en lugar de quedarnos sólo en el lamento podemos actuar ahora mismo como consumidores conscientes para modificarla? El uso de repuestos y de envases reutilizables es una gran medida. Un simple cambio de hábito hace mucho por el planeta.
<br/><br/>
2) El uso de repuestos favorece tu economía y al mundo 
<br/><br/>
Al optar por repuestos en primer lugar cambias el destino de los residuos, sino que además ahorras. #EnNúmeros: representa un ahorro de dinero de aproximadamente un 30% sobre el envase regular, y en caso de conseguirlo en promoción, de hasta un 50%. Mismo productos con la misma calidad a un precio menor. Imposible no apostar por esta medida. 
<br/><br/>
3) Un pequeño cambio en tu rutina de cuidado, un gran cambio para el planeta
<br/><br/>
Al comprar repuestos ayudas a evitar 2.6 millones de toneladas de residuos. Es una cifra impresionante. #Datos: el 55% de los consumidores perciben el embalaje de productos de cuidados personales como la principal causa de los residuos. ¡Dile sí a los repuestos, dile sí al medio ambiente! 
<br/><br/>
4)  No se trata sólo de un envase
<br/><br/>
El uso de repuestos y envases reutilizables no solo mejoran los índices ambientales. Los trabajadores de la planta de envases, a su vez, forman parte de proyectos de educación y capacitaciones sobre diversidad, que los convierten en agentes de transformación de las comunidades locales y los recursos naturales del Amazonas. Se trata de un impacto positivo ambiental y social. 
<br/><br/>
5) Calidad intacta
<br/><br/>
No se trata de productos diferentes, sino de presentaciones que animan a consumir de manera más consciente. Te garantizamos que seguís disfrutando de la misma calidad de tus cremas, lociones, productos para el pelo, maquillaje y fragancias favoritas, con el plus de que no generas un exceso de plástico. Productos amigables con el planeta son los #musthaves del presente.
<br/><br/>
6) Activación de la Eco-lógica
<br/><br/>
En la actualidad belleza y sustentabilidad no son polos opuestos. Con las nuevas tecnologías y los compromisos de sustentabilidad asumidos por las marcas, disfrutas de productos cosméticos que cuidan de ti y del medio ambiente. La biobelleza es una realidad.
<br/><br/>
Comparte estas seis razones para animar a tus amigos y a tu familia a elegir una rutina de belleza amigable con el planeta. Cuentas con #Natura.
<br/><br/>

        </Typography>
      </Box>
      
    </>
  );
};

export default index;
