import * as Styled from './App.styled';
import { Typography, Grid, Box } from '@mui/material';
import Header from './Components/Header/Header';
import Inicio from './Pages/Inicio/Inicio';



export default function App() {
  return (
      <><Header /><Styled.AppContainer>
      <Inicio />
      <Styled.AppBox>
      </Styled.AppBox>
    </Styled.AppContainer></>
  );
}

