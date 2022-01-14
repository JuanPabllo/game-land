import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Game from './Pages/Game';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:slug" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
