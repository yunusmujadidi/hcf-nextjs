"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XmarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationMenu = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/donation", label: "Donation" },
];

const Navigation = () => {
  return (
    <>
      <header role="banner" className="py-10 absolute w-full z-[3]">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div>
            <Link href="/" className="px-4 text-gray-700 text-[22px] font-bold">
              HarapanFondation<span className="text-violet-600">.</span>
            </Link>
          </div>
          <div className="flex">
            <ul className="hidden md:flex space-x-8">
              {navigationMenu.map((menu, idx) => (
                <li key={menu.label}>
                  <Link
                    href={menu.href}
                    className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-violet-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase font-semibold pb-2"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="md:hidden">Menu</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
