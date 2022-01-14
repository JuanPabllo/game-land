import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/test" exact component={test} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
