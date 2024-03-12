"use client";
import { NAV_LINKS } from "@/constants/index";
import { NavLinksDto } from "@/helper/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const closeMobileMenu = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMobileMenu);

    return () => {
      document.removeEventListener("click", closeMobileMenu);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link: NavLinksDto, i: number) => (
          <Link
            href={link.href}
            key={i}
            className="regular-16 text-gray-50 pb-1.5 flexCenter cursor-pointer transition-all hover:font-bold hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <button
        onBlur={closeMobileMenu}
        className="inline-block lg:hidden"
        onClick={toggleMobileMenu}
      >
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </button>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden absolute top-16 right-0 bg-white py-4 px-6 shadow-md">
          {NAV_LINKS.map((link: NavLinksDto, i: number) => (
            <Link
              href={link.href}
              key={i}
              className="block regular-16 text-gray-50 pb-1.5 transition-all hover:font-bold hover:underline"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green_mb"
          />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
