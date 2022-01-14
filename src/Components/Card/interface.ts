export interface CardProps {
  id: string;
}

export interface ResponseApiGameInfo {
  background_image: string;
  name: string;
  description: string;
}

export interface formatObjectGamesForSetReduxProps {
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
