import './Form.css';

import { useForm } from '../Misc/useForm';
import { validate } from '../Misc/validate';

export const Form = (props) => {
  const { values, handleInputChanges, handleFormSubmit, errors } =
    useForm(validate);

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      <input
        type="text"
        name="username"
        placeholder="Name"
        className="form__name"
        value={values.username}
        onChange={handleInputChanges}
      />
      {errors.username && <p className="error">{errors.username}</p>}
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        className="form__email"
        value={values.email}
        onChange={handleInputChanges}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        className="form__company"
        value={values.company}
        onChange={handleInputChanges}
      />
      <input
        type="text"
        placeholder="Title"
        className="form__title"
        name="title"
        value={values.title}
        onChange={handleInputChanges}
      />
      <textarea
        name="message"
        placeholder="Message"
        className="form__message"
        value={values.message}
        onChange={handleInputChanges}
      />
      {errors.message && <p className="error">{errors.message}</p>}
      <button type="submit" className="btn-submit">
        submit
      </button>
    </form>
  );
};
