import React from 'react';
import { useTheme, type ThemeName} from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="head fixed w-full flex items-center justify-between bg-white/80 dark:bg-gray-900 p-4 shadow z-10">
      <span className="text-2xl font-pacifico">🌓 MultiTheme</span>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
      <select
        value={theme}
        onChange={e => setTheme(e.target.value as ThemeName)}
        className="ml-4 rounded px-2 py-1 border"
      >
        <option value="theme1">Minimal (Light)</option>
        <option value="theme2">Dark Sidebar</option>
        <option value="theme3">Colorful Cards</option>
      </select>
    </header>
  );
};
export default Header;
