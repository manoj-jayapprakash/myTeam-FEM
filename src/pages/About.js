import './About.css';

import { Hero } from '../components/Hero';
import { Directors } from '../components/Directors';
import { Footer } from '../components/Footer';

export const About = () => {
  const heroTitle = 'About';
  const heroDescription =
    ' We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.';
  return (
    <>
      <Hero title={heroTitle} description={heroDescription} />
      <Directors />
      <Footer />
    </>
  );
};
