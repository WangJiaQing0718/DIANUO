import React from 'react';
import './index.scss';
import NavBar from '@/component/NavBar';
import ButtomBar from '@/component/ButtomBar';

const Error = () => {
  return (
    <div>
      {/* <div><NavBar/></div> */}
      <div className="bookshelf-container">
        <nav className="shelf">
          <a className="book home-page" href="/">Home page</a>
          <a className="book about-us" href="/about">About us</a>
          <a className="book contact" href="/contact">Contact</a>

          <span className="book not-found"></span>

          <span className="door left"></span>
          <span className="door right"></span>
        </nav>
        <h1>页面制作中……</h1>
        <p>Page under construction……</p>
      </div>
    </div>

  );
};

export default Error;