import { combineReducers, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cart from './modules/cart/reducer';

const persistConfig = {
  key: '@devinhouse_game_of_book',
  storage,
  whiteList: ['cart']
}

const redurcers = combineReducers({
  cart
})

const persistedReducer = persistReducer(persistConfig, redurcers)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor };