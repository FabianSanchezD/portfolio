import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800 shadow-md rounded-2xl sticky">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6"> 
        <h1 className="text-xl font-bold text-white"><Link href="https://drive.google.com/file/d/1eEWExGSx8QNMXgu1gnkhn41AzjsbwBQH/view">Fabián Sánchez</Link></h1>
        <ul className="flex gap-8 text-white font-medium pl-7">
            <li className="hidden md:block"><Link href="/#projects" className="hover:text-gray-900 transition-colors">Projects</Link></li>
            <li className="block"><Link href="/#experiences" className="hover:text-gray-900 transition-colors">Experiences</Link></li>
          <li className="hidden md:block"><Link href="/#contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar