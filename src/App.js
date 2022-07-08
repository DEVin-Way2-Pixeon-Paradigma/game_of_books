import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Menu from './components/Menu';

import Routes from './routes'
import { store, persistor } from './store';

// 1 - Configurar o componente de Provider no App.js
// 2 - Configurar o create Store
// 3 - Configurar as actions
// 4 - Configurar os reducers

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Menu />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
