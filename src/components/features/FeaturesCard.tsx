import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
    title: string;
    subtitle: string;
    url: string;
    buttonLabel: string;
}

const FeaturesCard = ({ title, subtitle, url, buttonLabel }: Props) => {
    const themeContext = React.useContext(ThemeContext);
    const [img, setImg] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${url}/${
                        Math.floor(Math.random() * (140 - 110)) + 110
                    }/112/62`
                );
                if (!response.ok) throw new Error('Fetching data failed');
                const blob = await response.blob();
                const objectURL = URL.createObjectURL(blob);
                setImg(objectURL);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [url]);

    return (
        <Card>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                    variant='h6'
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: '600',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant='subtitle1'
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: '400',
                    }}
                >
                    {subtitle}
                </Typography>
                {img ? (
                    <CardMedia
                        component='img'
                        image={img}
                        alt='Lorem ipsum'
                        sx={{
                            marginBottom: '15px',
                            filter: `${
                                themeContext ? 'grayscale(0)' : 'grayscale(1)'
                            }`,
                        }}
                    />
                ) : (
                    <Skeleton
                        variant='rectangular'
                        animation='wave'
                        height={112}
                        sx={{ marginBottom: '15px' }}
                    />
                )}
                <Button variant='contained' fullWidth>
                    {buttonLabel}
                    <ArrowForwardIosIcon
                        fontSize='small'
                        sx={{
                            position: 'absolute',
                            right: '5px',
                        }}
                    />
                </Button>
            </CardContent>
        </Card>
    );
};

export default FeaturesCard;
