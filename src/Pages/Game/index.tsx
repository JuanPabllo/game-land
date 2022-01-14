import { Box, Button, Typography, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../Redux/types';

import ReactToHTML from '../../Utils/ReactToHtml';

function Game() {
  const { Games } = useSelector((state: RootState) => state);
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '35px auto',
        padding: '20px 0',
        alignItems: 'center',
        width: '800px',
        height: '100%',
        borderRadius: '24px',
        boxShadow:
          '0 0 0 1px rgb(130 136 148 / 16%), 0 8px 10px -4px rgb(130 136 148 / 28%)',
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          marginLeft: '25px',
          width: '100%',
        }}
      >
        <Button
          onClick={() => backToHome()}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Voltar
        </Button>
      </Box>
      <Typography sx={{ color: '#7935D8' }} variant="h3">
        {Games.data.name}
      </Typography>

      <Avatar
        sx={{ marginTop: '25px', width: 250, height: 250 }}
        src={Games.data.photo}
        alt={Games.data.name}
      />
      <Box
        sx={{
          marginTop: '25px',
          width: '600px',
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          dangerouslySetInnerHTML={ReactToHTML(Games.data.description)}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '25px',
          justifyContent: 'space-evenly',
        }}
      >
        <Box>
          <Typography sx={{ color: '#7935D8' }} variant="h5">
            Categorias:
          </Typography>
          {Games.data.category.map((item: string) => (
            <Typography variant="subtitle1">- {item}</Typography>
          ))}
        </Box>
        <Box>
          <Typography sx={{ color: '#7935D8' }} variant="h5">
            Plataformas:
          </Typography>
          {Games.data.platforms.map((item: string) => (
            <Typography variant="subtitle1">- {item}</Typography>
          ))}
        </Box>
        <Box>
          <Typography sx={{ color: '#7935D8' }} variant="h5">
            Desenvolvedor:
          </Typography>
          {Games.data.company.map((item: string) => (
            <Typography variant="subtitle1">- {item}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Game;
