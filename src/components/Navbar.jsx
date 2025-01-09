import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/images/logoLight.svg";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-4 py-2 text-gray-900 bg-gray-100 sm:px-6">
            {/* Logo */}
            <div id="logoContainer" className="flex items-center space-x-2 lg:m-2">
                <img src={logo} alt="Logo" className="w-full h-full" />
            </div>

            {/* Contact Us */}
            <div className="flex items-center space-x-2">
                <span className="text-lg ">Contact Us</span>
                <FaWhatsapp className="w-6 h-6 text-green-500" />
            </div>
        </nav>

    );
};

export default Navbar;
