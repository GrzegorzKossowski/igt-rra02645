import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container, FormLabel, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';

const CustomSignUp = styled(Box)(({ theme }) => ({
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: theme.palette.grey[200],
}));

const CustomSignUpGrid = styled(Grid)(({ theme }) => ({
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media screen and (max-width: 600px)': {},
}));

const SignUp = () => {
    return (
        <CustomSignUp>
            <Container fixed>
                <CustomSignUpGrid container rowSpacing={1} columnSpacing={1}>
                    <Grid xs={12} sm={12} lg={3} item>
                        <FormLabel>Abonnez-vous a notre newsteller</FormLabel>
                    </Grid>
                    <Grid
                        item
                        sm={5}
                        lg={4}
                        display={{ xs: 'none', sm: 'block' }}
                    >
                        <TextField
                            fullWidth
                            label='Nom'
                            id='name'
                            variant='outlined'
                            size='small'
                            sx={{ backgroundColor: '#f1f1f1' }}
                        />
                    </Grid>
                    <Grid item xs={9} sm={5} lg={4}>
                        <TextField
                            fullWidth
                            label='Adresse email'
                            id='name'
                            variant='outlined'
                            size='small'
                            sx={{ backgroundColor: '#f1f1f1' }}
                        />
                    </Grid>
                    <Grid item xs={3} sm={2} lg={1}>
                        <Button variant='contained' size='small' fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </CustomSignUpGrid>
            </Container>
        </CustomSignUp>
    );
};

export default SignUp;
