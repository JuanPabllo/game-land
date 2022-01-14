import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Reducers } from './reducers';

const persistConfig = {
  key: 'root_game_land',
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const Store = createStore(persistedReducer);
const persistor = persistStore(Store);

export { Store, persistor };
