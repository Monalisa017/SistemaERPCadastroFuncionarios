import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';


export const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection:'row',
    background: theme.palette.secondary.main,
    alignContent:'center',
    justifyItems:'center',
    zIndex: 2,
    width:'98%',
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:'10px',
    margin:'auto',
    marginTop:'20px',
}));

export const TitleComponent = styled(Typography)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: 'center',
    alignItems:'center',
    alignContent:'center',
    margin: 'auto',
    color:'whitesmoke',
    fontSize:'25px',
    display: 'flex',
    flexDirection:'row',
}));