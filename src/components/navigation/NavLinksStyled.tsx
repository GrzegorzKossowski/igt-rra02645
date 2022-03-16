import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const NavLinksStyled = styled(Button)(({ theme }) => ({
    color: '#fff',
    textTransform: 'capitalize',
    '&:not(:nth-of-type(3n))': {
        position: 'relative',
        '&::after': {
            content: '"•"',
            position: 'absolute',
            left: '100%',
        },
    },
}));
export default NavLinksStyled;
