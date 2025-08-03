import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800 shadow-md rounded-2xl sticky">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-white">Fabián Sánchez</h1>
        <ul className="flex gap-8 text-white font-medium pl-7">
          <li><Link href="/#about" className="hover:text-gray-900 transition-colors">About</Link></li>
          <li><Link href="/#projects" className="hover:text-gray-900 transition-colors">Projects</Link></li>
          <li><Link href="/#contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar