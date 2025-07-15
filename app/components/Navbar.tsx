import { NavLink } from "react-router";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const base = "transistion hover:text-blue-400 ";
  const active = "text-orange-2 00 font-semibold";
  return (
    <div>
      <nav className=" bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-lg font-bold text-blue-300"
          >
            <FaLaptopCode className="text-blue-400 text-xl" />
            <span>The Friendly Developer</span>
          </NavLink>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ">
            <div className="space-x-4 text-sm text-gray-300">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? active : base)}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? active : base)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? active : base)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? active : base)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? active : base)}
              >
                Contact
              </NavLink>
            </div>
          </div>{" "}
          {/* Desktop Navigation end*/}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-blue-400 text-xl"
              title="Menu"
              cursor-pointer
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        { 
          menuOpen && (
            <div className="md:hidden bg-gray-800 text-gray-300 p-4 flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? active : base)}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? active : base)}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? active : base)}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? active : base)}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? active : base)}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          )}
        {/* Mobile Navigation end */}
      </nav>
    </div>
  );
}
