/* eslint-disable react/no-unknown-property */
import { useLocation, useNavigate } from 'react-router-dom';

//styles
import './sidebar.css';

//react icons
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { GiProgression } from 'react-icons/gi';
import { TbReportSearch } from 'react-icons/tb';

const Sidebar = () => {
  const navigate = useNavigate();
  const currentRoute = useLocation().pathname;

  const sidebarItems = [
    {
      id: 2,
      name: 'Purchase',
      path: '/purchase',
      icon: <BiSolidPurchaseTag size="18px" />,
    },
    {
      id: 3,
      name: 'Sales',
      path: '/sales',
      icon: <GiProgression size="18px" />,
    },
    {
      id: 4,
      name: 'Unsold',
      path: '/unsold',
      icon: <GiProgression size="18px" />,
    },
    {
      id: 5,
      name: 'Report',
      path: '/report',
      icon: <TbReportSearch size="18px" />,
    },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 pr-5 transition-transform bg-white border-r border-gray-200">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        {sidebarItems?.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => navigate(item?.path)}
                className={`flex items-center font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex btn-margin ${
                  currentRoute === item.path
                    ? item.name.toLowerCase()
                    : 'hover:bg-gray-100'
                } block button-width`}
              >
                {item?.icon}
                <span className="ml-3">{item?.name}</span>
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
