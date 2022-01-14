import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

import ReactToHTML from '../../Utils/ReactToHtml';
import { formatObjectGamesForSetRedux } from './helper';

import { setGameInfos } from '../../Actions/Games';

import { GetInfoGameById } from '../../Request/games';

import { CardProps, ResponseApiGameInfo } from './interface';

export default function Cards({ id, slug }: CardProps) {
  const [data, setdata] = useState<ResponseApiGameInfo[] | any>([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const setInfoGamesInRedux = () => {
    try {
      const datas = formatObjectGamesForSetRedux(data);
      dispatch(setGameInfos(datas));
      navigate(`/game/${slug}`);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Typography
            sx={{ color: '#7935D8' }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {data?.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#000' }}
            color="text.secondary"
            dangerouslySetInnerHTML={ReactToHTML(
              `${data?.description?.substr(0, 150)}...`
            )}
          />
        </CardContent>
        <CardActions>
          <Button
            onClick={() => setInfoGamesInRedux()}
            sx={{ color: '#7935D8' }}
            size="small"
          >
            Detalhes
          </Button>
        </CardActions>
      </Card>
    )
  );
}
