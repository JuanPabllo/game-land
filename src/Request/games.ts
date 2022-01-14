import { api } from '../Services/api';

// The correct thing is key to leave this key in an .env, but for being a test I will leave hard code
const key = 'b054c8abfab9426a828a2fdac9266bd3';

export const GetAllGames = async (page: number) => {
  try {
    const response = await api.get(
      `/platforms?key=${key}&page_size=10&page=${page}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetInfoGameById = async (id: string) => {
  try {
    const response = await api.get(`games/${id}?key=${key}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
