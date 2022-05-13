import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { decStock } from '../../store/productsReducer'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function ProductDetails({ productDetails, decStock }) {
  productDetails = productDetails[0];
  console.log('product details', productDetails);
  return (
    <>
      <Link to="/Virtual-store-REDUX">
        <IconButton sx={{ color: 'white' }}>
          <ArrowBackIcon></ArrowBackIcon>
          <Typography variant="h1"></Typography>
        </IconButton>
      </Link>
      <hr></hr>
      <Container>
        <Typography gutterBottom variant="h3">Details</Typography>
      </Container>
      <hr></hr>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} id="list">
        {
          <Card sx={{ margin: "10px", width: '50%' }} raised key={productDetails._id}>
            <CardContent>
              <Typography gutterBottom variant="h1">{productDetails.name}</Typography>
              <Typography variant="h4" color="text.secondary">CATEGORY: {productDetails.category}</Typography>
              <Typography variant="h5" color="text.secondary">STOCK: {productDetails.inStock}</Typography>
            </CardContent>
          </Card>
        }
      </Box>
    </>
  )
}

const mapStateToProps = ({ products }) => {
  return {
    productDetails: products.productDetails
  }
}

const mapDispatchToProps = {
  decStock,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);