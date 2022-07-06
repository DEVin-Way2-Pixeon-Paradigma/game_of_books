export const addBookToCart = (book) => {
  console.log('entrei no action addBookToCart')
  return {
    type: 'ADD_BOOK_TO_CART',
    payload: {
      book
    }
  }
}

export const removeBook = () => {
  return {
    type: 'REMOVE_BOOK',
    payload: {
      
    }
  }
}