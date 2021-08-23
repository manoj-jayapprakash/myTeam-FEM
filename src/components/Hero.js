import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content mx-auto">
        <h1 className="hero__title ">
          Find the best <span className="highlight">talent</span>
        </h1>
        <p className="hero__description ">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
    </section>
  );
};
