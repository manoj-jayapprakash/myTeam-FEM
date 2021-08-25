import { useState } from 'react';

import { Social } from '../UI/Social';

import './DirectorCard.css';

import linkedin from '../../assets/icon-linkedin.svg';
import twitter from '../../assets/icon-twitter.svg';

import cross from '../../assets/icon-cross.svg';
import close from '../../assets/icon-close.svg';

export const DirectorCard = (props) => {
  const [expandCard, setExpandCard] = useState(false);

  const buttonClickHandler = (e) => {
    setExpandCard(!expandCard);
  };
  return (
    <article className={expandCard ? 'director director-dark-bg' : 'director'}>
      <div className={expandCard ? 'hidden' : 'about__image'}>
        <img src={props.image} alt={props.name} className="about__user-image" />
      </div>
      <div className={expandCard ? 'hidden' : 'about__profile'}>
        <p className="about__profile-name">
          <strong>{props.name}</strong>
        </p>
        <p className={expandCard ? 'hidden' : 'about__profile-position'}>
          <em>{props.position}</em>
        </p>
      </div>
      <button className="about__expand" onClick={buttonClickHandler}>
        <img src={expandCard ? close : cross} alt="expand icon" />
      </button>
      <div className={expandCard ? 'about__expanded-view' : 'hidden'}>
        <p className="about__profile-name">
          <strong>{props.name}</strong>
        </p>
        <p className="comments">{props.quote}</p>
        <Social domains={[twitter, linkedin]} />
      </div>
    </article>
  );
};
