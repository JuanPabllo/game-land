import { useState, useEffect } from 'react';
import { Grid, Box, Button } from '@mui/material';

import Cards from '../../Components/Card';
import Sidebar from '../../Components/Sidebar';

import { GetAllGames } from '../../Request/games';

export default function Home() {
  const [data, setdata] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handlerDataApi = async () => {
    try {
      const response = await GetAllGames();
      setdata(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlerDataApi();
  }, []);

  const pages = Math.ceil(data?.results?.length / 10);
  const startIndex = currentPage * 10;
  const endIndex = startIndex + 10;
  const currentItems = data?.results?.slice(startIndex, endIndex);

  console.log(data);

  return (
    <>
      <Sidebar />
      <Box sx={{ marginLeft: '250px !important' }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          {currentItems &&
            currentItems.map((item: any) => {
              return item.games.map((item: any) => {
                return (
                  <Grid item xs={3}>
                    <Cards name={item.name} id={item.id} key={item.id} />
                  </Grid>
                );
              });
            })}
        </Grid>
        {Array.from(Array(pages), (item: any, index: any) => {
          return (
            <Button
              value={index}
              onClick={(e: any) => setCurrentPage(Number(e.target.value))}
              variant="contained"
            >
              {index + 1}
            </Button>
          );
        })}
      </Box>
    </>
  );
}
