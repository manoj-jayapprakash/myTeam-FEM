import './Clients.css';

import Verge from '../assets/logo-the-verge.png';
import JakartaPost from '../assets/logo-jakarta-post.png';
import Guardian from '../assets/logo-the-guardian.png';
import TechRadar from '../assets/logo-tech-radar.png';
import GadgetsNow from '../assets/logo-gadgets-now.png';

export const Clients = () => {
  const companies = [Verge, JakartaPost, Guardian, TechRadar, GadgetsNow];
  return (
    <section className="clients">
      <div className="container">
        <h2 className="section__title">Some of our clients</h2>
        <div className="clients__details">
          {companies.map((company) => (
            <div className="clients__item">
              <img src={company} alt={`${company} icon`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
