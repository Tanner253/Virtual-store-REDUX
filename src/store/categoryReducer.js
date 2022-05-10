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
    case 'UPDATEACTIVE':
      return{
        categories: state.categories,
        activeCategory: action.payload.normalizedName
      }
      case 'RESET':
        return{
          ...state,
          activeCategory: ''
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

export default categoryReducer;