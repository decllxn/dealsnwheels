import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: "Profile", path: "/profile" },
    { name: "My Watch List", path: "/watchlist" },
    { name: "Saved", path: "/saved" },
    { name: "Bidding History", path: "/bidding-history" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Icon */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 bg-[#1F1F1F] flex items-center justify-center rounded-full border border-gray-700 hover:border-[#4A90E2] transition-all"
        >
          <i className="ri-user-3-line text-white text-xl" />
        </motion.div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 translate-x-[-50%] sm:left-auto sm:right-0 sm:translate-x-0 mt-4 w-64 max-w-[90vw] bg-[#1F1F1F]/90 backdrop-blur-lg rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50"
        >
          {/* Profile Info */}
          <div className="px-4 py-3 border-b border-gray-700 flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#292929] flex items-center justify-center rounded-full">
              <i className="ri-user-3-line text-white text-xl" />
            </div>
            <div className="truncate">
              <p className="text-white text-sm font-semibold truncate">John Doe</p>
              <p className="text-gray-400 text-xs truncate">johndoe@example.com</p>
            </div>
          </div>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.path}
                className="block px-4 py-3 text-white text-sm transition-all duration-300 hover:bg-[#292929] hover:text-[#4A90E2]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* Logout Button */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <button
              className="w-full px-4 py-3 text-left text-red-500 text-sm transition-all duration-300 hover:bg-[#292929] hover:text-red-400"
              onClick={() => setIsOpen(false)}
            >
              Logout
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileDropdown;