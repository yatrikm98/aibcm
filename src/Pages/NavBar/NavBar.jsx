import { useState } from 'react';
import { NavLink } from 'react-router';
import {
  FaHome,
  FaInfoCircle,
  FaCookieBite,
  FaCandyCane,
  FaPhoneAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import CompanyLogo from '../../assets/CompanyLogo.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navBardata = [
    { to: "/", title: "Home", icon: <FaHome /> },
    { to: "/about", title: "About", icon: <FaInfoCircle /> },
    { to: "/biscuit-companies", title: "Biscuit Companies", icon: <FaCookieBite /> },
    { to: "/confectionary-companies", title: "Confectionery Companies", icon: <FaCandyCane /> },
    { to: "/contact", title: "Contact", icon: <FaPhoneAlt /> },
  ];

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1 border-b-2 px-2 py-1 text-base font-medium transition-all duration-200 ${
      isActive
        ? 'border-orange-400 text-orange-400'
        : 'border-transparent text-black hover:border-orange-300 hover:text-orange-400'
    }`;

  const renderedData = navBardata.map((object) => (
    <NavLink
      key={object.to}
      to={object.to}
      onClick={() => setMenuOpen(false)}
      className={linkClass}
    >
      <span className="text-sm">{object.icon}</span>
      <span>{object.title}</span>
    </NavLink>
  ));

  return (

    <nav className="fixed top-0 left-0 z-50 w-full   bg-white/95 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <a href="/" className="shrink-0">
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />
        </a>

        <div className="hidden min-[850px]:flex items-center gap-6">
          {renderedData}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-2xl text-black min-[850px]:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`min-[850px]:hidden overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 ${
          menuOpen ? 'max-h-96 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-3 px-4">
          {renderedData}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;