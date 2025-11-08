const Header = ({ title }) => {

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <nav>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400">Shop</a></li>
          <li><a href="#" className="hover:text-yellow-400">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;