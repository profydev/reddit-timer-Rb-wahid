import React from 'react';
import logo from '../Assets/logo/logo.svg';

const Header = () => (
  <header className=" ml-20 flex justify-between font-medium">
    <div>
      <a href="/">
        <img className="mt-7" src={logo} alt="" />
      </a>
    </div>
    <div className="flex font-bold mt-8">
      <a href="/search?value='javascript'">Search</a>
      <a className="ml-6" href="#how-it-works ">
        How It Works
      </a>
      <a className="mr-19 ml-5" href="#about">
        About
      </a>
    </div>
  </header>
);

export default Header;
