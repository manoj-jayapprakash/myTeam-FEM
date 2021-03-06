import './Footer.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import fb from '../assets/icon-facebook.svg';
import pinterest from '../assets/icon-pinterest.svg';
import twitter from '../assets/icon-twitter.svg';

import { Social } from '../components/UI/Social';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="logo">
          <img src={logo} alt="myTeam logo" className="myteam__logo" />
        </div>
        <div className="footer__nav">
          <Link to="/" className="footer__nav-links">
            home
          </Link>
          <Link to="/about" className="footer__nav-links">
            about
          </Link>
        </div>
        <div className="footer__address">
          <address className="address">
            987 Hillcrest Lane
            <br />
            Irvine, CA
            <br /> California 92714
            <br /> Call Us : 949-833-7432
          </address>
        </div>
        <Social domains={[fb, pinterest, twitter]} />
        <div className="copyrights">Copyright 2020. All Rights Reserved</div>
      </div>
    </footer>
  );
};
