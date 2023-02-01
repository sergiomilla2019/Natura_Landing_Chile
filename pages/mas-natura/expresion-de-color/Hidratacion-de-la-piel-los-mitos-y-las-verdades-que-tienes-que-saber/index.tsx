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
import banner from "../../../../public/images/21--BLOG-desktop.png";
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
        Hidratación de la piel: los mitos y las verdades que tienes que saber
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
        Tiempo de lectura: dos minutos.<br/><br/>


#RompamosMitos: qué sí y que no con respecto a la hidratación de la piel. Sigue leyendo y  conoce nueve mitos y verdades sobre el tema.
<br/><br/>

1. Si duermes bien tu piel se ve bien
<br/><br/>

Verdadero. ¿El motivo? Durante el sueño, las células de la piel se regeneran y el pH se restablece. #Tip: lo ideal es respetar las horas mínimas que tu cuerpo necesita para descansar (si bien cada uno es diferente, en general son ocho horas). No sólo ayuda a tener energía al día siguiente, también tu piel se mantendrá hidratada y sin ojeras.
<br/><br/>

2. La piel grasa no necesita hidratación
<br/><br/>

Falso. Si bien es una creencia muy arraigada, es un error no hidratarla. Todos los tipos de pieles necesitan cuidados específicos. #Tip: si tu piel es grasa, opta por productos libres de aceite. 
<br/><br/>

3.La hidratación debe cambiar durante las estaciones del año: en invierno tiene que ser más intensa 
<br/><br/>

Verdadero. Dos factores que contribuyen a la resequedad de la piel son: el viento y la calefacción. #Tip: mantenla hidratada reforzando sus cuidados; invierte en hidratantes ricos en óleos, como la Pulpa Desodorante Hidratante Corporal Castaña, de Ekos. Es rica en omega 6 y 9, nutre la piel por 30 horas, y estimula la producción de proteínas estructurantes hasta las capas más profundas.
<br/><br/>

4. Evita los baños muy calientes
<br/><br/>

Verdadero. La naturaleza es sabia, y la piel, que cuenta con protección natural, no es la excepción. El agua caliente suele afectar esta característica. #Dato: la piel produce más grasa para protegerse de la resequedad, volviéndola más grasa aún. 
<br/><br/>

5. La alimentación saludable colabora con la hidratación de la piel
<br/><br/>

Verdadero. ¿Escuchaste hablar de que lo interno se refleja en lo externo? La fórmula es simple: cuanto mejor comas, mejor se verá tu piel. Si tu dieta es a base de alimentos grasos o frituras, por ejemplo, puede llevar al aumento de grasitud y también a la proliferación de granitos. #Tip: empieza por cambios mínimos en tu alimentación que hagan la diferencia. Incorpora más frutas y verduras; recuerda que una decisión se convierte en un hábito cuando se sostiene en el tiempo. 
<br/><br/>

6. La piel hidratada soporta más el uso de maquillaje
<br/><br/>

Verdadero. Piel saludable = piel hidratada. Cuando tu piel está bien hidratada puede soportar mejor, por ejemplo, la aplicación de cosméticos más irritantes. #Tip: si usas maquillaje todo el día, durante la noche utiliza Hydra Nutrición Noche, de Chronos; un hidratante facial de textura leve, que recuperará tu piel mientras duermes. 
<br/><br/>

7. La hidratación del rostro y del cuerpo deben ser iguales. 
<br/><br/>

Falso. Es un hecho: la piel del rostro es siempre más grasa. El cuerpo necesita de hidratantes más potentes porque la piel es más espesa y más seca. #Tip: el Desodorante Hidratante Corporal Macadamia – Piel Extraseca, de Tododia, es una gran opción para cumplir esta función. La piel del rostro tiene mayor número de glándulas sebáceas, por esto es más oleosa e hidratada. #Tip: prueba Aqua biohidratante renovador, de Chronos, con su fórmula ligera, refrescante, que penetra rápidamente en la piel. 
<br/><br/>

8. El mejor momento para aplicar el hidratante en el cuerpo es después del baño
<br/><br/>

Verdadero. ¿El motivo? El baño deshidrata la piel. Para compensar este desequilibrio, es muy importante que la aplicación de un buen hidratante se realice después de salir de la ducha. #Tip: para dejar tu piel con textura suave y sedosa, elige nuestras cremas de Tododía, con múltiples beneficios: nutrición prebiótica profunda y experta, se adaptan a los cambios de tu piel. Entre las opciones para el cuerpo puedes elegir: Flor de lis, Frutos rojos, Avellana y casis, Frambuesa y pimienta rosa, Nuez pecán y cacao, Hojas de limón y guanaba, Mora roja y jabuticaba.
<br/><br/>

9. Hay que cuidar la piel del cuello y de las manos
<br/><br/>

Verdadero. La piel es el órgano más extenso de nuestro cuerpo. El cuello y las manos se resecan y sufren con la exposición solar. #Tip: utiliza protector (el mismo que aplicas en tu rostro) y cremas hidratantes diariamente. Te recomendamos la hidratante de manos Flor de lis, de Tododia; y para el cuello la crema aclaradora de cuello y manos, de Chronos. 
<br/><br/>

Ahora que ya los conoces, pon en práctica estas verdades y haz que tu piel hable de ti. 
        
<br/><br/>

        </Typography>
      </Box>
      
    </>
  );
};

export default index;
