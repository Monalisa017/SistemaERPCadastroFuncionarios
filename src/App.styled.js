import { styled } from '@mui/material/styles';
import { Box, Grid } from "@mui/material";


export const AppContainer = styled(Grid)(({ theme }) => ({
   backgroundColor:'whiteSmoke',
   width:'95vw',
   height:'95vh',
   display:'flex',
   justifyContent:'center',
   //alignItems:'center',
   alignContent:'center',
   margin:'auto',
   marginTop:'1.5%',
   borderRadius:'10px'
}));

export const AppBox= styled(Box)(({ theme }) => ({
    backgroundColor:'purple',
    width:'auto',
    height:'80vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    margin:'auto',
    borderRadius:'10px'
 }));