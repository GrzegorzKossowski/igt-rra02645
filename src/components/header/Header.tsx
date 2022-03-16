// https://www.npmjs.com/package/react-responsive-carousel
import React from 'react';
import { ThemeContext } from '../ThemeContext';
import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Grid } from '@mui/material';
import HeaderCard from './HeaderCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const items = [
    {
        name: 'Random Name #1',
        description: 'Probably the most random thing you have ever seen!',
        url: `https://picsum.photos/id/1024/800/400`,
    },
    {
        name: 'Random Name #2',
        description: 'Hello World!',
        url: `https://picsum.photos/id/1025/800/400`,
    },
    {
        name: 'Random Name #2',
        description: 'Hello World!',
        url: `https://picsum.photos/id/1026/800/400`,
    },
];

interface Props {
    item: { name?: string; description?: string; url?: string };
}

const Item = ({ item }: Props) => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <div>
            <img
                src={item.url}
                style={{
                    borderRadius: '20px',
                    backgroundColor: 'rgba(0,0,0,0)',
                    filter: `${themeContext ? 'grayscale(0)' : 'grayscale(1)'}`,
                }}
                alt={item.name}
            />
        </div>
    );
};

const CustomHeader = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    padding: '20px 0',
    '@media screen and (max-width: 600px)': {
        backgroundColor: theme.palette.primary.main,
    },
}));

const Header = () => {
    return (
        <CustomHeader>
            <Container fixed>
                <Grid container columnSpacing={2} rowSpacing={2}>
                    <Grid item sm={12} lg={8}>
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            dynamicHeight={true}
                            showStatus={false}
                        >
                            {items.map((item, i) => (
                                <Item key={i} item={item} />
                            ))}
                        </Carousel>
                    </Grid>
                    <Grid item md={12} lg={4}>
                        <Paper elevation={0} sx={{ padding: '10px' }}>
                            {Array.from(Array(2)).map((_, index) => (
                                <HeaderCard
                                    key={index}
                                    sx={{
                                        margin: '10px 0',
                                        textAlign: 'center',
                                    }}
                                />
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </CustomHeader>
    );
};

export default Header;
