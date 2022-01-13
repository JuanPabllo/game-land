import { useState, useEffect, useCallback } from 'react';
import { Grid, Box, Button, CircularProgress } from '@mui/material';

import Cards from '../../Components/Card';
import Sidebar from '../../Components/Sidebar';

import { GetAllGames } from '../../Request/games';

export default function Home() {
  const [data, setdata] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlerDataApi = useCallback(async () => {
    setLoading(true);
    try {
      const response = await GetAllGames(page);
      setdata(response.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  console.log(page);

  useEffect(() => {
    handlerDataApi();
  }, [page]);

  return (
    <>
      <Sidebar />
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '240px',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ marginLeft: '250px !important' }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
            {data &&
              data.map((item: any) => {
                return item.games.map((item: any) => {
                  return (
                    <Grid item xs={3}>
                      <Cards name={item.name} id={item.id} key={item.id} />
                    </Grid>
                  );
                });
              })}
          </Grid>
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Voltar
          </Button>
          <Button onClick={() => setPage(page + 1)}>Próximo</Button>
        </Box>
      )}
    </>
  );
}
