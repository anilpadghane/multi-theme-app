import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Sidebar: React.FC = () => {
  const { theme } = useTheme();
  if (theme !== 'theme2') return null;
  return (
    <aside className="hidden md:block bg-gray-900 text-white w-56 h-screen fixed top-[64px] left-0 p-6">
      <div className="font-bold mb-4">Sidebar Menu</div>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Profile</li>
      </ul>
    </aside>
  );
};
export default Sidebar;
