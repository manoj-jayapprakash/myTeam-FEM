import { useState } from 'react';

export const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    company: '',
    title: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    console.log(errors);
  };

  return { values, handleInputChanges, handleFormSubmit, errors };
};
