import { Routes, Route } from 'react-router-dom';

//pages
import Login from './pages/login/Login';
import Purchase from './pages/home/Purchase';
import Sales from './pages/home/Sales';
import Unsold from './pages/home/Unsold';
import Report from './pages/home/Report';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/purchase" element={<Purchase />} />
      <Route exact path="/sales" element={<Sales />} />
      <Route exact path="/unsold" element={<Unsold />} />
      <Route exact path="/report" element={<Report />} />
    </Routes>
  );
};

export default App;
