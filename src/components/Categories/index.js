import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import { updateCategory } from '../../store/categoryReducer';

function CandidateList({ categories, activeCategory, updateCategory }) {
  console.log('active', activeCategory);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} id="list">
      {categories.map(category => (
        <Card sx={{ margin: "10px" }} raised key={category.id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{category.name}</Typography>
            <Typography variant="body2" color="text.secondary">{category.displayName}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => updateCategory(category)}>SELECT</Button>
          </CardActions>
        </Card>
      ))}
      {/* <IconButton onClick={reset}>
        <DeleteIcon />
      </IconButton> */}
    </Box>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
    activeCategory: categories.activeCategory
  }
}

const mapDispatchToProps = {
  updateCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateList);