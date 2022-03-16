import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

interface Props {
    title: string;
    content: string;
    buttonLabel: string;
}

const ContentCard = ({ title, content, buttonLabel }: Props) => {
    return (
        <Card>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                    variant='h5'
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: '600',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant='body1'
                    sx={{
                        textAlign: 'center',
                        margin: '20px 10px',
                    }}
                >
                    {content}
                </Typography>
                <Button
                    variant='contained'
                    size='small'
                    sx={{ width: '300px' }}
                >
                    {buttonLabel}
                </Button>
            </CardContent>
        </Card>
    );
};

export default ContentCard;
