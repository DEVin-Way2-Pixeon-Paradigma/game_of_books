import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Menu from './components/Menu';

import Routes from './routes'
import store from './store';

// 1 - Configurar o componente de Provider no App.js
// 2 - Configurar o create Store

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
