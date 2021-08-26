import './NavMenu.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import hamburger from '../../assets/icon-hamburger.svg';
import close from '../../assets/icon-close.svg';
import logo from '../../assets/logo.svg';

export const NavMenu = (props) => {
  const [viewHamburger, setViewHamburger] = useState(false);

  const hamburgerClickHandler = () => setViewHamburger(!viewHamburger);
  const closeClickHandler = () => setViewHamburger(!viewHamburger);

  const linkClickHandler = () => {
    if (viewHamburger === false) return;
    else setViewHamburger(!viewHamburger);
  };
  return (
    <>
      <div className="logo">
        <img src={logo} alt="Myteam logo" />
      </div>

      <nav className={viewHamburger ? 'nav__mobile' : 'nav'}>
        <ul
          className={viewHamburger ? 'nav__list-mobile' : 'nav__list-desktop'}
        >
          <button className="menu__icon-hamburger" onClick={closeClickHandler}>
            <img src={close} alt="toggle navigation menu" />
          </button>
          <Link to="/" onClick={linkClickHandler}>
            <li className="nav__item">home</li>
          </Link>
          <Link to="/about" onClick={linkClickHandler}>
            <li className="nav__item">about</li>
          </Link>
          <Link
            to="/contact"
            className="nav__link-contact"
            onClick={linkClickHandler}
          >
            <li className="nav__item nav__cta">contact us</li>
          </Link>
        </ul>
      </nav>
      <button className="menu__icon-hamburger" onClick={hamburgerClickHandler}>
        <img src={hamburger} alt="toggle navigation menu" />
      </button>
    </>
  );
};
