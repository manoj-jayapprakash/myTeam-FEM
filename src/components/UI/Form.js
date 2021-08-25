import './Form.css';

export const Form = (props) => {
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={formHandler}>
      <input type="text" placeholder="Name" className="form__name" />
      <input type="email" placeholder="Email Address" className="form__email" />
      <input type="text" placeholder="Company Name" className="form__company" />
      <input type="text" placeholder="Title" className="form__title" />
      <textarea placeholder="Message" className="form__message" />
      <button type="submit" className="btn-submit">
        submit
      </button>
    </form>
  );
};
