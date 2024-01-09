import { Routes, Route } from 'react-router-dom';

import HomePage from 'src/pages/HomePage/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
