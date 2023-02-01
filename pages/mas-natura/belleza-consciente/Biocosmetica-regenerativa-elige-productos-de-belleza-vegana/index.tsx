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
import banner from "../../../../public/images/13-BLOG-desktop.png";
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
        Biocosmética regenerativa: elige productos de belleza vegana
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
        Tiempo de lectura: tres minutos.
        <br/><br/>
#TrendAlert: los consumidores piden calidad y conocimiento sobre el origen de los componentes en los cosméticos que utilizan. Seguramente si estás leyendo este artículo sos parte de este #team. La curiosidad, la búsqueda de información, la claridad y honestidad de las marcas son algunas de las inquietudes. 
<br/><br/>
A continuación un #GlosarioNatura para destacar algunas diferencias de conceptos que, muchas veces, se utilizan como sinónimos.
<br/><br/>
Comenzamos…
<br/><br/>
#CrueltyFree: es una certificación internacional que garantiza que ese producto no fue testeado en animales. #DatosQueSí: en Natura no realizamos pruebas en animales desde 2006 y nuestros productos cuentan con esta certificación. A su vez, tampoco compramos insumos ni ingredientes a terceros que no cumplan con estas normativas. Nuestro compromiso es real y comprobable. 
<br/><br/>
#Vegetariano: este tipo de productos puede contener materias primas derivadas de animales (como cera de abejas o miel), pero no son obtenidos a través del sacrificio. 
<br/><br/>
#Vegano: en este caso no tienen ningún componente ni derivado del reino animal. 
<br/><br/>
¿Por qué elegimos ser una marca vegana?
<br/><br/>
Natura nació de un profundo respeto por la naturaleza, del compromiso por conservar la selva y preservar la integridad de todos los animales. Esta consciencia no sólo es parte de nuestro ADN, también es nuestro #gps a la hora de desarrollar productos. #EnNúmeros: casi el 100% de ellos son vegetarianos, y de estos, el 80% son veganos.
<br/><br/>
Somos vanguardia en belleza: biocosméticos regenerativos del Amazonas
<br/><br/>
Nuestra marca es toda una declaración de principios que guían el accionar. Por eso desarrollamos biocosméticos regenerativos. ¿Qué significa? Nuestros productos de belleza están hechos con ingredientes de origen natural y vegetal, con bioactivos brutos, obtenidos de la biodiversidad amazónica (de frutos como, por ejemplo, la castaña, la pitanga, el tucumá o la ucuuba). Esto quiere decir que respetan a la biología del cuerpo de las personas y a la naturaleza. Un ejemplo es el tucumá, que  estimula y protege la producción natural del ácido hialurónico de tu piel.
<br/><br/>
#AcciónConcreta: compensamos los impactos negativos de la extracción de materia prima con el compromiso de regenerar áreas perjudicadas por la acción humana.

<br/><br/>
¿Por qué elegir Natura?
<br/><br/>
Por su seguridad. Nuestros cosméticos no tienen ingredientes que puedan perjudicar la piel o el medio ambiente. Están creados sin siliconas, sin parabenos, sin triclosán, sin ftalatos ni aceites minerales. Marcamos la diferencia mediante la inversión en biotecnología, que busca ingredientes renovables de alta performance en la naturaleza, para potenciar los efectos benéficos de los productos de cuidado personal. Además, nuestro compromiso va más allá: acompañamos las discusiones científicas sobre activos peligrosos para la salud.
<br/><br/>
¿Por qué optamos por la belleza sustentable?
<br/><br/>
Hay tres características que pueden cambiar el destino de los residuos, y con él al del medio ambiente: economía circular, una selva de pie y envases ecoeficientes. En cuanto a los envases, queremos contarte que están realizados con materiales reciclados y que se pueden recargar. #EnNúmeros: el 52% de todo el plástico PET usado por Natura es reciclado, y el 41% de nuestros packagings contienen materiales reciclados o renovables. 
<br/><br/>
Nuestra marca garantiza tu rutina de belleza con la misma calidad de siempre, pero con un impacto positivo. Ser amigables con el medioambiente es tendencia siempre. 
<br/><br/>
¿Qué te pareció este artículo? ¿Te interesa conocer cómo trabajan las marcas que consumes? ¡Cuéntanos! 
<br/><br/>        

        </Typography>
      </Box>
      
    </>
  );
};

export default index;
