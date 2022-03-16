import React from 'react';
import { styled } from '@mui/material/styles';
import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import logo from '../../assets/logo.jpg';

const AppBarStyled = styled(AppBar)(({ theme }) => ({}));

interface Props {
    isChecked: any;
    setIsChecked: any;
}

const MobileBar = ({ isChecked, setIsChecked }: Props) => {
    return (
        <AppBar
            position='static'
            sx={{
                backgroundColor: `${
                    isChecked
                        ? 'var(--igt-color-darkBlue)'
                        : 'var(--igt-color-darkGrey)'
                }`,
                height: '60px',
                display: { xs: 'flex', md: 'none' },
            }}
        >
            <Container sx={{ position: 'relative' }}>
                <Toolbar>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translate(-50%)',
                        }}
                    >
                        <img
                            src={logo}
                            alt=''
                            style={{
                                filter: `${
                                    isChecked ? 'grayscale(0)' : 'grayscale(1)'
                                }`,
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant='h6'
                            color='inherit'
                            component='div'
                        >
                            Menu
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MobileBar;
