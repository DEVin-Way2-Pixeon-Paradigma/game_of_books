import { useNavigate } from 'react-router-dom'
import { priceFormat } from '../../utils/priceFormat'

const Book = ({ item, addToCart }) => {
  const navigate = useNavigate()
  const priceFormatted = priceFormat(item.price)

  return (
    <div className='book-item'>
      <img className='book-item-cover' width="150" src={item.image} alt={item.title} />
      <span className='book-item-title'>{item.title}</span>
      <span className='book-item-price'>{priceFormatted}</span>
      <button className='book-button' onClick={() => addToCart(item)} >Comprar</button>
      <button className='book-button' onClick={() => navigate('/details', { state: item } )} >Detalhes</button>
    </div>
  )
}

export default Book