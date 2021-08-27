import './ContactUs.css';

import { Link } from 'react-router-dom';

export const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container contact-us__content">
        <div className="contact-us__header ">
          <h2 className="section__title contact-us__main-title mx-auto">
            Ready to get started?
          </h2>
        </div>
        <div className="contact-us__body ">
          <Link to="/contact" className="contact__cta">
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
};
