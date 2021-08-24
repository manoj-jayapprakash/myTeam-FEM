import './Blockquote.css';

export const Blockquote = (props) => {
  return (
    <blockquote className="quotes">
      <p className="quote">{props.quote}</p>
      <div className="citation">
        <p className="citation__name">
          <strong>{props.name}</strong>
        </p>
        <p className="citation__occupation">
          <em>{props.occupation}</em>
        </p>
        <div className="citation__imageBlock">
          <img src={props.image} alt={props.name} className="citation__image" />
        </div>
      </div>
    </blockquote>
  );
};
