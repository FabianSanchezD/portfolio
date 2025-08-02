const Navbar = () => {
  return (
    <header className="bg-white shadow-md rounded-2xl sticky">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-black">Fabián Sánchez</h1>
        <ul className="flex gap-8 text-black font-medium pl-7">
          <li><a href="#about" className="hover:text-gray-700 transition">About</a></li>
          <li><a href="#projects" className="hover:text-gray-700 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-700 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar