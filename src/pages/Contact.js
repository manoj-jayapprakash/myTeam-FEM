import './Contact.css';

import { Form } from '../components/UI/Form';
import { Footer } from '../components/Footer';
import person from '../assets/icon-person.svg';
import cog from '../assets/icon-cog.svg';
import chart from '../assets/icon-chart.svg';

export const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container contact__content">
          <div className="contact__left">
            <h2 className="hero__title contact__title">Contact</h2>
            <p className="contact__subtitle">Ask us about</p>
            <div className="contact__questions">
              <div className="contact__question-item">
                <img src={person} alt="" />
                <p className="contact__question">
                  The quality of our talent network
                </p>
              </div>
              <div className="contact__question-item">
                <img src={cog} alt="" />
                <p className="contact__question">
                  Usage & implementation of our software
                </p>
              </div>
              <div className="contact__question-item">
                <img src={chart} alt="" />
                <p className="contact__question">
                  How we help drive innovation
                </p>
              </div>
            </div>
          </div>

          <div className="contact__form">
            <Form />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
