import { AnyAction } from 'redux';

import { SET_GAMES_INFO } from '../../Actions/actionTypes';

const initialState = {
  data: {
    name: '',
    photo: '',
    description: '',
    category: [],
    platforms: [],
    company: [],
  },
};

export const GamesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_GAMES_INFO:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
