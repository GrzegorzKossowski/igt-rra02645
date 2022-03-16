import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

const CustomTestimonial = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '30px 0',
    borderBottom: '6px solid',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    borderBottomColor: theme.palette.primary.light,
    '@media screen and (max-width: 600px)': {
        padding: '30px 20px',
        backgroundColor: theme.palette.primary.main,
    },
}));

const Testimonial = () => {
    return (
        <CustomTestimonial>
            <Container fixed>
                <Grid container>
                    <Grid item md={12} lg={9}>
                        <Typography variant='h6' sx={{ lineHeight: '1.5rem' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Atque possimus cumque totam blanditiis in
                            consequatur similique at aperiam velit magnam?
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </CustomTestimonial>
    );
};

export default Testimonial;
