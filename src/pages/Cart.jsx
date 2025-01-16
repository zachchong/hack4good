import model_img from '../model_img.png';
import { Card, CardContent, Checkbox, CardActionArea, CardMedia, CardActions } from '@mui/material';


function Cart() {
    return (
        <div>
            <h2>Cart</h2>
                <Card sx={{ display: 'flex'  }}>
                    <Checkbox></Checkbox>
                    <CardContent>
                        <img src={model_img} style={{ maxWidth: "140px"}} draggable="false"></img>
                    </CardContent>
                    <CardContent>
                        <h3>Product Name</h3>
                        <p>Product Brand</p>
                    </CardContent>
                    <CardContent>
                        <h3>$100</h3>
                    </CardContent>
                </Card>
        </div>
    );
}

export default Cart;