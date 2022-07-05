const Book = ({ item }) => {

  return (
    <div>
      <img width="150" src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <p>{item.price}</p>
      <button>Detalhes</button>
      <button>Comprar</button>
    </div>
  )
}

export default Book