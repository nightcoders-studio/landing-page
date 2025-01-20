import React from 'react';
import logo from "@/assets/images/logoLight.svg";
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import WhatsAppIcon from "../assets/images/whatsapp.svg";

const Footer = () => {
    return (
        <footer className="relative grid items-center justify-center grid-cols-[30%_40%_30%] overflow-hidden bg-bg-default-quaternary sm:py-12 sm:px-4">
            {/* Gambar sebagai overlay */}
            <img
                src={logo}
                alt="Logo"
                className="absolute left-0 z-0 object-contain h-auto transform -translate-y-1/2 top-1/2 w-72 opacity-5"
            />

            {/* Logo Footer */}
            <div className="flex justify-center">
                <img src={logo} alt="Logo" className="w-auto h-12" />
            </div>

            {/* Copyright */}
            <div className="text-sm font-medium text-center text-white md:text-lg">
                ©nightCoders
            </div>

            {/* Social Media */}
            <div className="flex gap-4 sm:gap-3 md:gap-6 lg:gap-8 justify-items-center text-text-brand-tertiary">
                <div className="flex items-center justify-center">
                    <Facebook className="transition ease-in-out sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 hover:text-blue-600 hover:translate-y-1" />
                </div>
                <div className="flex items-center justify-center">
                    <Linkedin className="transition ease-in-out sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 hover:text-blue-700 hover:translate-y-1" />
                </div>
                <div className="flex items-center justify-center">
                    <Instagram className="transition ease-in-out sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 hover:text-pink-500 hover:translate-y-1" />
                </div>
                <div className="flex items-center justify-center">
                    <img
                        src={WhatsAppIcon}
                        alt="WhatsApp"
                        className="transition ease-in-out hover:translate-y-1 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 hover:text-green-500"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
