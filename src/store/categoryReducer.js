import axios from 'axios';

const initialState = {
  categories: [
    {
      id: 1,
      normalizedName: 'sports-gear',
      displayName: 'Sports Gear',
      description: 'Browse common products used in common sports',
      isActive: false
    },
    {
      id: 2,
      normalizedName: 'fishing-gear',
      displayName: 'Fishing Gear',
      description: 'Browse fishing tackle for freshwater and saltwater fish',
      isActive: false
    }
  ],
  activeCategory: ''
}

function categoryReducer(state = initialState, action){
  switch(action.type) {
    case 'GET_CATEGORY':
      return { categories: action.payload.results }
    case 'UPDATEACTIVE':
      return{
        categories: state.categories,
        activeCategory: action.payload.name
      }
      default:
        return state
  }
}

export const updateCategory = (category) => {
  return{
    type: 'UPDATEACTIVE',
    payload: category
  }
}
export const resetCategory = () => {
  return{
    type: 'RESET',
    payload: ''
  }
}
export const getCategories = () => async (dispatch, getState) => {
  // fetch from our API // do anything asynchronous
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');

  // return our action
  dispatch(setCategories(response.data));
}

export const setCategories = (data) => {
  return{
    type: 'GET_CATEGORY',
    payload: data
  }
}

export default categoryReducer;