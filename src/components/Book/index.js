const Book = ({ item, addToCart }) => {

  return (
    <div className='book-item'>
      <img className='book-item-cover' width="150" src={item.image} alt={item.title} />
      <span className='book-item-title'>{item.title}</span>
      <span className='book-item-price'>{item.price}</span>
      <button className='book-button'>Detalhes</button>
      <button className='book-button' onClick={() => addToCart(item)} >Comprar</button>
    </div>
  )
}

export default Book