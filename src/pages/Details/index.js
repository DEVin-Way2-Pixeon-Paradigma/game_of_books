import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addBookToCart } from '../../store/modules/cart/actions';
import { priceFormat } from '../../utils/priceFormat';

const Details = () => {

  const { state } = useLocation();
  const dispatch = useDispatch();

  const priceFormatted = priceFormat(state.price)

  return (
    <div className='container'>
      <div className='book-container'>
        <img src={state.image} alt={state.title}/>
        <div>
          <h1>{state.title} - {priceFormatted}</h1>
          <p>{state.description}</p>
          <button 
            onClick={() => dispatch(addBookToCart(state))} 
            className='book-button'>
              Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details;