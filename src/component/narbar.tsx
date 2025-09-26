import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/Component 67.png";

const Narbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* NAVBAR */}
      <nav className="text-2xl bg-black flex w-full p-3 fixed right-0 top-0 space-x-14 items-center justify-center z-50 ">
        <img src={Image} alt="Image" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex text-white gap-3.5 text-center">
          <ul className="flex gap-4">
            <li>Features</li>
            <li>Integration</li>

            <li>Price</li>

            <li>Resources</li>

            <li>Contact</li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <button className="text-white">  <Link to="/login">Login</Link></button>
          <button className="text-white border border-purple-500 px-4 py-0.5 rounded-lg">
          <Link to="/sign">sign up</Link>
          </button>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden ml-auto">
          <button
            className="text-4xl  p-2 rounded-lg font-bold bg-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Navigation (outside nav, positioned separately) */}
      {menuOpen && (
        <div className="lg:hidden fixed top-20 right-0 h-[400px] w-full flex flex-col text-white p-4 z-40 bg-black font-semibold text-2xl">
          <ul className="w-full p-2 mb-1.5 rounded space-y-1">
            <li className="pb-2 rounded-xl">Features</li>
            <li className="pb-2 rounded-xl">Integration</li>
            <li className="pb-2 rounded-xl">Price</li>
            <li className="pb-2 rounded-xl">Resources</li>
            <li className="pb-2 rounded-xl">Contact</li>
          </ul>
          <button className="py-2 rounded bg-purple-700 px-2 hover:bg-purple-800 mt-4 w-full text-left">
          <Link to="/login">Login</Link>
          </button>
          <button className="border border-purple-500 px-4 py-2 rounded mt-2  text-left w-full">
          <Link to="/sign">sign up</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Narbar;
