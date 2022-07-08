import { useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from 'react-credit-cards';
import { mask } from 'remask'

import 'react-credit-cards/es/styles-compiled.css';
import Swal from 'sweetalert2';

const Checkout = () => {

  const cart = useSelector(state => state.cart)

  const [name, setName] = useState('')
  const [creditCard, setCreditCard] = useState('')
  const [cvv, setCvv] = useState('')
  const [dateExpired, setDateExpired] = useState('')
  const [focus, setFocus] = useState('')

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  }

  const handleSubmit = e => {
    e.preventDefault();

    Swal.fire({
      title: 'Finalizando compra!',
      html: 'Processando a sua compra ... <br /> <b></b> ',
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire('Compra realizada com sucesso!')
      }
    })
  }

  return (
    <div className='container'>
      <div className='books-scroll'>
        {cart.items.map(book => 
          <img src={book.image} width="100" alt={book.title} key={book.id} />
        )}
      </div>

      <span className='checkout-title'>Checkout</span>

      <Cards
          cvc={cvv}
          expiry={dateExpired}
          focused={focus}
          name={name}
          number={creditCard}
        />

      <form className='form-checkout' onSubmit={handleSubmit}>
          <input 
            type="text"
            name="name"
            onFocus={handleInputFocus}
            placeholder='Nome no cartão'
            required
            onChange={ e => setName(e.target.value)}
            value={name}
          />

          <input 
            type="text"
            placeholder='Número do cartão'
            required
            name="number"
            onFocus={handleInputFocus}
            onChange={ e => setCreditCard(mask(e.target.value, '9999 9999 9999 9999'))}
            value={creditCard}
          />

          <input 
            type="text"
            placeholder='Data de vencimento'
            onFocus={handleInputFocus}
            name="expiry"
            required
            onChange={ e => setDateExpired(mask(e.target.value, '99/99'))}
            value={dateExpired}
          />

          <input 
            type="text"
            placeholder='CVC'
            required
            onFocus={handleInputFocus}
            name="cvc"
            onChange={ e => setCvv(mask(e.target.value, '999'))}
            value={cvv}
          />

          <button type='submit' 
            className='book-button'
            disabled={!name || !cvv || !dateExpired || !creditCard}>
              Comprar</button>
      </form>
    </div>
  )
}

export default Checkout