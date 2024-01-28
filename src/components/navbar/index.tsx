"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          passHref
        >
          <div className="text-white text-2xl font-bold cursor-pointer">
            <img
              src="/advaitam.png"
              className="h-12"
            />
          </div>
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/admin"
            passHref
          >
            <div className="text-white cursor-pointer">Admin</div>
          </Link>
          <Link
            href="/"
            passHref
          >
            <div className="text-white cursor-pointer">Schedule</div>
          </Link>
          <Link
            href="/about"
            passHref
          >
            <div className="text-white cursor-pointer">About</div>
          </Link>
          <Link
            href="/contact"
            passHref
          >
            <div className="text-white cursor-pointer">Contact</div>
          </Link>
        </div>

        {/* Responsive menu button for small screens */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-gray-800 p-4">
            <Link
              href="/"
              passHref
            >
              <div className="text-white cursor-pointer">Home</div>
            </Link>
            <Link
              href="/about"
              passHref
            >
              <div className="text-white cursor-pointer">About</div>
            </Link>
            <Link
              href="/contact"
              passHref
            >
              <div className="text-white cursor-pointer">Contact</div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
