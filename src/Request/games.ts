import { api } from '../Services/api';

const key = 'fc0d58ba5bbc493e99f0906a975fa94a';

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
