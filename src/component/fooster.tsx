import Fb from "../assets/facebook-logo-2019 1.png";
import Ig from "../assets/Instagram_logo_2022.svg 1.png";
import X from "../assets/x-twitter-logo-on-black-circle-5694247 1.png";
import In from "../assets/In.png";
import Frame from "../assets/Component 67.png";

const  Fooster = () => {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-gray-800 pb-10">
        {/* Logo + Social Section - appears last on mobile, centered on tablet+ */}
        <div className="order-first sm:order-first text-center md:text-center flex flex-col items-center md:items-center">
          <img src={Frame} alt="Ream Track Logo" className="w-32 mb-3" />
          <p className="text-sm mb-4">Unify. Analyze. Optimize.</p>
          <div className="flex space-x-3 justify-center">
            <img src={Ig} alt="Instagram" className="w-5 h-5" />
            <img src={Fb} alt="Facebook" className="w-5 h-5" />
            <img src={X} alt="Twitter X" className="w-5 h-5" />
            <img
              src={In}
              alt="LinkedIn"
              className="w-5 h-5 bg-blue-500 rounded-[12px]"
            />
          </div>
          <p className="text-xs text-gray-500 mt-4">
            © 2025 Ream Track. All rights reserved.
          </p>
        </div>

        {/* Product */}
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product */}
          <div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>blog</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Help Center</li>
              <li>Safety</li>
              <li>Contact Us</li>
              <li>Trust & Safety</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fooster;
