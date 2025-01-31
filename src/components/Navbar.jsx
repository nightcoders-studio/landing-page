import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/images/logoLight.svg";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 py-2 overflow-hidden shadow-sm bg-bg-default text-text-default lg:px-16 md:w-screen sm:px-6">
            {/* Logo */}
            <div id="logoContainer" className="flex items-center space-x-2 lg:m-2">
                <img src={logo} alt="Logo" className="w-full h-full 2xl:w-52 3xl:w-96" href="/" />
            </div>

            {/* Contact Us */}
            <div className="flex items-center space-x-2 transition duration-300 ease-in-out hover:cursor-pointer hover:translate-y-1 " href="https://wa.me/+6285372603154" target="_blank">
                <span className="text-lg 3xl:text-5xl">Contact Us</span>
                <FaWhatsapp className="w-6 h-6 text-green-500 3xl:w-20 3xl:h-auto" />
            </div>
        </nav>

    );
};

export default Navbar;
