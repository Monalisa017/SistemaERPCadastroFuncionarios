import React from 'react';
import * as Styled from './Inicio.styled';
import { Container, Typography, Grid } from '@mui/material';
import CardComponent from './../../Components/Card/CardComponent';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import imagem1 from './../../assests/imagens/inserir.png';

export default function Inicio() {

    function Teste() {
        alert("Testando");
    };
    return (
        <Styled.InicioContainer>
            <Grid>
                <CardComponent>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            onClick={() => Teste()}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Lizard
                            </Typography>
                            <Typography>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </CardComponent>
            </Grid>
            <Grid>
                <Typography xs={4} sm={4} md={4} lg={4} xl={4}>
                    Inicio
                </Typography>
            </Grid>

            <Typography xs={4} sm={4} md={4} lg={4} xl={4}>
                Inicio
            </Typography>
        </Styled.InicioContainer>
    );
}

