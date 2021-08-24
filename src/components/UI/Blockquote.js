import './Blockquote.css';

export const Blockquote = (props) => {
  return (
    <blockquote className="">
      <p>{props.quote}</p>
      <div className="citation">
        <p className="name">{props.name}</p>
        <p className="occupation">{props.occupation}</p>
        <div className="citation__imageBlock">
          <img src={props.image} alt={props.name} className="citation__image" />
        </div>
      </div>
    </blockquote>
  );
};
