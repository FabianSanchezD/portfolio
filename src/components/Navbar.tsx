const Navbar = () => {
  return (
    <header className="bg-gray-800 shadow-md rounded-2xl sticky">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-white">Fabián Sánchez</h1>
        <ul className="flex gap-8 text-white font-medium pl-7">
          <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar