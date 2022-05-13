import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { updateCategory, resetCategory } from '../../store/categoryReducer';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Container from '@mui/material/Container';



function CategoryList({ categories, activeCategory, updateCategory, resetCategory }) {
  console.log('active', activeCategory);

  return (
    <>
    <hr></hr>
      <Container>
      <Typography gutterBottom variant="h3">Categories: </Typography>
          <IconButton sx={{color: 'white'}}onClick={() => { resetCategory() }}>
            <ArrowBackIcon></ArrowBackIcon>
            <Typography variant="h5">Show All</Typography>
          </IconButton>
      </Container>
    <hr></hr>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} id="list">
        <Grid container  columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="center" alignItems="center">
          {categories.map(category => (
            <Grid item xs={2} sm={4} md={4} key={category.id}>
              <Card sx={{ margin: "10px" }} raised key={category.id}>
                <CardContent>
                  <Typography gutterBottom variant="h6">{category.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{category.displayName}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", alignItems: "center", margin: 'auto' }}>
                  <IconButton onClick={() => updateCategory(category)}>
                    {category.name === activeCategory
                      ? <>
                        <Typography variant="p" sx={{ fontSize: '12px' }} color="text.secondary">{category.description}</Typography>
                        <br></br>
                        <CheckBoxIcon />
                      </>
                      : <CheckBoxOutlineBlankIcon />}
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
    activeCategory: categories.activeCategory
  }
}

const mapDispatchToProps = {
  updateCategory,
  resetCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);