import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Button, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../ThemeContext';
import FeaturesCard from './FeaturesCard';

const data = {
    title: 'Lorem ipsum',
    subtitle: 'Example text',
    url: `https://picsum.photos/id/`,
    buttonLabel: 'Lorem ipsum',
};

const CustomFeatures = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    '@media screen and (max-width: 600px)': {
        backgroundColor: theme.palette.primary.main,
        padding: '10px 0',
    },
}));

const Features = () => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <CustomFeatures>
            <Container fixed>
                <Typography
                    variant='h5'
                    sx={{
                        margin: '10px 0',
                        fontWeight: 'bold',
                        display: { xs: 'none', sm: 'block' },
                    }}
                >
                    Lorem ipsum dolor sit
                </Typography>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    {Array.from(Array(4)).map((_, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <FeaturesCard {...data} />
                        </Grid>
                    ))}
                </Grid>
                <Box
                    sx={{
                        textAlign: 'center',
                        padding: '30px 0',
                    }}
                >
                    <Button
                        variant='contained'
                        color={themeContext ? 'warning' : 'primary'}
                        sx={{
                            width: 250,
                            '@media (max-width: 600px)': {
                                width: '100%',
                            },
                        }}
                    >
                        Lorem ipsum
                        <ArrowForwardIosIcon
                            fontSize='small'
                            sx={{
                                position: 'absolute',
                                right: '5px',
                            }}
                        />
                    </Button>
                </Box>
            </Container>
        </CustomFeatures>
    );
};

export default Features;
