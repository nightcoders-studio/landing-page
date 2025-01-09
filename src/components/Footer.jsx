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
            <div className="text-sm font-medium text-center text-white">
                © nightCoders
            </div>

            {/* Social Media */}
            <div className="grid grid-cols-4 gap-4 justify-items-center text-text-brand-tertiary">
                <div className="flex items-center justify-center w-8 h-8">
                    <Facebook className="w-6 h-6 transition-colors hover:text-blue-600" />
                </div>
                <div className="flex items-center justify-center w-8 h-8">
                    <Linkedin className="w-6 h-6 transition-colors hover:text-blue-700" />
                </div>
                <div className="flex items-center justify-center w-8 h-8">
                    <Instagram className="w-6 h-6 transition-colors hover:text-pink-500" />
                </div>
                <div className="flex items-center justify-center w-8 h-8">
                    <img src={WhatsAppIcon} alt="WhatsApp" className="w-6 h-6 transition-colors hover:text-green-500" />
                </div>
            </div>

        </footer>
    );
};

export default Footer;
