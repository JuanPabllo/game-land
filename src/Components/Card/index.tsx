import { useState, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

import { GetInfoGameById } from '../../Request/games';

import { CardProps, ResponseApiGameInfo } from './interface';

import ReactToHTML from '../../utils/ReactToHtml';

export default function Cards({ name, id }: CardProps) {
  const [data, setdata] = useState<ResponseApiGameInfo[] | any>([]);

  const handlerInfoGame = async () => {
    try {
      const response = await GetInfoGameById(id);
      setdata(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlerInfoGame();
  }, []);

  return (
    data && (
      <Card sx={{ minWidth: 345 }}>
        <CardMedia
          component="img"
          alt={data?.name}
          height="140"
          image={data?.background_image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            dangerouslySetInnerHTML={ReactToHTML(
              `${data?.description?.substr(0, 150)}...`
            )}
          />
        </CardContent>
        <CardActions>
          <Button size="small">Detalhes</Button>
        </CardActions>
      </Card>
    )
  );
}
