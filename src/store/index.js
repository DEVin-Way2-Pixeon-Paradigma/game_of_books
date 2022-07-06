import { combineReducers, legacy_createStore as createStore } from 'redux';
import cart from './modules/cart/reducer';

const reducers = combineReducers({
  cart
})

const store = createStore(reducers)

export default store;