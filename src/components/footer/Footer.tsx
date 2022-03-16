import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container, Grid, Link, Typography } from '@mui/material';

const CustomFooter = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
}));

const Item = styled(Link)(({ theme }) => ({
    color: '#fff',
    cursor: 'pointer',
}));

const LinksGridContanier = styled(Grid)(({ theme }) => ({
    padding: '30px 0',
    '@media screen and (max-width: 600px)': {
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey[800],
        padding: '50px 0',
    },
}));

const LinksGrid = styled(Grid)(({ theme }) => ({
    '@media screen and (max-width: 600px)': {
        textAlign: 'center',
        '&:not(:nth-of-type(3n))': {
            position: 'relative',
            '&::after': {
                content: '"•"',
                display: 'block',
                position: 'absolute',
                width: '200%',
                bottom: '0%',
            },
        },
    },
}));

const FooterInfo = styled(Typography)(({ theme }) => ({
    paddingBottom: '30px',
    '@media screen and (max-width: 600px)': {
        padding: '30px 10px',
        '&:not(:nth-of-type(3n))': {
            textAlign: 'center',
        },
    },
}));

const Footer = () => {
    return (
        <CustomFooter>
            <footer>
                <Container fixed>
                    <Grid container>
                        <LinksGridContanier container item xs={12} sm={6}>
                            {Array.from(Array(3)).map((_, index) => (
                                <LinksGrid item xs={4} key={index}>
                                    <Item>Link {index + 1}</Item>
                                </LinksGrid>
                            ))}
                        </LinksGridContanier>
                        <LinksGridContanier container item xs={12} sm={6}>
                            {Array.from(Array(3)).map((_, index) => (
                                <LinksGrid item xs={4} key={index}>
                                    <Item>Link {index + 1}</Item>
                                </LinksGrid>
                            ))}
                        </LinksGridContanier>
                    </Grid>
                    <FooterInfo variant='body1'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius sapiente veritatis dicta hic nesciunt
                        obcaecati sed qui provident excepturi, mollitia, facere
                        unde voluptatem alias quas. Incidunt, perferendis! Atque
                        cupiditate quos illo, eaque dolorum inventore veritatis
                        molestiae doloribus? Placeat facilis minus deserunt
                        laborum? Sed nostrum unde, nemo molestiae expedita
                        impedit veniam ducimus!
                    </FooterInfo>
                </Container>
            </footer>
        </CustomFooter>
    );
};

export default Footer;
