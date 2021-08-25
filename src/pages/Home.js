import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { ContactUs } from '../components/ContactUs';
import { Footer } from '../components/Footer';

export const Home = () => {
  const heroTitle =
    'Find the best <span className="hero__highlight">talent</span>';
  const heroDescription =
    'Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.';
  return (
    <>
      <Header />
      {/* <Hero title={heroTitle} description={heroDescription} />
      <Features />
      <Testimonials />
      <ContactUs />
      <Footer /> */}
    </>
  );
};
