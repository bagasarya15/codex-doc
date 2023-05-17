import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdGroup, MdShopTwo, MdCategory } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

const SideBar = forwardRef(({ showNav }, ref) => {
  const { pathname } = useLocation();
  const listMenu = [
    { to: '/', path: '/', icon: <MdDashboard />, name: 'Home' },
    { to: 'users', path: '/users', icon: <MdGroup />, name: 'User' },
    {
      to: 'category',
      path: '/category',
      icon: <MdCategory />,
      name: 'Category',
    },
    { to: 'product', path: '/product', icon: <MdShopTwo />, name: 'Product' },
    { to: 'customer', path: '/customer', icon: <FaUsers />, name: 'Customer' },
  ];

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <img className="w-32 h-auto" src={'./codex.png'} alt="company logo" />
      </div>

      <div className="flex flex-col">
        {(listMenu || []).map((mn) => (
          <Link to={`${mn.to}`}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                pathname == mn.path
                  ? 'bg-blue-100 text-blue-500'
                  : 'text-gray-400 hover:bg-blue-100 hover:text-blue-500'
              }`}
            >
              <div className="mr-2">{mn.icon}</div>
              <div>
                <p>{mn.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

SideBar.displayName = 'SideBar';

export default SideBar;
