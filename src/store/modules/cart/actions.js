export const addBookToCart = (book) => {
  console.log('entrei no action addBookToCart')
  return {
    type: 'ADD_BOOK_TO_CART',
    payload: {
      book
    }
  }
}

export const removeBookToCart = (id) => {
  console.log('passei aqui no remover')
  return {
    type: 'REMOVE_BOOK_TO_CART',
    payload: {
      id
    }
  }
}

export const incrementAmountBookToCart = (id) => {
  return {
    type: 'INCREMENT_AMOUNT_BOOK_TO_CART',
    payload: {
      id
    }
  }
}

export const decrementAmountBookToCart = (id) => {
  console.log('passando no decrement')
  return {
    type: 'DECREMENT_AMOUNT_BOOK_TO_CART',
    payload: {
      id
    }
  }
}