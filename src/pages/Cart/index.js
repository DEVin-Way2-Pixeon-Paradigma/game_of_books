import { useSelector } from 'react-redux'

const Cart = () => {
  
  const cart = useSelector(state => state.cart);

  return (
    <>
      <div>Carrinho</div>
      {cart.items.map(book => book.title)}
    </>
  )
}

export default Cart