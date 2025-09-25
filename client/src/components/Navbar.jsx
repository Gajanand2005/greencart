import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/Appcontext';
import '../index.css';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount, theme, toggleTheme } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate('/products');
    }
  }, [searchQuery]);

  return (
    <>
    <div className='bg-white dark:bg-gray-900'>
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-3 md:py-4 bg-white dark:bg-gray-900 relative transition-all">
      {/* Logo */}
      <NavLink to="/" onClick={() => setOpen(true)}>
        <img src={assets.logo} alt="Logo" className='brightness-200' />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 ">
        <NavLink to="/" className="font-bold dark:text-white">Home</NavLink>
        <NavLink to="/products" className="font-bold dark:text-white">All Products</NavLink>
        <NavLink to="/contact" className="font-bold dark:text-white">Contact</NavLink>

        {/* Search Bar */}
        <div className="hidden md:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none text-gray-500 dark:text-gray-300"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4 brightness-200" />
        </div>

        {/* Cart */}
        <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="cart" className="w-5 md:w-6 opacity-100 brightness-200" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-4 h-4 md:w-[18px] md:h-[18px] rounded-full flex items-center justify-center">
            {getCartCount()}
          </button>
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          )}
        </button>

        {/* Login / Profile */}
        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-4 md:px-6 lg:px-8 py-1.5 md:py-2 bg-green-600 hover:bg-black transition text-white rounded-3xl text-sm md:text-base"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} alt="profile" className="w-8 md:w-10" />
            <ul className="hidden group-hover:block absolute top-8 md:top-10 right-0 bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700 py-2 w-28 md:w-32 rounded-md text-xs md:text-sm z-40">
              <li
                onClick={() => navigate('my-orders')}
                className="p-2 hover:bg-primary/10 cursor-pointer dark:hover:bg-primary/20"
              >
                My order
              </li>
              <li
                onClick={logout}
                className="p-2 hover:bg-primary/10 cursor-pointer dark:hover:bg-primary/20"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-6 sm:hidden">
        <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="cart" className="w-5 md:w-6 opacity-200 brightness-200" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-4 h-4 md:w-[18px] md:h-[18px] rounded-full flex items-center justify-center">
            {getCartCount()}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2">
          <img src={assets.menu_icon} alt="menu" className="w-6 h-6 brightness-200" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800 py-4 flex flex-col items-start gap-3 px-6 text-base md:hidden z-50">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="w-full py-2 dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className="w-full py-2 dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-bold"
          >
            All products
          </NavLink>
          <NavLink
            to="/my-orders"
            onClick={() => setOpen(false)}
            className="w-full py-2 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
          >
            My order
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="w-full py-2 dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-bold"
          >
            Contact
          </NavLink>

          {/* Theme Toggle Mobile */}
          <button
            onClick={() => {
              toggleTheme();
              setOpen(false);
            }}
            className="w-full py-2 text-left dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-bold flex items-center gap-2"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            )}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2.5 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-3xl text-sm w-full"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2.5 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-3xl text-sm w-full"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
    </div>
  </>
  );
};

export default Navbar;
