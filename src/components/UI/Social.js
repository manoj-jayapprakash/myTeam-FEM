import './Social.css';

export const Social = (props) => {
  return (
    <div className="social">
      {props.domains.map((d) => {
        return (
          <img key={d} src={d} alt={`${d} icon`} className="social__icon" />
        );
      })}
      {/* <img src={fb} alt="facebook" className="social__icon" />
      <img src={pinterest} alt="pinterest" className="social__icon" />
      <img src={twitter} alt="twitter" className="social__icon" /> */}
    </div>
  );
};
