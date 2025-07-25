import { NavLink } from 'react-router';
import { 
  HiOutlineHome, 
  HiOutlineChip, 
  HiOutlineAcademicCap, 
  HiOutlineBriefcase, 
  HiOutlineChatAlt2 
} from 'react-icons/hi';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'py-1' : 'py-2'}`}>
      <div className={`flex justify-center rounded-xl px-6 py-3 ${
        scrolled 
          ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-xl border border-gray-600/40 shadow-2xl shadow-black/30' 
          : 'bg-gradient-to-br from-gray-900/50 to-gray-800/60 backdrop-blur-lg border border-gray-700/30 shadow-xl shadow-black/20'
      }`}>
        <ul className="flex items-center space-x-1 md:space-x-4">
          <NavItem to="/" icon={<HiOutlineHome className="w-5 h-5" />} text="Home" />
          <NavItem to="/skills" icon={<HiOutlineChip className="w-5 h-5" />} text="Skills" />
          <NavItem to="/education" icon={<HiOutlineAcademicCap className="w-5 h-5" />} text="Education" />
          <NavItem to="/projects" icon={<HiOutlineBriefcase className="w-5 h-5" />} text="Projects" />
          <NavItem to="/contact" icon={<HiOutlineChatAlt2 className="w-5 h-5" />} text="Contact" />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, text }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
            isActive
              ? 'text-white bg-white/15 shadow-inner backdrop-blur-sm border border-white/10'
              : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-xs border border-transparent'
          }`
        }
      >
        <span>{icon}</span>
        <span className="hidden md:inline-block text-sm">{text}</span>
      </NavLink>
    </li>
  );
};

export default Navbar;