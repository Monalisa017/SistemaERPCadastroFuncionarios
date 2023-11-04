import { Container, Typography, Grid } from '@mui/material';
import * as Styled from './Inicio.styled';
import CardComponent from './../../Components/Card/CardComponent';
import CardMedia from '@mui/material/CardMedia';
import imagem1 from './../../assests/imagens/inserir.png';

export default function Inicio() {

    function Teste() {
        alert("Testando");
    };
    return (
        <>
            <Styled.InicioContainer>

                <Grid>
                    <CardComponent>
                        <CardMedia
                            component="img"
                            height="140"
                            onClick={() => Teste()}
                            alt="green iguana"
                        />
                    </CardComponent>
                </Grid>
                <Grid>
                    <Typography item xs={4} sm={4} md={4} lg={4} xl={4}>
                        Inicio
                    </Typography>
                </Grid>

                <Typography item xs={4} sm={4} md={4} lg={4} xl={4}>
                    Inicio
                </Typography>
            </Styled.InicioContainer>
        </>
    );
}

