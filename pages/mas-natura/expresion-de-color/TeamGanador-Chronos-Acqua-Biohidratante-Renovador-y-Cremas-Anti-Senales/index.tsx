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
import banner from "../../../../public/images/18-BLOG-desktop.png";
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
        TeamGanador: Chronos Acqua Biohidratante Renovador y Cremas Anti-Señales
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
        Tiempo de lectura: menos de tres minutos.<br/><br/>



¿Cuál es el secreto de una rutina de belleza exitosa? Primero, que se adapte a las necesidades de tu piel; segundo, que combine tratamientos. La clave es conocer y comprender los detalles,  los ingredientes y las funciones de los productos que vas a usar. No te olvides que tu piel habla de ti. 
<br/><br/>

Hoy queremos contarte sobre dos favoritos de Chronos que actúan de manera complementaria, no son sustituibles entre sí: Chronos Acqua Biohidratante Renovador y Cremas Anti-Señales.
<br/><br/>

¿Cómo actúa Chronos Acqua Biohidratante Renovador?
<br/><br/>

Es un super concentrado indicado para quienes tengan la piel deshidratada, con claros signos de sequedad. Su magia radica en que promueve una reposición de hidratación instantánea y la alienta a hidratarse de manera inteligente. Tu piel es sabia y Chronos Acqua Biohidratante Renovador (que puede usarse desde el inicio de la edad adulta) se lo recuerda. 
<br/><br/>

¿Sabías que existen dos mecanismos para promover la hidratación de la piel mediante los cosméticos? La primera es a través de la oclusión: los ingredientes de la formulación fabrican una barrera superficial, evitando la pérdida de agua. El segundo se llama humidificación: algunos ingredientes activos en la fórmula atraen agua a la piel, aumentando inmediatamente el nivel de hidratación de la superficie. Si bien ambos son muy efectivos y de acción inmediata, al lavarnos la cara se pierde el efecto. 
<br/><br/>

#BuenasNoticias. El avance en las investigaciones reveló nuevos mecanismos de hidratación de la piel: 
<br/><br/>

*Activa: estimula los mecanismos naturales de autohidratación.
<br/><br/>

*Prebiótica: seguramente estás muy al tanto de todo el universo de la microbiota - conjunto de microorganismos que viven en nuestra piel-. En este caso, se fortalece la barrera cutánea como consecuencia de un equilibrio  de la microbiota.
<br/><br/>

Lo interesante de ambos es que promueven resultados más duraderos, a diferencia de las que te mencionamos anteriormente (oclusión y humidificación).  
<br/><br/>

#Bonus: estos avances en hidratación los ofrece Chronos Acqua Biohidratante Renovador gracias a la presencia en su fórmula de fevillea, activa en la biodiversidad brasileña, prebióticos y ácido hialurónico-BT.
<br/><br/>

¿Cómo actúan las cremas Anti-Señal de Día y Noche?
<br/><br/>

También tienen una acción hidratante, mediante la oclusión y la humectación. Sin embargo no es su función principal. Estas cremas se encargan de ofrecer lo que la piel necesita en cada etapa de la vida, atenuando los signos del paso del tiempo (como arrugas, líneas de expresión, flacidez y falta de vitalidad). Su uso se recomienda a partir de los 30 años. Ahora que lo sabes, gana tiempo con esta información. 
<br/><br/>

¿Cómo combinar ambos en tu rutina?
<br/><br/>

Primero, la limpieza (sin este paso los efectos de ningún producto serán los deseados). Luego elige los cosméticos indicados para tu piel como la espuma, el desmaquillante, el agua micelar y/o el tónico. A continuación llega el turno de los super concentrados específicos, hora de aplicar Chronos Acqua Biohidratante Renovador. Finaliza con la Crema Anti-señales día indicada para tu edad. #Recordatorio: no olvides del protector solar. 
<br/><br/>

Por la noche, es la misma rutina adaptada: sustituye la Crema de Día Anti-señales por la Crema de Noche Anti-señales y no apliques protector solar. 
<br/><br/>

¿Qué te pareció este artículo? ¿Conocías estas propuestas de Natura? Con Chronos gana tiempo y brindale a tu piel todo lo que se merece. Recuerda que lo mejor que puedes hacer por ella es cuidarla. 
<br/><br/>

        </Typography>
      </Box>
      
    </>
  );
};

export default index;
