import { useState } from "react";
import Image from "../assets/component 67.png";

const Narbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* NAVBAR */}
      <nav className="text-2xl bg-black flex w-full p-3 fixed right-0 top-0 space-x-14 items-center justify-center z-50">
        <img src={Image} alt="Image" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex text-white gap-3.5 text-center">
          <select>
            <option>Features</option>
          </select>
          <select>
            <option>Integration</option>
          </select>
          <ul>
            <li>Price</li>
          </ul>
          <select>
            <option>Resources</option>
          </select>
          <ul>
            <li>Contact</li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <button className="text-white">Login</button>
          <button className="text-white border border-purple-500 px-4 py-0.5 rounded-lg">
            Sign up
          </button>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden ml-auto">
          <button
            className="text-4xl  p-2 rounded-lg font-bold bg-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Navigation (outside nav, positioned separately) */}
      {menuOpen && (
        <div className="lg:hidden fixed top-20 right-0 h-[400px] w-full flex flex-col text-white p-4 z-40 bg-black font-semibold text-2xl">
          <select className="w-full p-2 mb-2 rounded">
            <option>Features</option>
          </select>
          <select className="w-full p-2 mb-2">
            <option>Integration</option>
          </select>
          <ul className="mb-2 text-left px-3">
            <li>Price</li>
          </ul>
          <select className="w-full p-2 mb-2">
            <option>Resources</option>
          </select>
          <ul className="mb-2 text-left px-2">
            <li>Contact</li>
          </ul>
          <button className="py-2 rounded bg-purple-700 px-2 hover:bg-purple-800 mt-4 w-full text-left">
            Login
          </button>
          <button className="border border-purple-500 px-4 py-2 rounded mt-2  text-left w-full">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Narbar;
