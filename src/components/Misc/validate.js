export const validate = (values) => {
  let errors = {};

  const validEmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;

  if (!values.username) {
    errors.username = 'This field is required and cannot be empty.';
  }

  if (!values.message) {
    errors.message = 'This field is required and cannot be empty.';
  }
  if (!values.email)
    errors.email = 'This field is required and cannot be empty.';
  else if (!validEmailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email address(ex: abc@gmail.com).';
  }

  return errors;
};
