import { Container, Typography, Grid } from '@mui/material';
import { Box } from '@mui/material';
import './App.css';
import DadosPessoais from './Pages/DadosPessoais/dadosPessoais';
import Header from './Components/Header/Header';
import Inicio from './Pages/Inicio/Inicio';


function App() {
  return (

      <><Header /><Grid container>
      <Grid><Inicio /> </Grid>
    </Grid></>
  );
}

export default App;
