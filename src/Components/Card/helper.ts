import { formatObjectGamesForSetReduxProps } from './interface';

export const formatObjectGamesForSetRedux = (
  data: formatObjectGamesForSetReduxProps
) => {
  const { name, background_image, description, platforms, developers, genres } =
    data;

  const formatPlataforms = platforms.map((item) => item.platform.name);
  const formatDevelopers = developers.map((item) => item.name);
  const formatGenres = genres.map((item) => item.name);

  return {
    name,
    photo: background_image,
    description,
    category: formatGenres,
    platforms: formatPlataforms,
    company: formatDevelopers,
  };
};
