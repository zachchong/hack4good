
import { Slide } from '@mui/material';
function ProductDetail() {
  return <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <img 
      src="https://picsum.photos/400/300"
      alt="Product"
      style={{
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
        margin: '0 auto',
        display: 'block'
      }}
    />
  </Slide>;
}

export default ProductDetail;
