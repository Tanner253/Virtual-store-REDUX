import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { decStock } from '../../store/productsReducer'

function ProductList({ products, filteredProducts, decStock }) {
  console.log('products', products, 'filtered', filteredProducts);
  return (
    <>
    <hr></hr>
      <Container>
      <Typography gutterBottom variant="h3">Products: </Typography>
      </Container>
    <hr></hr>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} id="list">
        {filteredProducts ? filteredProducts.map(product => (
          <Card sx={{ margin: "10px", width: '50%' }} raised key={product.id}>
            <CardContent>
              <Typography gutterBottom variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">{product.displayName}</Typography>
            </CardContent>
            <IconButton onClick={() => { decStock(product) }}>
              <AddShoppingCartIcon />
            </IconButton>
          </Card>
        )) :
          products.map(product => (
            <Card sx={{ margin: "10px", width: '50%' }} raised key={product.id}>
              <CardContent>
                <Typography gutterBottom variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">{product.displayName}</Typography>
              </CardContent>
              <IconButton onClick={() => { decStock(product) }}>
                <AddShoppingCartIcon />
              </IconButton>
            </Card>
          ))}
      </Box>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);