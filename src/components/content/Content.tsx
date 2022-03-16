import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
import ContentCard from './ContentCard';
import Box from '@mui/material/Box';

const data = {
    title: 'Lorem ipsum dolor',
    content: `Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Consequatur cum vitae quidem
    aperiam repellat, eaque et blanditiis porro
    exercitationem, officia repudiandae consectetur.`,
    buttonLabel: 'Lorem ipsum',
};

const CustomContent = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    padding: '20px 0',
    '@media screen and (max-width: 600px)': {
        backgroundColor: theme.palette.primary.main,
        padding: '10px 0',
    },
}));

const Content = () => {
    return (
        <CustomContent>
            <Container fixed>
                <Grid container columnSpacing={4} rowSpacing={2}>
                    {Array.from(Array(2)).map((_, index) => (
                        <Grid item sm={12} md={6} key={index}>
                            <ContentCard {...data} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </CustomContent>
    );
};

export default Content;
