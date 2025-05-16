import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-8 flex flex-col md:flex-row justify-between items-center text-sm">
      <div className="mb-4 md:mb-0">
        © 2025 EULE. All rights reserved.
      </div>
      <div className="space-x-4">
        <Link to="/impressum" className="hover:underline">
          Impressum
        </Link>
        <Link to="/agb" className="hover:underline">
          AGB
        </Link>
        <Link to="/datenschutz" className="hover:underline">
          Datenschutz
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
