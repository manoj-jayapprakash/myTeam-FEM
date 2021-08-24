import './Features.css';
import person from '../assets/icon-person.svg';
import cog from '../assets/icon-cog.svg';
import chart from '../assets/icon-chart.svg';

export const Features = () => {
  return (
    <section className="features">
      <div className="container features__content">
        <div className="section__header">
          <h2 className="section__title features-main-title">
            Build & manage distributed teams like no one else.
          </h2>
        </div>
        <div className="section__body">
          <div className="feature">
            <div className="feature__head">
              <img src={person} alt="" className="" />
            </div>

            <div className="feature__content">
              <h3 className="feature__title">Experienced Individuals</h3>
              <p className="feature__description">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature__head">
              <img src={cog} alt="" className="" />
            </div>

            <div className="feature__content">
              <h3 className="feature__title">Easy to Implement</h3>
              <p className="feature__description">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature__head">
              <img src={chart} alt="" className="" />
            </div>

            <div className="feature__content">
              <h3 className="feature__title">Enhanced Productivity</h3>
              <p className="feature__description">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
