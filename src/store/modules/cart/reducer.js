
const INITIAL_STATE = {
  items: []
}


const cart = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_BOOK_TO_CART': {
      return {
        items: [
          ...state.items,
          action.payload.book
        ]
      }
    }

    case 'REMOVE_BOOK': {
      console.log('remover livro')
      return state;
    }

    default:
      return state;

  }
}

export default cart