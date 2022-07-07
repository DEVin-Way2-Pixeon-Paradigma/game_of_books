import { useDispatch, useSelector } from 'react-redux'

import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from 'react-icons/fa'
import { decrementAmountBookToCart, incrementAmountBookToCart, removeBookToCart } from '../../store/modules/cart/actions';
import Swal from 'sweetalert2';
import { priceFormat } from '../../utils/priceFormat';

const Cart = () => {
  
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = priceFormat(cart.items.reduce((acc, currentValue) => {
    return acc + (currentValue.price * currentValue.amount)
  }, 0))

  const handleDispatchAction = (item) => {
    const amount = item.amount - 1;
    if(!amount) {
      dispatch(removeBookToCart(item.id))
    } else {
      dispatch(decrementAmountBookToCart(item.id))
    }
  }

  return (
    <div className='container'>
      <table className='table-cart'>
        <thead>
          <tr>
            <th>#</th>
            <th>Livro</th>
            <th>Quantidade</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map(item => (
            <tr key={item.id}>
              <td>
                <img className='table-image' src={item.image} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>
                <FaMinusCircle 
                  size={18}
                  color="#9721BD"
                  className='margin-button'
                  onClick={() => handleDispatchAction(item)}
                />
                {item.amount}
                <FaPlusCircle 
                  size={18}
                  color="#9721BD"
                  className='margin-button'
                  onClick={() => dispatch(incrementAmountBookToCart(item.id))}
                />
              </td>
              <td>{item.subtotal}</td>
              <td>
                <FaTrashAlt size={22} color='#9721BD' onClick={() => {
                  Swal.fire({
                    title: 'Deseja realmente remover esse item ?',
                    showCancelButton: true,
                    confirmButtonText: 'Sim, desejo !',
                    cancelButtonText: `Cancelar`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(removeBookToCart(item.id))
                    }
                  })
                }}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Total: {total}</h1>
    </div>
  )
}

export default Cart