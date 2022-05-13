import { connect } from 'react-redux';
import { getDetails } from '../../store/productsReducer'
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Checkout({ items, getDetails }) {
  function getTotal() {
    let sum = 0;
    items.forEach(element => {
      sum += element.price
    });
    return sum
  }
  return (
    <>
      <h2>Checkout: </h2>
      <Link to="/Virtual-store-REDUX" style={{ textDecoration: "none" }}>
        <IconButton sx={{ color: 'white' }}>
          <ArrowBackIcon></ArrowBackIcon>
          <h6>go back</h6>
          <Typography variant="h1"></Typography>
        </IconButton>
      </Link>
      <hr></hr>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} id="list">
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="center" alignItems="center">
          {items.map(item => (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
              <Card sx={{ margin: "20px" }}>
                <CardContent>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="h6" color="text.secondary">Price: {item.price}</Typography>
                  <Typography variant="h6" color="text.secondary">Stock: {item.inStock}</Typography>
                  <Typography variant="h6" color="text.secondary">Category: {item.category}</Typography>
                </CardContent>
                <Link to="/Virtual-store-REDUX/details">
                  <IconButton onClick={() => { getDetails(item) }}>
                    <InfoIcon />
                  </IconButton>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <hr></hr>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Total: ${getTotal()}
      </Typography>
      <hr></hr>
      <Container sx={{ width: '50%', background: 'white', marginBottom: '5%' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Credit/Debit #</Form.Label>
            <Form.Control type="text" placeholder="Debit/Credit: 1234-1234-1234-1234" />
            <Form.Text className="text-muted">
              We'll never share your BILLING INFORMATION with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>CVC</Form.Label>
            <Form.Control type="text" placeholder="CVC: ***" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Expiration</Form.Label>
            <Form.Control type="text" placeholder="EXPIRATION:" />
          </Form.Group>
          <Button variant="primary" type="submit" className="m-4">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

const mapStateToProps = ({ cart }) => {
  return {
    items: cart.items,
  }
}

const mapDispatchToProps = {
  getDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);