import { priceFormat } from '../../../utils/priceFormat'

const INITIAL_STATE = {
  items: []
}

const cart = (state = INITIAL_STATE, action) => {
  console.log(state)
  switch(action.type) {
    case 'ADD_BOOK_TO_CART': {

      const { book } = action.payload

      const bookExists = state.items.find(item => item.id === book.id)

      if(!bookExists) {
        const amount = 1;
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...book, 
              amount,
              subtotal: priceFormat(book.price * amount)
            }
          ]
        }
      } else {
        const newItems = state.items.map(item => {
          if(item.id === bookExists.id) {
            const amount = item.amount + 1;
            return {
              ...item,
              amount,
              subtotal: priceFormat(item.price * amount)
            }
          }
          return item;
        })

        return {
          ...state,
          items: newItems
        }
      }
      
    }

    case 'REMOVE_BOOK_TO_CART': {
      const itensFiltered = state.items.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        items: itensFiltered
      }
    }

    case 'INCREMENT_AMOUNT_BOOK_TO_CART': {
      const newItems = state.items.map(item => {
        if(item.id === action.payload.id) {
          const amount = item.amount + 1;
          return {
            ...item,
            amount,
            subtotal: priceFormat(item.price * amount)
          }
        }
        return item;
      })

      return {
        ...state,
        items: newItems
      }
    }

    case 'DECREMENT_AMOUNT_BOOK_TO_CART': {
      const newItems = state.items.map(item => {
        if(item.id === action.payload.id) {
          const amount = item.amount - 1;
          return {
            ...item,
            amount,
            subtotal: priceFormat(item.price * amount)
          }
        }
        return item;
      })

      return {
        ...state,
        items: newItems
      }
    }

    default:
      return state;
  }
}

export default cart