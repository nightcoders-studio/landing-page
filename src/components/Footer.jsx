import React from 'react';
import logo from "@/assets/images/logoLight.svg";
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import WhatsAppIcon from "../assets/images/whatsapp.svg";

const socialMediaIcons = [
    {
        component: Facebook,
        alt: "Facebook",
        hoverClass: "hover:text-blue-600",
    },
    {
        component: Linkedin,
        alt: "LinkedIn",
        hoverClass: "hover:text-blue-700",
    },
    {
        component: Instagram,
        alt: "Instagram",
        hoverClass: "hover:text-pink-500",
    },
    {
        component: null,
        src: WhatsAppIcon,
        alt: "WhatsApp",
        hoverClass: "hover:text-green-500",
    },
];

const Footer = () => {
    return (
        <footer className="relative grid items-center justify-center grid-cols-[30%_40%_30%] overflow-hidden bg-bg-default-quaternary sm:py-12 sm:px-4">
            {/* Background Overlay Logo */}
            <img
                src={logo}
                alt="Background Logo"
                className="absolute left-0 z-0 object-contain h-auto transform -translate-y-1/2 top-1/2 w-72 opacity-5"
            />

            {/* Footer Logo */}
            <div className="flex justify-center">
                <img src={logo} alt="Footer Logo" className="w-auto h-12" />
            </div>

            {/* Footer Copyright */}
            <div className="text-sm font-medium text-center text-white md:text-lg">
                &copy; nightCoders
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 sm:gap-3 md:gap-6 lg:gap-8 justify-items-center text-text-brand-tertiary">
                {socialMediaIcons.map((icon, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center"
                    >
                        {icon.component ? (
                            <icon.component
                                className={`transition ease-in-out sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 ${icon.hoverClass} hover:translate-y-1`}
                                aria-label={icon.alt}
                            />
                        ) : (
                            <img
                                src={icon.src}
                                alt={icon.alt}
                                className={`transition ease-in-out sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 ${icon.hoverClass} hover:translate-y-1`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
