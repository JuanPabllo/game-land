import { SET_GAMES_INFO } from './actionTypes';

interface GamesProps {
  name: string;
  photo: string;
  description: string;
  category: string[];
  platforms: string[];
  company: string[];
}

export const setGameInfos = (data: GamesProps) => ({
  type: SET_GAMES_INFO,
  data: data,
});
