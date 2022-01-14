import { combineReducers } from 'redux';

import { GamesReducer } from './Games';

export const Reducers = combineReducers({
  Games: GamesReducer,
});
