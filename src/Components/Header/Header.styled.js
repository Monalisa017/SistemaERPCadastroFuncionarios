import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection:'row',
    background: theme.palette.secondary.main,
    alignContent:'center',
    justifyItems:'center',
    /*position: 'fixed',*/
    zIndex: 2,
    width:'100%',
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
    marginTop:'2px',

}));

export const TitleComponent = styled(Typography)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: 'spaceBetween',
    alignItems:'center',
    margin: 'auto',
    color:'whitesmoke',
    fontSize:'18px',

}));