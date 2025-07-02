import Fb from "../assets/facebook-logo-2019 1.png";
import Ig from "../assets/Instagram_logo_2022.svg 1.png";
import X from "../assets/x-twitter-logo-on-black-circle-5694247 1.png";
import In from "../assets/In.png";
import Frame from "../assets/Component 67.png";
import Web from "../assets/ico.png";

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
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Features</li>
              <li>How it works</li>
              <li>Roadmap</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Press Kit</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Help Center</li>
              <li>User Guides</li>
              <li>Release note</li>
              <li>Community</li>
              <li>Tutorials</li>
              <li>Template</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Security & Compliance</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Newsletter and Language */}
      <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Newsletter */}
        <div className="flex flex-col gap-4 w-full lg:flex-row lg:items-center lg:flex-1">
          <label className="text-sm text-gray-400">
            Subscribe to our newsletter:
          </label>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-2 rounded-[18px] bg-transparent border border-purple-500 text-white placeholder-gray-500 focus:outline-none w-full sm:w-72"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-md w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-2 justify-center lg:justify-end text-gray-400">
          <img src={Web} alt="Web Icon" className="w-4 h-4" />
          <span className="text-sm">English</span>
        </div>
      </div>
    </div>
  );
};

export default Fooster;
