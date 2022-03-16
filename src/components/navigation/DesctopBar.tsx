import React from 'react';
import { styled } from '@mui/material/styles';
import {
    AppBar,
    Button,
    Checkbox,
    Container,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PaletteIcon from '@mui/icons-material/Palette';
import logo from '../../assets/logo.jpg';
import NavLinksStyled from './NavLinksStyled';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
    background: `linear-gradient(0deg, ${theme.palette.primary.dark} 50%, ${theme.palette.common.white} 50%)`,
    '@media screen and (max-width: 600px)': {},
}));

interface Props {
    isChecked: any;
    setIsChecked: any;
}

const DesctopBar = ({ isChecked, setIsChecked }: Props) => {
    return (
        <AppBarStyled
            position='static'
            sx={{
                display: { xs: 'none', md: 'flex' },
            }}
        >
            <Container fixed sx={{ position: 'relative' }}>
                <img
                    src={logo}
                    alt=''
                    style={{
                        position: 'absolute',
                        left: '20px',
                        height: '100px',
                        filter: `${isChecked ? 'grayscale(0)' : 'grayscale(1)'}`,
                    }}
                />
            </Container>
            <Container
                fixed
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    padding: '10px 0',
                }}
            >
                <Checkbox
                    checked={isChecked}
                    icon={<PaletteIcon />}
                    checkedIcon={<DarkModeIcon />}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <Button size='small' sx={{ marginLeft: '10px' }}>
                    Lorem ipsum
                </Button>
                <Button
                    variant='contained'
                    size='small'
                    sx={{ marginLeft: '10px', minWidth: '150px' }}
                >
                    Lorem ipsum
                </Button>
                <Button
                    variant='contained'
                    size='small'
                    sx={{ marginLeft: '10px', minWidth: '150px' }}
                >
                    Lorem ipsum
                </Button>
            </Container>
            <Container
                fixed
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    padding: '10px 0',
                }}
            >
                {Array.from(Array(3)).map((_, index) => (
                    <NavLinksStyled key={index}>Link{index + 1}</NavLinksStyled>
                ))}
            </Container>
        </AppBarStyled>
    );
};

export default DesctopBar;
