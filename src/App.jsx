import { useState } from 'react';
import Home from './pages/dashboard/Dashboard';
import Sales from './pages/sales/Sales';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'sales':
        return <Sales />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
          <li><button onClick={() => setCurrentPage('sales')}>About</button></li>
        </ul>
      </nav>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
