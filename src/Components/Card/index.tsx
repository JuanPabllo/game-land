import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardProps } from './interface';

import { GetInfoGameById } from '../../Request/games';
import ReactToHTML from '../../utils/ReactToHtml';

export default function Cards({ name, id }: CardProps) {
  const [data, setdata] = useState<any>([]);

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
          alt="green iguana"
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
