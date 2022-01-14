import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './Pages/Home';
import { Store, persistor } from './Redux/store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
