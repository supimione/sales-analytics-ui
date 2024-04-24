/* eslint-disable react/prop-types */
import { useState } from 'react';

//components
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Header onMenuClick={toggleSidebar} />
      {sidebarOpen && <Sidebar />}
      {children}
    </div>
  );
};

export default Layout;
