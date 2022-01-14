interface formatObjectGamesForSetReduxProps {
  name: string;
  background_image: string;
  description: string;
  genres: Array<{
    name: string;
  }>;
  platforms: Array<{
    platform: {
      name: string;
    };
  }>;
  developers: Array<{
    name: string;
  }>;
}

export const formatObjectGamesForSetRedux = (
  data: formatObjectGamesForSetReduxProps
) => {
  const { name, background_image, description } = data;

  console.log(data);

  return {
    name,
    photo: background_image,
    description,
    category: 'RPG',
    platforms: 'XBOX S',
    company: 'TOP',
  };
};
