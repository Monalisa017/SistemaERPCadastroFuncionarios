import * as React from 'react';
import * as Styled from './CardComponent.styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Grid, StyledEngineProvider, Typography } from "@mui/material";
import { CardActionArea } from '@mui/material';
import  imagem1  from './../../assests/imagens/inserir.png';

export default function CardComponent() {
  function Teste(){
    alert("Testando");
  };
  return (
    <Card sx={{ maxWidth: 400, height: 400 }}>
      <CardActionArea sx={{ maxWidth: 400, height: 40 }}>
        <CardMedia
          component="img"
          height="200"
          image={imagem1}
          alt="green iguana"
          width='400px'
        />
        <Styled.CardBox>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Inserir novo colaborador
          </Typography>

        </CardContent>
        </Styled.CardBox>
      </CardActionArea>
        
    </Card>
  );
}