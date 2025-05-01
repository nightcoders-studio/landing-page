"use client";

import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-default max-w-[1200px] mx-auto">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Nightcoders Logo" width={150} height={150} />
        </Link>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center ">
          <Link href="/" className="text-default hover:text-secondary">
            Home
          </Link>
          <Link href="/#services" className="text-default hover:text-secondary">
            Services
          </Link>
          <Link
            href="/portfolios"
            className="text-default hover:text-secondary"
          >
            Portfolios
          </Link>
          <Link href="/blogs" className="text-default hover:text-secondary">
            Blogs
          </Link>
          <Link href="/contact" className="text-default hover:text-secondary">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3 text-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:bg-default-secondary/50"
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => setIsOpen(false)}
              className="hover:bg-default-secondary/50"
            >
              Services
            </Link>
            <Link
              href="/portfolios"
              onClick={() => setIsOpen(false)}
              className="hover:bg-default-secondary/50"
            >
              Portfolios
            </Link>
            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
              className="hover:bg-default-secondary/50"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:bg-default-secondary/50"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
