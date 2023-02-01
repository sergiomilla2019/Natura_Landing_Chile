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
import banner from "../../../../public/images/33-BLOG-desktop.png";
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
        Cabellos teñidos: la clave de los 3 pasos en la rutina de cuidados
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
        Tiempo de lectura: menos de dos minutos. <br/><br/>

            Cabello<br/><br/>


            ¿A quién no le gusta renovar su look y jugar con su cabello? Aplicar tintura es una de las formas más prácticas para innovar de manera casi inmediata. La clave es una rutina de cuidados para que tu pelo se mantenga saludable y brillante. 
            <br/><br/>

            “Los procesos químicos pueden debilitar y resecar el cabello, principalmente si no estuviera bien nutrido”, comenta Gui Cassolari, estilista oficial de Natura. A su vez, las puntas partidas son señales de que la fibra capilar fue afectada; por esto, es esencial utilizar productos específicos, que se convierten en verdaderos aliados. “Desde el shampoo, todas las etapas de tratamiento deben ser enfocadas a cabellos teñidos”, explica.
            <br/><br/>

            ¿Bonus? Nos comparte tres consejos para cuidar los cabellos teñidos.
            <br/><br/>

            La importancia para la restauración en los tres primeros lavados
            <br/><br/>

            #Verdad: después de aplicar la tintura, el cabello tiende a quedar más frágil y susceptible a daños. #TipDeCuidado: te recomendamos el Kit tratamiento pro reconstructor para cabellos químicamente dañados, de Lumina.  Otro factor clave es la frecuencia del lavado: “Aunque las tinturas actuales sean más resistentes, los lavados aún son un factor de desteñido”, concluye el estilista Gui Cassolari. 
            <br/><br/>

            Mayor cuidado, mejor color 
            <br/><br/>

            #Verdad: es una realidad que los cabellos nutridos e hidratados fijan más la tintura, además de ser más resistentes a los daños que ella pueda causar. #TipDeCuidado: lo ideal es hidratarlo una vez por semana cada 10 días. ¿Sabías que los cabellos teñidos pierden oleosidad natural, lo que lleva al resecamiento y opacidad? Así que ya conocés el próximo paso: incluir este ritual en tu calendario y convertirlo en hábito. 
            <br/><br/>

            Atención al crecimiento
            <br/><br/>

            #Verdad: el crecimiento del cabello es inevitable y la aparición de tu color natural en la raíz es una consecuencia. Según Gui Cassolari, es común confundir el crecimiento del cabello con el desteñido del color. “Cuando la raíz aparece es señal de que los cabellos están creciendo, y no que la duración de la tintura fue reducida”. #TipDeCuidado: si la raíz comienza a incomodarte, puedes usar tonalizantes antes de volver a teñirlo. 
            <br/><br/>

            Como ves, no tienes que resignarte a no cambiar de look, a probar nuestras opciones o a llevar ese color que tanto te gusta, divierte y refleja tu personalidad. La rutina de cuidados hace la diferencia. ¿Aplicas algunos de estos consejos? 
            <br/><br/>

        </Typography>
      </Box>
      
    </>
  );
};

export default index;
