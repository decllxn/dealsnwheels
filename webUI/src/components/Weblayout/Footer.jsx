import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 py-12 z-50">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center pb-12 border-b border-gray-700">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <Link to="/" className="text-2xl font-bold tracking-wide">
                <span className="text-white">Deals</span> 
                <span className="text-[#4A90E2]">&</span> 
                <span className="text-white">Wheels</span>
            </Link>
            <p className="text-gray-400 mt-2">#1 Car Auction Platform</p>
          </div>

        </div>

        {/* Middle Section: Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          
          {/* How It Works */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">How It Works</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/safepay" className="hover:text-[#0056D2] transition">Safe & Secure Payments</Link></li>
              <li><Link to="/buying" className="hover:text-[#0056D2] transition">How to Buy a Car</Link></li>
              <li><Link to="/selling" className="hover:text-[#0056D2] transition">How to Sell a Car</Link></li>
              <li><Link to="/finalizing" className="hover:text-[#0056D2] transition">Finalizing the Sale</Link></li>
              <li><Link to="/faqs" className="hover:text-[#0056D2] transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">For Sellers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/submit" className="hover:text-[#0056D2] transition">Submit Your Car</Link></li>
              <li><Link to="/dashboard" className="hover:text-[#0056D2] transition">Seller Dashboard</Link></li>
              <li><Link to="/photography" className="hover:text-[#0056D2] transition">Photography Guide</Link></li>
              <li><Link to="/inspections" className="hover:text-[#0056D2] transition">Vehicle Inspections</Link></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Helpful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/browse" className="hover:text-[#0056D2] transition">Browse Listings</Link></li>
              <li><Link to="/community" className="hover:text-[#0056D2] transition">Community & Events</Link></li>
              <li><Link to="/support" className="hover:text-[#0056D2] transition">Customer Support</Link></li>
              <li><Link to="/shipping" className="hover:text-[#0056D2] transition">Shipping & Delivery</Link></li>
              <li><Link to="/financing" className="hover:text-[#0056D2] transition">Car Financing</Link></li>
            </ul>
          </div>

          {/* Extra Features */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">More from Deals & Wheels</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/podcast" className="hover:text-[#0056D2] transition">The D&W Podcast</Link></li>
              <li><Link to="/shop" className="hover:text-[#0056D2] transition">Shop D&W Merch</Link></li>
              <li><Link to="/blog" className="hover:text-[#0056D2] transition">Car Auction Blog</Link></li>
              <li><Link to="/careers" className="hover:text-[#0056D2] transition">Join Our Team</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section: Socials & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm">
          
          {/* Social Media */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-[#0056D2] transition text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-[#0056D2] transition text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-[#0056D2] transition text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-[#0056D2] transition text-xl"><FaYoutube /></a>
            <a href="#" className="text-gray-400 hover:text-[#0056D2] transition text-xl"><FaTiktok /></a>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6">
            <Link to="/terms" className="hover:text-[#0056D2] transition">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-[#0056D2] transition">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-[#0056D2] transition">Cookie Policy</Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;