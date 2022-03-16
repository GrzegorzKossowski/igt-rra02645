import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Props {
    sx: {};
}
const HeaderCard = ({ sx }: Props) => {
    return (
        <Card variant='outlined' sx={sx}>
            <CardContent>
                <Typography
                    variant='h5'
                    sx={{ fontWeight: '600', textTransform: 'uppercase', lineHeight: '3rem'}}
                >
                    Lorem, ipsum dolor.
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio aut totam quaerat dolores doloremque optio
                    tempora.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default HeaderCard;
