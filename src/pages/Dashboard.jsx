import { Checkbox, Card, CardContent, CardActionArea, CardMedia, CardActions, Typography, IconButton } from '@mui/material';
import * as React from 'react';
import model_img from '../model_img.png';
import { Share, Favorite, ShoppingCart } from '@mui/icons-material';
import "./dashboard.css";

function Dashboard() {
  return (
    <div class = "container">
    <Card sx = {{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component = "img"
          image = {model_img}
          height = "194"
          alt = "Sony PS4 Controller"
          draggable = "false"
        />
        <CardContent>
          <Typography> Sony Cuh-Zct2G Dual Shock4 Wireless Controller, Midnight Blue - Playstation 4 </Typography>
          <Typography variant='h3'> $69.99 </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Checkbox icon={<Favorite />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Checkbox icon={<ShoppingCart />} checkedIcon={<ShoppingCart sx={{color:"green"}}/>} />
      </CardActions>
    </Card>
    <Card sx = {{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component = "img"
          image = {model_img}
          height = "194"
          alt = "Sony PS4 Controller"
          draggable = "false"
        />
        <CardContent>
          <Typography> Sony Cuh-Zct2G Dual Shock4 Wireless Controller, Midnight Blue - Playstation 4 </Typography>
          <Typography variant='h3'> $69.99 </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Checkbox icon={<Favorite />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Checkbox icon={<ShoppingCart />} checkedIcon={<ShoppingCart sx={{color:"green"}}/>} />
      </CardActions>
    </Card>
    </div>
  );
}


export default Dashboard;