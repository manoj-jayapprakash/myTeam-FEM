import './Footer.css';
import logo from '../assets/logo.svg';
import fb from '../assets/icon-facebook.svg';
import pinterest from '../assets/icon-pinterest.svg';
import twitter from '../assets/icon-twitter.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="logo">
          <img src={logo} alt="myTeam logo" />
        </div>
        <div className="footer__nav">
          <p className="">home</p>
          <p className="">about</p>
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
        <div className="social">
          <img src={fb} alt="facebook" />
          <img src={pinterest} alt="pinterest" />
          <img src={twitter} alt="twitter" />
        </div>
        <div className="copyrights">Copyright 2020. All Rights Reserved</div>
      </div>
    </footer>
  );
};
