import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './Redux/store';

import RoutesApp from './routes';

function App() {
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <RoutesApp />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
