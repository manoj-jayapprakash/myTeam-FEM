import './Directors.css';

import { DirectorCard } from './UI/DirectorCard';

import nikita from '../assets/avatar-nikita.jpg';
import cristian from '../assets/avatar-christian.jpg';
import cruz from '../assets/avatar-cruz.jpg';
import drake from '../assets/avatar-drake.jpg';
import griffin from '../assets/avatar-griffin.jpg';
import aden from '../assets/avatar-aden.jpg';

export const Directors = () => {
  const directors = [
    {
      image: nikita,
      name: 'Nikita Marks',
      position: 'Founder & CEO',
      quote:
        '"It always amazes me how much talent there is in every corner of the globe."',
    },
    {
      image: cristian,
      name: 'Cristian Duncan',
      position: 'Co-founder & COO',
      quote:
        '“Distributed teams required unique processes. You need to approach work in a new way.”',
    },
    {
      image: cruz,
      name: 'Cruz Hamer',
      position: 'Co-founder & CTO',
      quote: `“Technology is at the forefront of enabling distributed teams. That's where we come in.”`,
    },
    {
      image: drake,
      name: 'Drake Heaton',
      position: 'Business Development Lead',
      quote:
        '“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”',
    },
    {
      image: griffin,
      name: 'Griffin Wise',
      position: 'Lead Marketing',
      quote:
        '“Unique perspectives shape unique products, which is what you need to survive these days.”',
    },
    {
      image: aden,
      name: 'Aden Allan',
      position: 'Head of Talent',
      quote:
        '“Empowered teams create truly amazing products. Set the north star and let them follow it.”',
    },
  ];

  return (
    <section className="directors">
      <div className="container">
        <h2 className="section__title directors__title">Meet the directors</h2>
        <div className="directors__body">
          {directors.map((director) => (
            <DirectorCard
              key={director.name}
              image={director.image}
              name={director.name}
              position={director.position}
              quote={director.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
