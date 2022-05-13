import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from 'react-redux';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function Header({ items }) {
  console.log('items', items);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  function getTotal() {
    let sum = 0;
    items.forEach(element => {
      sum += element.price
    });
    return sum
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const list = (anchor) => (
    <Box
      sx={{ width: 250, justifyContent: 'center' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {items.map(item => (
          <>
            <ListItem key={item.id} disablePadding>
              <ListItemText primary={item.name} secondary={`Category: ${item.category}`} />
              <ListItemText secondary={`Cost: ${item.price}`} />
            </ListItem>
            <hr></hr>
          </>
        ))}
      </List>
      <Divider />
      <Link to="/Virtual-store-REDUX/cart" style={{textDecoration:"none"}}>
        <ListItemButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Total: ${getTotal()}
          </Typography>
          <ArrowForwardIcon></ArrowForwardIcon>
        </ListItemButton>
      </Link>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>

        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SKNY SHOP
            </Typography>
            <IconButton onClick={toggleDrawer('right', true)}>
              <Badge badgeContent={items.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </ThemeProvider>
    </Box>
  );
}

const mapStateToProps = ({ cart }) => {
  return {
    items: cart.items,
  }
}

const mapDispatchToProps = {
  // updateList
  // decStock,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);