import React from 'react';
import { Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;
    
    return <div onClick={clickFunction}>{icon}</div>;
}
export function CarouselSlide(props) {
    const { backgroundColor, title } = props.content;
    const useStyles = makeStyles(() => ({
        card: {
        backgroundColor,
        borderRadius: 5,
        padding: '75px 50px',
        margin: '0px 25px',
        width: '500px',
        boxShadow: '20px 20px 20px black',
        display: 'flex',
        justifyContent: 'center',
        }
    }));
    const classes = useStyles();
    return (
        <Card className={classes.card}>
        <h1>{title}</h1>
        </Card>
        );
}