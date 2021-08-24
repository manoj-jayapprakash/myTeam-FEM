import './Testimonials.css';

import { Blockquote } from './UI/Blockquote';

import kady from '../assets/avatar-kady.jpg';
import aiysha from '../assets/avatar-aiysha.jpg';
import arthur from '../assets/avatar-arthur.jpg';

export const Testimonials = () => {
  const reviews = [
    {
      id: '1',
      quote:
        '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
      name: 'Kady Baker',
      occupation: 'Product Manager at Bookmark',
      image: kady,
    },
    {
      id: '2',
      quote:
        '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
      name: 'Aiysha Reese',
      occupation: 'Founder of Manage',
      image: aiysha,
    },
    {
      id: '3',
      quote:
        '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
      name: 'Arthur Clarke',
      occupation: 'Co-founder of MyPhysio',
      image: arthur,
    },
  ];
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section__header">
          <h2 className="">
            Delivering real results for top companies. Some of our success
            stories.
          </h2>
        </div>
        <div className="section__body">
          {reviews.map((review) => (
            <Blockquote
              key={review.id}
              quote={review.quote}
              name={review.name}
              occupation={review.occupation}
              image={review.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
