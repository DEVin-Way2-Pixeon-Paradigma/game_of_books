import { Route, Routes as Switch } from 'react-router-dom'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Details from './pages/Details'
import Home from './pages/Home'

const Routes = () => {

  return (
    <Switch>
      <Route exact path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/details' element={<Details />} />
      <Route path='/checkout' element={<Checkout />} />
    </Switch>
  )

}

export default Routes