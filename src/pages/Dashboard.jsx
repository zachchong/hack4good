import { Card, CardContent, CardActionArea, CardMedia, CardActions, Typography, IconButton } from '@mui/material';
import * as React from 'react';
import model_img from '../model_img.png';
import { Share, Favorite } from '@mui/icons-material';

function Dashboard() {
  return (
    <Card sx = {{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component = "img"
          image = {model_img}
          height = "194"
        />
        <CardContent>
          <Typography> Sony Cuh-Zct2G Dual Shock4 Wireless Controller, Midnight Blue - Playstation 4 </Typography>
          <Typography variant='h3'> $69.99 </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}


export default Dashboard;