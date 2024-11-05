import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername || 'User');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername(null);
    navigate('/login'); // Call navigate function after clearing storage
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-black">FlyHigh</h1>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-black lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {['Holiday Packages', 'Flight Schedule', 'Account Settings', 'Manage Booking'].map((item) => (
            <div className="group relative" key={item}>
              <a href="#" className="text-black hover:text-gray-800 no-underline">
                {item}
              </a>
              <span className="absolute left-0 right-0 h-1 bg-black scale-x-0 transition-transform duration-400 ease-in-out group-hover:scale-x-100" style={{ bottom: '-5px' }}></span>
            </div>
          ))}
        </nav>

        {/* Register/Sign In for Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {username ? (
            <>
              <span className="text-black">{username}</span>
              <button onClick={handleLogout} className="text-white bg-black px-4 py-2 rounded hover:bg-white hover:text-black">Logout</button>
            </>
          ) : (
            <>
              <a href="/register" className="text-black hover:text-gray-800 no-underline">Register</a>
              <a href="/login" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 no-underline">Sign In</a>
            </>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-6">
            {['Holiday Packages', 'Flight Schedule', 'Account Settings', 'Manage Booking', 'Register'].map((item) => (
              <div className="group relative" key={item}>
                <a href="#" className="text-black hover:text-gray-800 no-underline">{item}</a>
                <span className="absolute left-0 right-0 h-1 bg-black scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100" style={{ bottom: '-5px' }}></span>
              </div>
            ))}
            {username ? (
              <span className="text-black">{username}</span>
            ) : (
              <a href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 no-underline">Sign In</a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
