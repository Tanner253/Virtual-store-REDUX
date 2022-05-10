import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateList } from '../../store/productsReducer';
function ProductList({ products, filteredProducts }) {
  console.log('products', products, filteredProducts);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} id="list">
      {filteredProducts? filteredProducts.map(product => (
        <Card sx={{ margin: "10px" }} raised key={product.id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{product.name}</Typography>
            <Typography variant="body2" color="text.secondary">{product.displayName}</Typography>
          </CardContent>
        </Card>
      )):
      products.map(product => (
        <Card sx={{ margin: "10px" }} raised key={product.id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{product.name}</Typography>
            <Typography variant="body2" color="text.secondary">{product.displayName}</Typography>
          </CardContent>
        </Card>
      ))}
      <IconButton onClick={() => updateList(products)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
    filteredProducts: products.filteredProducts
  }
}

const mapDispatchToProps = {
  updateList
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);