import { Typography, Box, Grid } from "@mui/material";
import * as Styled from './Header.styled';
import { HeaderContainer } from './Header.styled';


function Header() {

    return (
        <Styled.HeaderContainer>
            <Box>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Styled.TitleComponent>ERP-Cadastros </Styled.TitleComponent>
                    </Grid>


                </Grid>
            </Box>
        </Styled.HeaderContainer>
    );
};

export default Header;