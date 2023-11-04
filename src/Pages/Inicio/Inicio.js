import { Container, Typography, Grid } from '@mui/material';


function Inicio() {
    return (
        <Container>
            <Grid container>
                <Grid>
                    <Typography item xs={4} sm={4} md={4} lg={4} xl={4}>
                        Inicio Teste 
                    </Typography>
                </Grid>
                <Grid>
                    <Typography item xs={4} sm={4} md={4} lg={4} xl={4}>
                        Inicio
                    </Typography>
                </Grid>
                <Grid>
                    <Typography item xs={4} sm={4} md={4} lg={4} xl={4}>
                        Inicio
                    </Typography>
                </Grid>
            </Grid>
        </Container>


    );
}

export default Inicio;
