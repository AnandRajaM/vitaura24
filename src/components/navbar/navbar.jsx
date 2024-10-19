import React from 'react';

const Navbar = () => {
  return (
    <header className="text-[#fff] body-font bg-black bg-opacity-10 fixed top-0 w-full z-1000">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-1000">
        <a href="#" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-black p-2 bg-[#C1FF43] rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-fluxbox">VITAura</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 hover:text-[#17FB8D] hover:font-bold font-fluxbox">Home</a>
          <a href="#" className="mr-5 hover:text-[#17FB8D] hover:font-bold font-fluxbox">Events</a>
          <a href="#" className="mr-5 hover:text-[#17FB8D] hover:font-bold font-fluxbox">About</a>
          <a href="#" className="mr-5 hover:text-[#17FB8D] hover:font-bold font-fluxbox">Contact</a>
        </nav>
        <button className="inline-flex items-center bg-[#C1FF43] border-0 py-2 px-4 focus:outline-none rounded-full text-black mt-4 md:mt-0 font-fluxbox">
          Register Now
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
