import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { decStock, getDetails } from '../../store/productsReducer'
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

function ProductList({ products, filteredProducts, decStock, getDetails }) {
  console.log('products', products, 'filtered', filteredProducts);
  return (
    <>
      <hr></hr>
      <Container>
        <Typography gutterBottom variant="h3">Products: </Typography>
      </Container>
      <hr></hr>
      <Container maxWidth="sm">
        <Box>
          {filteredProducts ? filteredProducts.map(product => (
            product.inStock > 0? 
              <Card sx={{ margin: "10px" }} raised key={product._id}>
                <CardContent>
                  <Typography gutterBottom variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{product.displayName}</Typography>
                </CardContent>
                <IconButton onClick={() => { decStock(product) }}>
                  <AddShoppingCartIcon />
                </IconButton>
                <Link to="/Virtual-store-REDUX/details">
                <IconButton onClick={() => { getDetails(product) }}>
                  <InfoIcon />
                </IconButton>
                </Link>
              </Card>
              :
              <p></p>
          )) 
          :
            products.map(product => (
              product.inStock > 0?
                <Card sx={{ margin: "10px" }} raised key={product._id}>
                  <CardContent>
                    <Typography gutterBottom variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{product.displayName}</Typography>
                  </CardContent>
                  <IconButton onClick={() => { decStock(product) }}>
                    <AddShoppingCartIcon />
                  </IconButton>
                  <Link to="/Virtual-store-REDUX/details">
                    <IconButton onClick={() => { getDetails(product) }}>
                      <InfoIcon />
                    </IconButton>
                  </Link>
                </Card>
                : 
                <p></p>
            ))}
        </Box>
      </Container>
    </>
  )
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
    filteredProducts: products.filteredProducts
  }
}

const mapDispatchToProps = {
  // updateList
  decStock,
  getDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);