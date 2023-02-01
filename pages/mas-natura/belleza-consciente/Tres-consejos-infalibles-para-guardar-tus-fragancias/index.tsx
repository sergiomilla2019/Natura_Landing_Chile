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
        Tres consejos infalibles para guardar tus fragancias
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
Quizá no es algo a lo que prestes atención, pero cuando termines de leer este artículo seguramente quieras ir ya mismo al lugar donde están guardados tus perfumes y ver si aplicas los siguientes consejos que comparte Luciana Parra, evaluadora olfativa de Natura. ¿Por qué es un dato determinante? Porque repercute en la durabilidad e integridad de las fragancias. ¿Por qué no le prestamos tanta atención? La mayoría de los perfumes tienen un frasco bonito, perfecto para ser utilizado como objeto de decoración. A su vez, se trata de un producto de belleza, que preferimos tener a la mano, y el lugar escogido termina siendo el de más fácil acceso.¿Te sucede?
<br/><br/>


Tres consejos para dar con el lugar indicado para tus fragancias
<br/><br/>


Opta por un lugar seco
<br/><br/>

#TipExtra: lo ideal es que no tenga interferencia de luz, calor y humedad. ¿Sabías que estos tres factores hacen que la fórmula de tu perfume sufra reacciones químicas, perdiendo la coloración y el aroma mucho más rápido?
<br/><br/>


#ParaRecordar: es un producto muy delicado y como tal requiere atención a sus cuidados. Por esta sensibilidad particular, el guardarropas sería el lugar indicado, y lejos de lo que sucede en la mayoría de los casos, el baño es el peor sitio. Si querés prolongar al máximo la vida útil de tus favoritos, cuando termines de leer esta nota, elegí cambiarlo de lugar. 
<br/><br/>


No tires su envase
<br/><br/>

¿Por qué la próxima vez que te compres o te regalen una nueva fragancia no deberías tirar el envase? Además de prevenir que el frasco se quiebre y rompa, evita que el perfume sufra las interferencias que nombramos en el punto anterior. ¿Lo sabías? 
<br/><br/>


Cuidados extras
<br/><br/>

Más allá del lugar elegido, hay otros cuidados que podés hacer por tus perfumes favoritos. #Tips: limpiar con un paño seco o levemente húmedo con alcohol la caja y el frasco, dos veces al año, para evitar moho, humedad y polvo. También, retirar el resto del líquido que queda impregnado en la tapa o en el spray, para evitar la oxidación del material y así conservar el frasco intacto por más tiempo.
<br/><br/>


¡Sigue disfrutando de tu fragancia favorita que expresa tu personalidad! 
<br/><br/>


¿Qué te parecieron estos consejos? ¿Vas a ponerlos en práctica? ¡Cuéntanos! 
<br/><br/>

        </Typography>
      </Box>
      
    </>
  );
};

export default index;
